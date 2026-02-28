import { NextResponse } from 'next/server';

const ONE_WEEK = 60 * 60 * 24 * 7;
const SERMON_PLAYLIST_KEYWORD = '주일설교';
type YoutubePlaylistItem = {
    id?: string;
    snippet?: {
        title?: string;
    };
};

function normalizeText(value: string): string {
    return value.replace(/\s+/g, '').toLowerCase();
}

export async function GET() {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const channelHandle = process.env.YOUTUBE_CHANNEL_HANDLE;
    const sundaySermonPlaylistId = process.env.YOUTUBE_SUNDAY_SERMON_PLAYLIST_ID;

    if (!apiKey || (!channelId && !channelHandle)) {
        return NextResponse.json(
            { error: 'Missing YOUTUBE_API_KEY and channel identifier' },
            { status: 500 }
        );
    }

    let targetPlaylistId = sundaySermonPlaylistId;

    if (!targetPlaylistId) {
        const channelQuery = channelId
            ? `id=${encodeURIComponent(channelId)}`
            : `forHandle=${encodeURIComponent(channelHandle ?? '')}`;
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=id&${channelQuery}&key=${apiKey}`;
        const channelRes = await fetch(channelUrl, {
            next: { revalidate: ONE_WEEK, tags: ['youtube-latest'] }
        });

        if (!channelRes.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch channel info' },
                { status: 502 }
            );
        }

        const channelData = await channelRes.json();
        const resolvedChannelId = channelData?.items?.[0]?.id;

        if (!resolvedChannelId) {
            return NextResponse.json(
                { error: 'Channel not found' },
                { status: 404 }
            );
        }

        const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${resolvedChannelId}&maxResults=50&key=${apiKey}`;
        const playlistsRes = await fetch(playlistsUrl, {
            next: { revalidate: ONE_WEEK, tags: ['youtube-latest'] }
        });

        if (!playlistsRes.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch playlists' },
                { status: 502 }
            );
        }

        const playlistsData = await playlistsRes.json();
        const items: YoutubePlaylistItem[] = playlistsData?.items ?? [];
        const matchedPlaylist = items.find((playlist) =>
            normalizeText(playlist?.snippet?.title ?? '').includes(normalizeText(SERMON_PLAYLIST_KEYWORD))
        );

        targetPlaylistId = matchedPlaylist?.id;
    }

    if (!targetPlaylistId) {
        return NextResponse.json(
            { error: 'Sunday sermon playlist not found' },
            { status: 404 }
        );
    }

    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${targetPlaylistId}&maxResults=1&key=${apiKey}`;
    const playlistRes = await fetch(playlistUrl, {
        next: { revalidate: ONE_WEEK, tags: ['youtube-latest'] }
    });

    if (!playlistRes.ok) {
        return NextResponse.json(
            { error: 'Failed to fetch playlist items' },
            { status: 502 }
        );
    }

    const playlistData = await playlistRes.json();
    const item = playlistData?.items?.[0];

    if (!item) {
        return NextResponse.json(
            { error: 'No videos found' },
            { status: 404 }
        );
    }

    const videoId = item?.contentDetails?.videoId;
    const snippet = item?.snippet ?? {};
    const thumbnails = snippet?.thumbnails ?? {};

    const response = NextResponse.json(
        {
            videoId,
            title: snippet?.title ?? '',
            publishedAt: snippet?.publishedAt ?? '',
            thumbnailUrl:
                thumbnails?.maxres?.url ||
                thumbnails?.standard?.url ||
                thumbnails?.high?.url ||
                thumbnails?.medium?.url ||
                thumbnails?.default?.url ||
                '',
            videoUrl: videoId ? `https://www.youtube.com/watch?v=${videoId}` : ''
        },
        { status: 200 }
    );

    response.headers.set(
        'Cache-Control',
        `s-maxage=${ONE_WEEK}, stale-while-revalidate=86400`
    );

    return response;
}

'use client';

import * as S from './style';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import KakaoMap from '@/components/KakaoMap';
import { getLatestBulletin, getPublishedNotices } from '@/lib/content/client';
import type { Bulletin, Notice } from '@/types/content';
import { formatKstDate, formatKstMonthDay } from '@/lib/dateTimeKst';

function toKstDate(value: string | Date): Date {
    const date = new Date(value);
    return new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
}

function getKstWeekRange(baseDate: Date): { weekStart: Date; weekEnd: Date } {
    const kstNow = toKstDate(baseDate);
    const day = kstNow.getDay();
    const mondayOffset = day === 0 ? -6 : 1 - day;

    const weekStart = new Date(kstNow);
    weekStart.setDate(kstNow.getDate() + mondayOffset);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    return { weekStart, weekEnd };
}

export default function HomeContainer() {
    const [latestVideo, setLatestVideo] = useState<{
        title: string;
        thumbnailUrl: string;
        videoUrl: string;
        videoId?: string;
        publishedAt: string;
    } | null>(null);
    const [latestVideoPlayerOpen, setLatestVideoPlayerOpen] = useState(false);
    const [isLoadingLatest, setIsLoadingLatest] = useState(true);
    const [featuredBulletin, setFeaturedBulletin] = useState<Bulletin | null>(null);
    const [noticeSummary, setNoticeSummary] = useState<Notice[]>([]);
    const [isLoadingSummary, setIsLoadingSummary] = useState(true);
    useEffect(() => {
        let mounted = true;
        fetch('/api/youtube/latest')
            .then(res => res.json())
            .then(data => {
                if (!mounted || data?.error) return;
                setLatestVideo(data);
            })
            .catch(() => { })
            .finally(() => {
                if (mounted) setIsLoadingLatest(false);
            });
        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        Promise.all([getLatestBulletin(), getPublishedNotices(100)]).then(([latest, notices]) => {
            if (!mounted) return;

            const { weekStart, weekEnd } = getKstWeekRange(new Date());
            const weeklyNotices = notices.filter((notice) => {
                const noticeStart = toKstDate(notice.start_at);
                return noticeStart >= weekStart && noticeStart <= weekEnd;
            });

            setFeaturedBulletin(latest ?? null);
            setNoticeSummary(weeklyNotices.slice(0, 3));
            setIsLoadingSummary(false);
        }).catch(() => {
            if (!mounted) return;
            setFeaturedBulletin(null);
            setNoticeSummary([]);
            setIsLoadingSummary(false);
        });

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        if (!latestVideoPlayerOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setLatestVideoPlayerOpen(false);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [latestVideoPlayerOpen]);

    return (
        <S.Wrapper>
            <S.HeroSection>
                <S.HeroBackground>
                    <Image
                        src="/main.png"
                        alt="순복음범천교회 배경"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        quality={75}
                    />
                </S.HeroBackground>
            </S.HeroSection>

            <S.NewcomerBanner>
                <S.NewcomerContent>
                    <S.NewcomerTitle>우리의 정체성 (Identity)</S.NewcomerTitle>
                    <S.NewcomerQuote>
                        “너희는 세상의 빛이라<br />
                        산 위에 있는 동네가 숨겨지지 못할 것이요”(마 5:14)
                    </S.NewcomerQuote>
                    <S.NewcomerDescription>
                        우리는 서로의 삶을 밝히는 공동체입니다.<br />
                        가정과 일터, 이웃과 지역 안에서<br />
                        예수님의 사랑을 나누며 살아가고자 합니다.
                    </S.NewcomerDescription>
                    <S.NewcomerDescription>
                        교회는 완벽한 사람들이 모인 곳이 아닙니다.<br />
                        부족하고 연약한 이들이 함께 배우고 성장하는 공간입니다.
                    </S.NewcomerDescription>
                    <S.NewcomerButton>
                        <Link href="/intro?tab=greeting">자세히 보기 →</Link>
                    </S.NewcomerButton>
                </S.NewcomerContent>
            </S.NewcomerBanner>

            <S.QuickSummarySection>
                <S.QuickSummaryInner>
                    <S.SummaryCard>
                        <S.SummaryHeader>
                            <S.SummaryLabel>공지 요약</S.SummaryLabel>
                            <S.SummaryTitle>이번 주 교회 일정</S.SummaryTitle>
                        </S.SummaryHeader>
                        {isLoadingSummary ? (
                            <S.SummaryLoading>공지 불러오는 중...</S.SummaryLoading>
                        ) : noticeSummary.length === 0 ? (
                            <S.SummaryLoading>노출할 공지가 없습니다.</S.SummaryLoading>
                        ) : (
                            <S.SummaryList>
                                {noticeSummary.map((notice) => (
                                    <S.SummaryItem key={notice.id}>
                                        <S.SummaryItemDate>
                                            {formatKstMonthDay(notice.start_at)}
                                        </S.SummaryItemDate>
                                        <S.SummaryItemText>{notice.title}</S.SummaryItemText>
                                    </S.SummaryItem>
                                ))}
                            </S.SummaryList>
                        )}
                        <S.SummaryLink href="/newcomer?tab=notice">공지 전체 보기</S.SummaryLink>
                    </S.SummaryCard>

                    <S.SummaryCard>
                        <S.SummaryHeader>
                            <S.SummaryLabel>주보 요약</S.SummaryLabel>
                            <S.SummaryTitle>{featuredBulletin?.title ?? '최신 주보'}</S.SummaryTitle>
                        </S.SummaryHeader>
                        <S.BulletinMeta>
                            {isLoadingSummary
                                ? '주보 불러오는 중...'
                                : featuredBulletin
                                    ? `${formatKstDate(featuredBulletin.week_start_date)} · ${featuredBulletin.service_type ?? '주일 예배'}`
                                    : '등록된 주보가 없습니다.'}
                        </S.BulletinMeta>
                        <S.SummaryLink href="/bulletins">주보 전체 보기</S.SummaryLink>
                    </S.SummaryCard>
                </S.QuickSummaryInner>
            </S.QuickSummarySection>

            {/* 4. 최신 영상 */}
            <S.NewsSection>
                <S.NewsHeader>이번 주 설교</S.NewsHeader>
                <S.NewsMediaCard>
                    {isLoadingLatest ? (
                        <S.SkeletonBox aria-hidden="true" />
                    ) : (
                        <S.ThumbnailButton
                            type="button"
                            onClick={() => latestVideo?.videoId && setLatestVideoPlayerOpen(true)}
                            aria-label="이번 주 설교 재생"
                        >
                            <Image
                                src={latestVideo?.thumbnailUrl || '/main.png'}
                                alt={latestVideo?.title || '이번 주 설교 썸네일'}
                                fill
                                sizes="(max-width: 768px) 95vw, 1200px"
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                            <S.ThumbnailOverlay data-overlay="true" />
                            <S.ThumbnailTitle data-title="true">
                                {latestVideo?.title || '이번 주 설교'}
                            </S.ThumbnailTitle>
                        </S.ThumbnailButton>
                    )}
                </S.NewsMediaCard>
            </S.NewsSection>

            <S.LocationSection>
                <S.LocationInner>
                    <S.LocationHeader>
                        <S.LocationTitle>오시는 길</S.LocationTitle>
                        <S.LocationDesc>
                            주소 : 부산광역시 부산진구 엄광로 359<br />
                            (버스 - 신암입구 하차 도보 5분｜지하철 - 부암역 7번 출구 하차 도보 10분)
                        </S.LocationDesc>
                    </S.LocationHeader>
                    <S.LocationMapCard>
                        <KakaoMap />
                    </S.LocationMapCard>
                </S.LocationInner>
            </S.LocationSection>

            {latestVideo?.videoId && latestVideoPlayerOpen && (
                <S.VideoOverlay
                    role="dialog"
                    aria-modal="true"
                    aria-label={latestVideo?.title || '최신 영상'}
                    onClick={() => setLatestVideoPlayerOpen(false)}
                >
                    <S.VideoModal onClick={e => e.stopPropagation()}>
                        <S.VideoFrame
                            src={`https://www.youtube.com/embed/${latestVideo.videoId}?autoplay=1&rel=0`}
                            title={latestVideo?.title || '최신 영상'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <S.CloseButton type="button" onClick={() => setLatestVideoPlayerOpen(false)} aria-label="닫기">
                            ✕
                        </S.CloseButton>
                    </S.VideoModal>
                    <S.VideoCaption>{latestVideo.title}</S.VideoCaption>
                </S.VideoOverlay>
            )}

            <S.WorshipSection>
                <S.WorshipTableHeader>예배 안내</S.WorshipTableHeader>
                <S.WorshipTableWrapper>


                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>주일예배</S.WorshipTableTitle>
                        <S.WorshipTableRow>1부 &nbsp;&nbsp;오전 9:00</S.WorshipTableRow>
                        <S.WorshipTableRow>2부 &nbsp;&nbsp;오전 11:00</S.WorshipTableRow>
                        <S.WorshipTableRow>3부 &nbsp;&nbsp;오후 2:00</S.WorshipTableRow>
                        <S.WorshipTableRow>2층 &nbsp;&nbsp;본당</S.WorshipTableRow>
                    </S.WorshipTableColumn>

                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>미래세대 주일예배</S.WorshipTableTitle>
                        <S.WorshipTableRow>
                            <span>영유치부</span>
                            <span>오전 11:00</span>
                            <span>3층 모자실</span>
                        </S.WorshipTableRow>
                        <S.WorshipTableRow>
                            <span>유초등부</span>
                            <span>오전 10:30</span>
                            <span>교육관 3층</span>
                        </S.WorshipTableRow>
                        <S.WorshipTableRow>
                            <span>중고등부</span>
                            <span>오전 10:00</span>
                            <span>1층 소예배실</span>
                        </S.WorshipTableRow>
                        <S.WorshipTableRow>
                            <span>청년예배</span>
                            <span>오후 2:00</span>
                            <span>1층 소예배실</span>
                        </S.WorshipTableRow>
                    </S.WorshipTableColumn>

                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>수요예배</S.WorshipTableTitle>
                        <S.WorshipTableRow>수요일 저녁 7:30</S.WorshipTableRow>
                        <S.WorshipTableRow>2층 본당</S.WorshipTableRow>
                    </S.WorshipTableColumn>

                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>금요철야기도회</S.WorshipTableTitle>
                        <S.WorshipTableRow>금요일 저녁 8:30</S.WorshipTableRow>
                        <S.WorshipTableRow>2층 본당</S.WorshipTableRow>
                    </S.WorshipTableColumn>

                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>새벽기도회</S.WorshipTableTitle>
                        <S.WorshipTableRow>월~금 새벽 5:00</S.WorshipTableRow>
                        <S.WorshipTableRow>1층 소예배실</S.WorshipTableRow>
                    </S.WorshipTableColumn>
                </S.WorshipTableWrapper>
            </S.WorshipSection>

            {/* 7. 퀵 링크 섹션 */}
            {/* <S.QuickLinksSection>
                <S.QuickLinksGrid>
                    <S.QuickLinkCard>
                        <S.CardHeader>
                            <S.CardTitle>주일 설교</S.CardTitle>
                            <S.CardDesc>주일설교로 한 주간의 삶에 힘을 얻으시기 바랍니다.</S.CardDesc>
                        </S.CardHeader>
                        <S.CardLinks>
                            <a href="https://www.youtube.com/@%EC%88%9C%EB%B3%B5%EC%9D%8C%EB%B2%94%EC%B2%9C%EA%B5%90%ED%9A%8C" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <S.MainActionLink>설교 영상 바로 가기</S.MainActionLink>
                            </a>
                            <Link href="/intro?tab=greeting" style={{ textDecoration: 'none' }}>
                                <S.SubActionLink>교회소개</S.SubActionLink>
                            </Link>
                        </S.CardLinks>
                    </S.QuickLinkCard>

                    <S.QuickLinkCard>
                        <S.CardHeader>
                            <S.CardTitle>예배 안내</S.CardTitle>
                            <S.CardDesc>주일예배와 주중예배 모임 안내입니다.</S.CardDesc>
                        </S.CardHeader>
                        <S.CardLinks>
                            <Link href="/intro?tab=worship" style={{ textDecoration: 'none' }}>
                                <S.MainActionLink>예배 시간 안내 바로 가기</S.MainActionLink>
                            </Link>
                            <Link href="/intro?tab=worship#offering" style={{ textDecoration: 'none' }}>
                                <S.SubActionLink>헌금 안내</S.SubActionLink>
                            </Link>
                        </S.CardLinks>
                    </S.QuickLinkCard>

                    <S.QuickLinkCard>
                        <S.CardHeader>
                            <S.CardTitle>새가족안내</S.CardTitle>
                            <S.CardDesc>순복음범천교회에 오신 여러분을 환영합니다.</S.CardDesc>
                        </S.CardHeader>
                        <S.CardLinks>
                            <Link href="/newcomer?tab=welcome" style={{ textDecoration: 'none' }}>
                                <S.MainActionLink>처음 오셨나요? 바로 가기</S.MainActionLink>
                            </Link>
                            <Link href="/intro?tab=location" style={{ textDecoration: 'none' }}>
                                <S.SubActionLink>오시는 길</S.SubActionLink>
                            </Link>
                        </S.CardLinks>
                    </S.QuickLinkCard>
                </S.QuickLinksGrid>
            </S.QuickLinksSection> */}

        </S.Wrapper >
    );
}

'use client';

import * as S from './style';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import KakaoMap from '@/components/KakaoMap';
import { getPublishedBulletins, getMonthlySummary } from '@/lib/content/client';
import type { Bulletin, MonthlySummary } from '@/types/content';
import { formatKstDate } from '@/lib/dateTimeKst';

const HERO_BANNERS = [
    { src: '/banner/main.png', alt: '순복음범천교회 메인 배너', isDark: false },
    { src: '/banner/sa.png', alt: '순복음범천교회 메인 배너', isDark: true },
] as const;

function toKstDate(value: string | Date): Date {
    const date = new Date(value);
    return new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
}

function getCurrentKstMonthKey(baseDate: Date): string {
    const kstDate = toKstDate(baseDate);
    const year = kstDate.getFullYear();
    const month = String(kstDate.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

type MonthlyScheduleRow = {
    date: string | null;
    details: string[];
};

function parseMonthlySchedule(content: string): MonthlyScheduleRow[] {
    return content
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const pipeMatch = line.match(/^(\d{1,2}일)\s*[|｜]\s*(.+)$/);
            const plainMatch = line.match(/^(\d{1,2}일)\s+(.+)$/);

            const date = pipeMatch?.[1] ?? plainMatch?.[1] ?? null;
            const detailText = pipeMatch?.[2] ?? plainMatch?.[2] ?? line;

            const details = detailText
                .split('/')
                .map((item) => item.trim())
                .filter(Boolean);

            return {
                date,
                details: details.length > 0 ? details : [detailText.trim()],
            };
        });
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
    const [featuredBulletins, setFeaturedBulletins] = useState<Bulletin[]>([]);
    const [monthlySummary, setMonthlySummary] = useState<MonthlySummary | null>(null);
    const [isLoadingSummary, setIsLoadingSummary] = useState(true);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
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

        const monthKey = getCurrentKstMonthKey(new Date());

        Promise.all([getPublishedBulletins(5), getMonthlySummary(monthKey)]).then(([bulletins, monthly]) => {
            if (!mounted) return;

            setFeaturedBulletins(bulletins ?? []);
            setMonthlySummary(monthly ?? null);
            setIsLoadingSummary(false);
        }).catch(() => {
            if (!mounted) return;
            setFeaturedBulletins([]);
            setMonthlySummary(null);
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

    useEffect(() => {
        if (HERO_BANNERS.length < 2) return;

        const timer = window.setInterval(() => {
            setCurrentBannerIndex((prev) => (prev + 1) % HERO_BANNERS.length);
        }, 5000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const isDark = HERO_BANNERS[currentBannerIndex]?.isDark ?? false;
        document.body.dataset.homeBannerDark = isDark ? '1' : '0';
        window.dispatchEvent(new CustomEvent('home-banner-tone-change', { detail: { isDark } }));
    }, [currentBannerIndex]);

    useEffect(() => {
        return () => {
            delete document.body.dataset.homeBannerDark;
            window.dispatchEvent(new CustomEvent('home-banner-tone-change', { detail: { isDark: false } }));
        };
    }, []);

    const monthlyRows = monthlySummary ? parseMonthlySchedule(monthlySummary.content) : [];

    return (
        <S.Wrapper>
            <S.HeroSection>
                <S.HeroBackground>
                    <S.HeroSlides>
                        {HERO_BANNERS.map((banner, index) => (
                            <S.HeroFadeSlide key={banner.src} $active={currentBannerIndex === index}>
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority={index === 0}
                                    quality={75}
                                />
                            </S.HeroFadeSlide>
                        ))}
                    </S.HeroSlides>
                    <S.HeroIndicators aria-hidden="true">
                        {HERO_BANNERS.map((banner, index) => (
                            <S.HeroIndicator
                                key={`indicator-${banner.src}`}
                                type="button"
                                onClick={() => setCurrentBannerIndex(index)}
                                $active={currentBannerIndex === index}
                                aria-label={`${index + 1}번 배너로 이동`}
                            />
                        ))}
                    </S.HeroIndicators>
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
                        부족하고 연약한 이들이 함께 배우고 성장하는 공동체입니다.
                    </S.NewcomerDescription>
                    <S.NewcomerButton>
                        <Link href="/intro?tab=greeting">자세히 보기 →</Link>
                    </S.NewcomerButton>
                </S.NewcomerContent>
            </S.NewcomerBanner>

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
                                src={latestVideo?.thumbnailUrl || '/banner/main.png'}
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

            <S.InfoSection>
                <S.InfoInner>
                    <S.InfoColumn>
                        <S.InfoTitle>주보</S.InfoTitle>
                        {isLoadingSummary ? (
                            <S.InfoText>주보 불러오는 중...</S.InfoText>
                        ) : featuredBulletins.length > 0 ? (
                            <S.InfoList>
                                {featuredBulletins.map((bulletin) => (
                                    <S.InfoListLinkItem key={bulletin.id} href={`/bulletins?bulletinId=${encodeURIComponent(bulletin.id)}`}>
                                        <S.InfoRowTitle>{bulletin.title}</S.InfoRowTitle>
                                        <S.InfoRowMeta>{formatKstDate(bulletin.week_start_date)}</S.InfoRowMeta>
                                    </S.InfoListLinkItem>
                                ))}
                            </S.InfoList>
                        ) : (
                            <S.InfoText>등록된 주보가 없습니다.</S.InfoText>
                        )}
                        <S.InfoLink href="/bulletins">주보 전체 보기</S.InfoLink>
                    </S.InfoColumn>

                    <S.InfoColumn>
                        <S.InfoTitle>{new Date().toLocaleString('ko-KR', { month: 'long' })} 월간 일정</S.InfoTitle>
                        {isLoadingSummary ? (
                            <S.InfoText>월간 정보 불러오는 중...</S.InfoText>
                        ) : monthlySummary ? (
                            <S.InfoList>
                                {monthlyRows.map((row, index) => (
                                    <S.InfoListItem key={`${monthlySummary.id}-${index}`}>
                                        {row.date ? <S.InfoScheduleDate>{row.date}</S.InfoScheduleDate> : null}
                                        <S.InfoScheduleDetails>
                                            {row.details.map((detail, detailIndex) => (
                                                <S.InfoScheduleDetail key={`${monthlySummary.id}-${index}-${detailIndex}`}>
                                                    {detail}
                                                </S.InfoScheduleDetail>
                                            ))}
                                        </S.InfoScheduleDetails>
                                    </S.InfoListItem>
                                ))}
                            </S.InfoList>
                        ) : (
                            <S.InfoText>이번 달 월간 정보가 없습니다.</S.InfoText>
                        )}
                    </S.InfoColumn>
                </S.InfoInner>
            </S.InfoSection>

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
                        <S.WorshipTableRow>1부예배 · 오전 9:00 · 2F 본당</S.WorshipTableRow>
                        <S.WorshipTableRow>2부예배 · 오전 11:00 · 2F 본당</S.WorshipTableRow>
                        <S.WorshipTableRow>오후예배 · 오후 2:00 · 2F 본당</S.WorshipTableRow>
                    </S.WorshipTableColumn>

                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>부서예배</S.WorshipTableTitle>
                        <S.WorshipTableRow>영유치부 · 오전 11:00 · B1 키즈룸</S.WorshipTableRow>
                        <S.WorshipTableRow>유초등부 · 오전 10:40 · 비전센터 3F</S.WorshipTableRow>
                        <S.WorshipTableRow>청소년부 · 오전 9:50 · 1F 소예배실</S.WorshipTableRow>
                        <S.WorshipTableRow>청년부 · 오후 2:00 · 1F 소예배실</S.WorshipTableRow>
                    </S.WorshipTableColumn>

                    <S.WorshipTableColumn>
                        <S.WorshipTableTitle>주중예배</S.WorshipTableTitle>
                        <S.WorshipTableRow>새벽기도회 · 오전 5:00 · 1F 소예배실</S.WorshipTableRow>
                        <S.WorshipTableRow>수요예배 · 저녁 7:30 · 2F 본당</S.WorshipTableRow>
                        <S.WorshipTableRow>금요기도회 · 저녁 8:30 · 2F 본당</S.WorshipTableRow>
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

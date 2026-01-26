'use client';

import * as S from './style';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import KakaoMap from '@/components/KakaoMap';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

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
            {/* 1. 배너 섹션 */}
            <S.HeroSection>
                <S.HeroBackground>
                    <Image
                        src="/bg.jpeg"
                        alt="순복음범천교회 배경"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        quality={75}
                    />
                </S.HeroBackground>
                <S.HeroContent initial="initial" animate="animate" variants={staggerContainer}>
                    <motion.div variants={fadeInUp}>
                        <S.HeroTitle>순복음범천교회에 오신<br /> 여러분을 환영합니다!</S.HeroTitle>
                        <S.HeroSubtitle>
                            우리는 모든 세대가 하나 되어 성령의 인도하심을 따라<br /> 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.
                        </S.HeroSubtitle>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <S.HeroButton>
                            <Link href="/intro">자세히 보기 →</Link>
                        </S.HeroButton>
                    </motion.div>
                </S.HeroContent>
            </S.HeroSection>

            {/* 2. 교회 소개 핵심 문구 */}
            {/* <S.IntroSection>
                <S.IntroContent>
                    <S.IntroTitle>순복음범천교회에 오신 것을 환영합니다!</S.IntroTitle>
                    <S.IntroDescription>
                        우리는 모든 세대가 하나 되어 성령의 인도하심을 따라 하나님 나라의 꿈을 꾸는 따뜻한 가족 공동체입니다.<br />
                        우리 교회는 예수 그리스도의 사랑을 세상으로 흘려보내며 모든 세대가 함께 예배하고 섬기는 교회입니다.
                    </S.IntroDescription>
                    <S.IntroButton>
                        <Link href="/intro">자세히 보기 →</Link>
                    </S.IntroButton>
                </S.IntroContent>
            </S.IntroSection> */}

            {/* 3. 처음 오셨나요? 배너 */}
            <S.NewcomerBanner>
                <S.NewcomerBackground>
                    {/* <Image
                        src="/bible_background.jpg"
                        alt="성경 배경 이미지"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={75}
                    /> */}
                </S.NewcomerBackground>
                <S.NewcomerOverlay />
                <S.NewcomerContent>
                    <S.NewcomerTitle>순복음범천교회에 처음 오셨나요?</S.NewcomerTitle>
                    <S.NewcomerDescription>
                        처음 방문하신 분들을 위한 안내입니다.<br />
                        따뜻한 환영과 함께 믿음의 여정을 시작하세요.
                    </S.NewcomerDescription>
                    <S.NewcomerButton>
                        <Link href="/newcomer">새가족 안내 →</Link>
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
                                src={latestVideo?.thumbnailUrl || '/bg.jpeg'}
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

            {/* 4-1. 오시는 길 */}
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

            {/* 4. 교회 소식 / 주보 섹션 */}
            {/* <S.NewsSection>
                <S.NewsGrid>
                    <S.NewsCard>
                        <S.NewsLabel>우리가 이루어가는</S.NewsLabel>
                        <S.NewsTitle>하나님 나라</S.NewsTitle>
                        <S.NewsDivider />
                        <S.NewsDescription>
                            순복음범천교회는 성령의 인도하심을 따라 하나님 나라의 비전을 품고
                            예수 그리스도의 사랑을 세상으로 흘려보내는 따뜻한 가족 공동체입니다.
                        </S.NewsDescription>
                        <S.NewsButton>
                            <Link href="/intro">자세히 보기 →</Link>
                        </S.NewsButton>
                    </S.NewsCard>
                    <S.NewsImageCard>
                        <Image
                            src="/bg.jpeg"
                            alt="순복음범천교회 교회 내부 모습"
                            width={600}
                            height={350}
                            style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '8px' }}
                            priority
                        />
                    </S.NewsImageCard>
                </S.NewsGrid>
            </S.NewsSection> */}

            {/* 5. 유튜브 채널 섹션 */}
            <S.YouTubeSection>
                <S.YouTubeContent>
                    <S.YouTubeLabel>언제 어디서나</S.YouTubeLabel>
                    <S.YouTubeTitle>예배 스트리밍을 만나보세요!</S.YouTubeTitle>
                    <S.YouTubeButton
                        href="https://www.youtube.com/@%EC%88%9C%EB%B3%B5%EC%9D%8C%EB%B2%94%EC%B2%9C%EA%B5%90%ED%9A%8C"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube /> 유튜브 바로가기
                    </S.YouTubeButton>
                </S.YouTubeContent>
            </S.YouTubeSection>

            {/* 6. 예배 안내 섹션 */}
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

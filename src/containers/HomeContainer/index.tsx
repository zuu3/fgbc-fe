'use client';

import * as S from './style';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaYoutube, FaMapMarkerAlt, FaPhone, FaFax } from 'react-icons/fa';

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
    return (
        <S.Wrapper>
            {/* 1. 배너 섹션 */}
            <S.HeroSection>
                <S.HeroContent initial="initial" animate="animate" variants={staggerContainer}>
                    <motion.div variants={fadeInUp}>
                        <S.HeroTitle>순복음범천교회에<br />오신 것을 환영합니다!</S.HeroTitle>
                        <S.HeroSubtitle>
                            행복한 교회, 행복한 성도!<br />하나님의 사랑과 은혜가 넘치는 행복한 신앙 공동체입니다.
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
            <S.IntroSection>
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
            </S.IntroSection>

            {/* 3. 처음 오셨나요? 배너 */}
            <S.NewcomerBanner>
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

            {/* 4. 교회 소식 / 주보 섹션 */}
            <S.NewsSection>
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
                        <S.NewsImage src="/bg.jpeg" alt="교회 소식" />
                    </S.NewsImageCard>
                </S.NewsGrid>
            </S.NewsSection>

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
                <S.SectionTitle>예배 안내</S.SectionTitle>
                <S.WorshipGrid>
                    <S.WorshipCard>
                        <S.WorshipCardHeader>주일 예배</S.WorshipCardHeader>
                        <S.WorshipList>
                            <S.WorshipItem>
                                <S.WorshipName>1부 예배</S.WorshipName>
                                <S.WorshipDetail>오전 09:00 · 2층 본당</S.WorshipDetail>
                            </S.WorshipItem>
                            <S.WorshipItem>
                                <S.WorshipName>2부 예배</S.WorshipName>
                                <S.WorshipDetail>오전 11:00 · 2층 본당</S.WorshipDetail>
                            </S.WorshipItem>
                            <S.WorshipItem>
                                <S.WorshipName>오후예배</S.WorshipName>
                                <S.WorshipDetail>오후 02:00 (격주) · 2층 본당</S.WorshipDetail>
                            </S.WorshipItem>
                        </S.WorshipList>
                    </S.WorshipCard>

                    <S.WorshipCard>
                        <S.WorshipCardHeader>주중 예배</S.WorshipCardHeader>
                        <S.WorshipList>
                            <S.WorshipItem>
                                <S.WorshipName>수요예배</S.WorshipName>
                                <S.WorshipDetail>수요일 저녁 07:30 · 2층 본당</S.WorshipDetail>
                            </S.WorshipItem>
                            <S.WorshipItem>
                                <S.WorshipName>금요철야기도회</S.WorshipName>
                                <S.WorshipDetail>금요일 저녁 08:30 (시즌제) · 2층 본당</S.WorshipDetail>
                            </S.WorshipItem>
                            <S.WorshipItem>
                                <S.WorshipName>새벽기도회</S.WorshipName>
                                <S.WorshipDetail>월-금 오전 05:00 · 1층 소예배실</S.WorshipDetail>
                            </S.WorshipItem>
                        </S.WorshipList>
                    </S.WorshipCard>

                    <S.WorshipCard>
                        <S.WorshipCardHeader>교육부서 예배</S.WorshipCardHeader>
                        <S.WorshipList>
                            <S.WorshipItem>
                                <S.WorshipName>영유치부</S.WorshipName>
                                <S.WorshipDetail>주일 오전 11:00 · 3층 모자실</S.WorshipDetail>
                            </S.WorshipItem>
                            <S.WorshipItem>
                                <S.WorshipName>유초등부</S.WorshipName>
                                <S.WorshipDetail>주일 오전 10:30 · 교육관 3층</S.WorshipDetail>
                            </S.WorshipItem>
                            <S.WorshipItem>
                                <S.WorshipName>중고등부</S.WorshipName>
                                <S.WorshipDetail>주일 오전 10:00 · 1층 소예배실</S.WorshipDetail>
                            </S.WorshipItem>
                        </S.WorshipList>
                    </S.WorshipCard>
                </S.WorshipGrid>
            </S.WorshipSection>

            {/* 7. 퀵 링크 섹션 */}
            <S.QuickLinksSection>
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
                            <Link href="/newcomer?tab=registration" style={{ textDecoration: 'none' }}>
                                <S.MainActionLink>등록 및 교육 안내 바로 가기</S.MainActionLink>
                            </Link>
                            <Link href="/newcomer?tab=location" style={{ textDecoration: 'none' }}>
                                <S.SubActionLink>오시는 길</S.SubActionLink>
                            </Link>
                        </S.CardLinks>
                    </S.QuickLinkCard>
                </S.QuickLinksGrid>
            </S.QuickLinksSection>

            {/* 8. 교회 기본 정보 */}
            <S.InfoSection>
                <S.InfoContainer>
                    <S.InfoLeft>
                        <S.InfoTitle>순복음범천교회</S.InfoTitle>
                        <S.InfoSubtitle>기독교대한하나님의성회(순복음)</S.InfoSubtitle>
                    </S.InfoLeft>
                    <S.InfoRight>
                        <S.InfoRow>
                            <S.InfoIcon><FaMapMarkerAlt /></S.InfoIcon>
                            <S.InfoContent>
                                <S.InfoLabel>주소</S.InfoLabel>
                                <S.InfoText>부산광역시 부산진구 엄광로 359</S.InfoText>
                            </S.InfoContent>
                        </S.InfoRow>
                        <S.InfoRow>
                            <S.InfoIcon><FaPhone /></S.InfoIcon>
                            <S.InfoContent>
                                <S.InfoLabel>전화</S.InfoLabel>
                                <S.InfoText>051) 634-9362</S.InfoText>
                            </S.InfoContent>
                        </S.InfoRow>
                        <S.InfoRow>
                            <S.InfoIcon><FaFax /></S.InfoIcon>
                            <S.InfoContent>
                                <S.InfoLabel>팩스</S.InfoLabel>
                                <S.InfoText>051) 635-2801</S.InfoText>
                            </S.InfoContent>
                        </S.InfoRow>
                    </S.InfoRight>
                </S.InfoContainer>
            </S.InfoSection >
        </S.Wrapper >
    );
}
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    color: #333;
    overflow-x: hidden;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
`;

// 1. 히어로 섹션
export const HeroSection = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    min-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        aspect-ratio: 16 / 9;
    }
`;


export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    img {
        object-fit: cover !important;
        object-position: center center !important;
    }

    @media (max-width: 768px) {
        img {
            object-fit: contain !important;
        }
    }
`;

export const HeroSlides = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const HeroFadeSlide = styled.div<{ $active: boolean }>`
    position: relative;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.$active ? 1 : 0)};
    transition: opacity 0.9s ease;
`;

export const HeroIndicators = styled.div`
    position: absolute;
    left: 50%;
    bottom: 28px;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 18px;

    @media (max-width: 768px) {
        bottom: 12px;
        gap: 12px;
    }
`;

export const HeroIndicator = styled.button<{ $active: boolean }>`
    display: block;
    width: 40px;
    height: 4px;
    border-radius: 999px;
    border: none;
    padding: 0;
    cursor: pointer;
    background: ${(props) => (props.$active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.45)')};
    transition: background 0.25s ease;

    &:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.95);
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        width: 28px;
        height: 3px;
    }
`;

export const NewcomerBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;
export const HeroContent = styled(motion.div)`
    position: relative;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 0 20px;
`;

export const HeroSubtitle = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    color: rgba(255,255,255,0.9);
    margin: 0 0 8px 0;
    letter-spacing: 0.02em;
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    margin: 0;
    color: white;
    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
    letter-spacing: -0.02em;
    line-height: 1.3;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 2rem;
        padding: 0 10px;
        word-break: keep-all;
    }
`;

export const HeroButton = styled.div`
    a {
        display: inline-block;
        padding: 16px 40px;
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(8px);
        color: white;
        text-decoration: none;
        border-radius: 48px;
        font-weight: 500;
        font-size: 1.1rem;
        border: 1px solid rgba(255,255,255,0.3);
        transition: all 0.3s ease;

        &:hover {
            background: rgba(255,255,255,0.25);
            border-color: rgba(255,255,255,0.5);
        }
    }
`;

// 2. 교회 소개 섹션
export const IntroSection = styled.section`
    padding: 100px 20px;
    background: #fafafa;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const IntroContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

export const IntroTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 28px;
    color: #2c2c2c;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const IntroDescription = styled.p`
    font-size: 1.05rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

export const IntroButton = styled.div`
    a {
        display: inline-block;
        padding: 14px 32px;
        background: transparent;
        color: #2c2c2c;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
        font-size: 0.95rem;
        border: 1px solid #2c2c2c;
        transition: all 0.2s ease;

        &:hover {
            background: #2c2c2c;
            color: white;
        }
    }
`;

// 3. 처음 오셨나요? 배너
export const NewcomerBanner = styled.section`
    background: #f4f4f4;
    padding: 72px 20px;

    @media (max-width: 768px) {
        padding: 52px 20px;
    }
`;

export const NewcomerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(0,0,0,0.55);
    color: black;
`;

export const NewcomerContent = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    color: black;
`;

export const NewcomerTitle = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    color: black;
    margin-bottom: 20px;
    letter-spacing: -0.01em;
    line-height: 1.35;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-bottom: 14px;
    }
`;

export const NewcomerQuote = styled.p`
    font-size: 1.2rem;
    line-height: 1.7;
    color: #111;
    font-weight: 600;
    margin: 0 0 20px;

    @media (max-width: 768px) {
        font-size: 1.02rem;
        margin-bottom: 14px;
    }
`;

export const NewcomerDescription = styled.p`
    font-size: 1.25rem;
    line-height: 1.75;
    color: #1f1f1f;
    margin: 0 0 20px;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 14px;
    }
`;

export const NewcomerButton = styled.div`
    margin-top: 30px;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 14px 30px;
        border: 1.5px solid black;
        color: #2c2c2c;
        text-decoration: none;
        border-radius: 48px;
        font-weight: 600;
        font-size: 1.05rem;
        transition: all 0.2s ease;

        &:hover {
            background: #f0f0f0;
        }
    }
`;

export const QuickSummarySection = styled.section`
    padding: 70px 20px;
    background: radial-gradient(900px 420px at 10% -30%, rgba(255, 225, 172, 0.4), transparent 60%),
        radial-gradient(900px 420px at 90% 130%, rgba(161, 207, 255, 0.35), transparent 60%),
        #f5f3ee;
`;

export const QuickSummaryInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SummaryCard = styled.article`
    border-radius: 18px;
    border: 1px solid rgba(38, 59, 87, 0.12);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    padding: 24px;
    box-shadow: 0 18px 36px rgba(12, 21, 38, 0.07);
`;

export const SummaryHeader = styled.div`
    margin-bottom: 16px;
`;

export const SummaryLabel = styled.p`
    font-size: 0.85rem;
    color: #63718a;
    margin-bottom: 6px;
`;

export const SummaryTitle = styled.h3`
    font-size: 1.35rem;
    color: #1f2938;
`;

export const SummaryList = styled.ul`
    list-style: none;
    display: grid;
    gap: 8px;
    margin-bottom: 16px;
`;

export const SummaryItem = styled.li`
    display: grid;
    grid-template-columns: 66px 1fr;
    gap: 10px;
    align-items: center;
    font-size: 0.95rem;
`;

export const SummaryItemDate = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-size: 0.8rem;
    color: #173f74;
    background: #dceaff;
    padding: 5px 8px;
`;

export const SummaryItemText = styled.strong`
    color: #2d394a;
    font-weight: 500;
`;

export const SummaryLoading = styled.p`
    color: #6a768b;
    font-size: 0.92rem;
    margin-bottom: 16px;
`;

export const BulletinMeta = styled.p`
    color: #55627a;
    font-size: 0.95rem;
    margin-bottom: 16px;
    line-height: 1.6;
`;

export const SummaryLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    border: 1px solid #214d84;
    color: #214d84;
    padding: 8px 14px;
    font-size: 0.88rem;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
        background: #214d84;
        color: #fff;
    }
`;

// 4. 교회 소식 섹션
export const NewsSection = styled.section`
    padding: 100px 20px;
    background: #f6f4ef;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const NewsHeader = styled.h2`
    max-width: 1200px;
    margin: 0 auto 30px;
    font-size: 2.4rem;
    font-weight: 700;
    color: #1c1c1c;
    letter-spacing: -0.02em;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-bottom: 20px;
    }
`;

export const NewsMediaCard = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
    background: #111;
    aspect-ratio: 16 / 9;
    position: relative;
`;

export const NewsGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 40px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

export const NewsCard = styled.div`
    padding: 20px;
`;

export const NewsLabel = styled.p`
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 8px;
`;

export const NewsTitle = styled.h3`
    font-size: 2.4rem;
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 20px;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 1.7rem;
    }
`;

export const NewsDivider = styled.div`
    width: 40px;
    height: 2px;
    background: #2c2c2c;
    margin-bottom: 24px;
`;

export const NewsDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    margin-bottom: 32px;
`;

export const NewsButton = styled.div`
    a,
    button {
        color: #2c2c2c;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        border-bottom: 1px solid #2c2c2c;
        padding-bottom: 4px;
        transition: opacity 0.2s ease;
        background: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const NewsImageCard = styled.div`
    border-radius: 8px;
    overflow: hidden;
`;

export const NewsImage = styled.img`
    width: 100%;
    height: 480px;
    object-fit: cover;

    @media (max-width: 768px) {
        height: 280px;
    }
`;

export const NewsLink = styled.a`
    display: block;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
    }
`;

export const ThumbnailOverlay = styled.span`
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    opacity: 0;
    transition: opacity 0.2s ease;
`;

export const ThumbnailTitle = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    right: auto;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 80%;
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;

    @media (max-width: 768px) {
        font-size: 1rem;
        max-width: 90%;
    }
`;

export const ThumbnailButton = styled.button`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;

    &:focus-visible {
        outline: 3px solid rgba(0, 0, 0, 0.35);
        outline-offset: 4px;
    }

    &:hover span[data-overlay='true'] {
        opacity: 1;
    }

    &:hover span[data-title='true'] {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;

export const SkeletonBox = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(110deg, #ece9e2 8%, #f5f2ec 18%, #ece9e2 33%);
    background-size: 200% 100%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        to {
            background-position: -200% 0;
        }
    }
`;

export const VideoOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
`;

export const VideoModal = styled.div`
    position: relative;
    width: min(1280px, 96vw);
    background: #000;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
`;

export const VideoFrame = styled.iframe`
    width: 100%;
    height: min(70vh, 80vw);
    border: none;

    @media (max-width: 768px) {
        height: 56vw;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.65);
    color: #fff;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }
`;

export const VideoCaption = styled.div`
    position: fixed;
    left: 24px;
    bottom: 24px;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        left: 16px;
        bottom: 16px;
        font-size: 0.95rem;
        max-width: 85vw;
    }
`;

// 4-1. 오시는 길
export const LocationSection = styled.section`
    padding: 72px 20px;
    background: #ffffff;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const LocationInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const LocationHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const LocationTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #1c1c1c;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const LocationDesc = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.7;
    margin-bottom: 0;
    text-align: left;
`;

export const LocationMapCard = styled.div`
    width: 100%;
    height: 360px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
    background: #f6f6f6;

    .root_daum_roughmap {
        width: 100% !important;
        height: 100% !important;
    }

    .root_daum_roughmap .wrap_map {
        height: 100% !important;
    }

    @media (max-width: 768px) {
        height: 280px;
    }
`;

export const InfoSection = styled.section`
    padding: 56px 0 92px;
    background: #ececec;

    @media (max-width: 768px) {
        padding: 36px 0 64px;
    }
`;

export const InfoInner = styled.div`
    width: min(1720px, 100%);
    margin: 0 auto;
    padding: 0 28px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 72px;
    row-gap: 48px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 0 20px;
    }
`;

export const InfoColumn = styled.article`
    min-width: 0;
    padding-top: 4px;
`;

export const InfoTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1d2229;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.7rem;
        margin-bottom: 14px;
    }
`;

export const InfoText = styled.p`
    color: #2b3138;
    font-size: 0.95rem;
    line-height: 1.65;
    margin: 0;
    padding: 14px 0;
    border-bottom: 1px solid #a4a8ad;
`;

export const InfoPre = styled.p`
    color: #2d394a;
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
    white-space: pre-line;
`;

export const InfoList = styled.ul`
    list-style: none;
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0;
    border-top: 1px solid #a4a8ad;
`;

export const InfoListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    color: #2a313c;
    border-bottom: 1px solid #a4a8ad;
    padding: 16px 0;
`;

export const InfoScheduleDate = styled.span`
    width: 3.2em;
    flex-shrink: 0;
    color: #282f39;
    font-weight: 700;
    font-size: 1.45rem;
    line-height: 1.4;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        width: 2.8em;
        font-size: 1.02rem;
    }
`;

export const InfoScheduleDetails = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const InfoScheduleDetail = styled.span`
    color: #282f39;
    font-weight: 600;
    font-size: 1.45rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
    word-break: keep-all;

    @media (max-width: 768px) {
        font-size: 1.02rem;
    }
`;

export const InfoListLinkItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: #2a313c;
    border-bottom: 1px solid #a4a8ad;
    padding: 16px 0;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.4);
    }
`;

export const InfoRowTitle = styled.span`
    color: #282f39;
    font-weight: 600;
    font-size: 1.45rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
    word-break: keep-all;

    @media (max-width: 768px) {
        font-size: 1.02rem;
    }
`;

export const InfoRowMeta = styled.span`
    color: #666c74;
    font-weight: 500;
    font-size: 1.05rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
        font-size: 0.82rem;
    }
`;

export const InfoLink = styled(Link)`
    display: inline-block;
    margin-top: 14px;
    color: #1d2a3b;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

// 5. 유튜브 섹션
export const YouTubeSection = styled.section`
    padding: 80px 20px;
    background: linear-gradient(90deg, #e0e0e0 0%, #e0e0e0 5%, #5eccff 35%, #5eccff 65%, #e0e0e0 95%, #e0e0e0 100%);

    @media (max-width: 768px) {
        padding: 60px 20px;
        background: linear-gradient(90deg, #f0f0f0 0%, #5eccff 15%, #5eccff 85%, #f0f0f0 100%);
    }
`;

export const YouTubeContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

export const YouTubeLabel = styled.p`
    font-size: 1.3rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 8px;
`;

export const YouTubeTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: white;
    margin-bottom: 32px;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const YouTubeButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    background: white;
    color: #2c2c2c;
    text-decoration: none;
    border-radius: 48px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.2s ease;

    svg {
        font-size: 1.4rem;
        color: #FF0000;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
`;

// 6. 예배 안내 섹션
export const WorshipSection = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const WorshipTableWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
    padding: 40px 0 0 0;
    // border-top: 2px solid #2c2c2c;
    // border-bottom: 1px solid #ddd;

    @media (max-width: 1024px) {
        gap: 40px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }
`;

export const WorshipTableHeader = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #2c2c2c;
    white-space: nowrap;
    text-align: center;
    // min-width: 80px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        padding-bottom: 16px;
        border-bottom: 1px solid #eee;
        width: 100%;
    }
`;

export const WorshipTableColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    // min-width: 180px;

    @media (max-width: 768px) {
        min-width: 100%;
    }
`;

export const WorshipTableTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 8px;
`;

export const WorshipTableRow = styled.div`
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    display: flex;
    gap: 16px;
`;

export const WorshipHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #2c2c2c;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

export const WorshipHeaderItem = styled.div`
    text-align: center;

    &:first-of-type {
        text-align: left;
    }

    @media (max-width: 768px) {
        text-align: left;
    }
`;

export const WorshipHeaderLabel = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c2c2c;
    margin: 0;
`;

export const WorshipBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`;

export const WorshipColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const WorshipInfo = styled.div`
    font-size: 0.95rem;
    line-height: 1.7;
    color: #666;
    padding: 16px;
    background: #fafafa;
    border-radius: 6px;

    strong {
        color: #2c2c2c;
        font-weight: 600;
    }
`;

// 7. 교회 정보 섹션
export const InfoSectionLegacy = styled.section`
    padding: 80px 20px;
    background: #fafafa;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const InfoGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
`;

export const InfoItem = styled.div`
    text-align: center;
`;

export const InfoIcon = styled.div`
    font-size: 1.8rem;
    color: #555;
    margin-bottom: 12px;
`;

export const InfoLabel = styled.h4`
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c2c2c;
`;

export const InfoTextLegacy = styled.p`
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    margin: 0;
`;

export const AccountInfo = styled.div`
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    padding: 28px;
    background: white;
    border-radius: 8px;
    border: 1px solid #eee;
`;

export const AccountLabel = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c2c2c;
`;

export const AccountNumber = styled.p`
    font-size: 0.95rem;
    color: #666;
    font-weight: 400;
    margin: 0;
`;

// 새로운 예배 안내 카드 스타일
export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    color: #2c2c2c;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-bottom: 36px;
    }
`;

export const WorshipGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const WorshipCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 32px 28px;
    border: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
`;

export const WorshipCardHeader = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c2c2c;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid #f59e0b;
`;

export const WorshipList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const WorshipItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const WorshipName = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: #2c2c2c;
`;

export const WorshipDetail = styled.span`
    font-size: 0.9rem;
    color: #888;
`;

// 새로운 교회 정보 스타일
export const InfoContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
        align-items: stretch;
    }
`;

export const InfoLeft = styled.div`
    flex-shrink: 0;
`;

export const InfoTitleLegacy = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 8px;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const InfoSubtitle = styled.p`
    font-size: 0.95rem;
    color: #888;
`;

export const InfoRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

// 8. 퀵 링크 섹션 (미니멀리즘 디자인)
export const QuickLinksSection = styled.section`
    padding: 80px 20px;
    background: #fff;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`;

export const QuickLinksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    @media (max-width: 1024px) {
        gap: 24px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 32px;
    }
`;

export const QuickLinkCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px;
    border-radius: 12px;
    background: #fff;
    border: 1px solid #f0f0f0;
    transition: all 0.2s ease;

    &:hover {
        border-color: #e0e0e0;
        background: #fafafa;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CardTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c2c2c;
    letter-spacing: -0.01em;
`;

export const CardDesc = styled.p`
    font-size: 0.9rem;
    color: #888;
    line-height: 1.5;
    word-break: keep-all;
`;

export const CardLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
`;

export const MainActionLink = styled.div`
    display: inline-flex;
    align-items: center;
    color: #2c2c2c;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &::after {
        content: ' →';
        margin-left: 4px;
        transition: transform 0.2s ease;
    }

    &:hover {
        opacity: 0.7;
        &::after {
            transform: translateX(4px);
        }
    }
`;

export const SubActionLink = styled.div`
    display: inline-flex;
    align-items: center;
    color: #999;
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s ease;

    &::after {
        content: ' ↗';
        margin-left: 2px;
        font-size: 0.8rem;
    }

    &:hover {
        color: #666;
    }
`;

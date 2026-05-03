import styled from "@emotion/styled";
import { typography, colors } from '@/styles/theme';
import { motion } from "framer-motion";
import Link from "next/link";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    color: #333;
    overflow-x: hidden;
`;

// 1. 히어로 섹션
export const HeroSection = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1920 / 900;
    min-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        aspect-ratio: 1920 / 900;
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
    overflow: hidden;
`;

export const HeroSlidesTrack = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 100%;
    cursor: grab;
    &:active {
        cursor: grabbing;
    }
`;

export const HeroSlideItem = styled.div`
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    position: relative;
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
    ${typography.title7}
    font-weight: 400;
    color: rgba(255,255,255,0.9);
    margin: 0 0 8px 0;
    letter-spacing: 0.02em;
    line-height: 1.3;

    @media (max-width: 768px) {
        ${typography.body1}
    }
`;

export const HeroTitle = styled.h1`
    ${typography.title1}
    font-weight: 700;
    margin: 0;
    color: white;
    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
    letter-spacing: -0.02em;
    line-height: 1.3;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        ${typography.title4}
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
        ${typography.title7}
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
    ${typography.title4}
    margin-bottom: 28px;
    text-align: center;

    @media (max-width: 768px) {
        ${typography.title5}
    }
`;

export const IntroDescription = styled.p`
    ${typography.body1}
    margin-bottom: 40px;

    @media (max-width: 768px) {
        ${typography.body2}
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
        ${typography.body2}
        border: 1px solid #2c2c2c;
        transition: all 0.2s ease;

        &:hover {
            background: #2c2c2c;
            color: white;
        }
    }
`;

// 3. 교회 정체성 (Identity)
export const IdentitySection = styled.section`
    background: #eaeaea;
    padding: 140px 20px 220px;
    text-align: center;
    color: #000;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const IdentitySubtitle = styled.p`
    ${typography.title6}
    font-weight: 600;
    margin-bottom: 24px;
    color: #333D4B;

    @media (max-width: 768px) {
        ${typography.title7}
        margin-bottom: 16px;
    }
`;

export const IdentityTitle = styled.h2`
    ${typography.title1}
    margin-bottom: 80px;
    word-break: keep-all;

    .title-text-wrap {
        display: block;
        margin-bottom: 8px;
    }

    .title-text-wrap.sub {
        margin-bottom: 0;
    }

    .inline-quote {
        display: inline-block;
        vertical-align: middle;
        transform: translateY(-25px);
        margin: 0 12px;
    }

    .inline-quote.right img {
        transform: rotate(180deg);
    }

    @media (max-width: 768px) {
        ${typography.title7}
        margin-bottom: 40px;
        
        .inline-quote {
            margin: 0 4px;
            transform: translateY(-4px);
        }

        .inline-quote img {
            width: 20px;
            height: 20px;
        }
    }
`;

export const IdentityGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 120px;
    padding: 0 60px;

    a {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    @media (max-width: 768px) {
        gap: 12px;
        padding: 0 10px;
        max-width: 100%;
    }
`;

export const IdentityCard = styled.div`
    background: transparent;
    border: 4px solid #101c29;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 768px) {
        padding: 16px 8px;
        border-width: 2px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
`;

export const IdentityCardTitle = styled.h3`
    ${typography.title3}
    margin-bottom: 20px;

    @media (max-width: 768px) {
        ${typography.title7}
        margin-bottom: 8px;
    }
`;

export const IdentityCardRef = styled.p`
    ${typography.title7}
    font-weight: 500;
    color: #4E5968;
    margin: 0;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        ${typography.caption}
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
    ${typography.caption}
    color: #63718a;
    margin-bottom: 6px;
`;

export const SummaryTitle = styled.h3`
    ${typography.title7}
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
    ${typography.body2}
`;

export const SummaryItemDate = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    ${typography.caption}
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
    ${typography.body2}
    margin-bottom: 16px;
`;

export const BulletinMeta = styled.p`
    color: #55627a;
    ${typography.body2}
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
    ${typography.caption}
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
    ${typography.title2}
    font-weight: 700;
    color: #1c1c1c;
    letter-spacing: -0.02em;
    text-align: center;

    @media (max-width: 768px) {
        ${typography.title4}
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
    ${typography.body2}
    color: #999;
    margin-bottom: 8px;
`;

export const NewsTitle = styled.h3`
    ${typography.title2}
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 20px;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        ${typography.title5}
    }
`;

export const NewsDivider = styled.div`
    width: 40px;
    height: 2px;
    background: #2c2c2c;
    margin-bottom: 24px;
`;

export const NewsDescription = styled.p`
    ${typography.body1}
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
        ${typography.body2}
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
    ${typography.title7}
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
        ${typography.body1}
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
    ${typography.title7}
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
    ${typography.title7}
    font-weight: 600;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        left: 16px;
        bottom: 16px;
        ${typography.body2}
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
    grid-template-columns: 1.3fr 1fr;
    gap: 48px;
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
    ${typography.title4}
    margin-bottom: 16px;
    text-align: left;

    @media (max-width: 768px) {
        ${typography.title6}
    }
`;

export const LocationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-auto-flow: column;
    gap: 24px 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: none;
        grid-auto-flow: row;
        gap: 24px;
    }
`;

export const LocationItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const LocationLabel = styled.h3`
    ${typography.title7}
    margin: 0;
    text-align: left;
`;

export const LocationValue = styled.p`
    ${typography.body1}
    margin: 0;
    text-align: left;
`;

export const LocationMapCard = styled.div`
    width: 100%;
    height: 300px;
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
    background: #eaeaea;

    @media (max-width: 768px) {
        padding: 36px 0 64px;
    }
`;

export const InfoInner = styled.div`
    max-width: 1200px;
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
    ${typography.title4}
    font-weight: 700;
    color: #1d2229;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    text-align: center;

    @media (max-width: 768px) {
        ${typography.title5}
        margin-bottom: 14px;
    }
`;

export const InfoText = styled.p`
    color: #2b3138;
    ${typography.body2}
    line-height: 1.65;
    margin: 0;
    padding: 14px 0;
    border-bottom: 1px solid #a4a8ad;
`;

export const InfoPre = styled.p`
    color: #2d394a;
    ${typography.body2}
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
    width: 8.6em;
    flex-shrink: 0;
    color: #282f39;
    font-weight: 700;
    ${typography.title7}
    line-height: 1.4;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        width: 6.2em;
    }
`;

export const InfoScheduleDatePart = styled.span`
    display: inline-block;
    white-space: nowrap;
`;

export const InfoScheduleRangeSeparator = styled.span`
    display: inline-block;
    margin: 0 3px;
    color: #5b626b;
    font-weight: 600;
`;

export const InfoScheduleWeekday = styled.span`
    display: inline-block;
    margin-left: 2px;
    color: #5b626b;
    ${typography.caption}
    font-weight: 600;
    vertical-align: 0.08em;
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
    ${typography.title7}
    line-height: 1.4;
    letter-spacing: -0.01em;
    word-break: keep-all;
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
    ${typography.title7}
    line-height: 1.4;
    letter-spacing: -0.01em;
    word-break: keep-all;
`;

export const InfoRowMeta = styled.span`
    color: #666c74;
    font-weight: 500;
    ${typography.caption}
    flex-shrink: 0;

    @media (max-width: 768px) {
        ${typography.caption}
    }
`;

export const InfoLink = styled(Link)`
    display: inline-block;
    margin-top: 14px;
    color: #1d2a3b;
    font-weight: 600;
    ${typography.body2}
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
    ${typography.title7}
    color: rgba(255,255,255,0.8);
    margin-bottom: 8px;
`;

export const YouTubeTitle = styled.h2`
    ${typography.title4}
    font-weight: 600;
    color: white;
    margin-bottom: 32px;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        ${typography.title6}
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
    ${typography.title7}
    transition: all 0.2s ease;

    svg {
        ${typography.title6}
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
    ${typography.title4}
    font-weight: 700;
    color: #2c2c2c;
    white-space: nowrap;
    text-align: center;
    // min-width: 80px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        ${typography.title7}
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
    ${typography.title6}
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 8px;
`;

export const WorshipTableRow = styled.div`
    ${typography.body0}
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
    ${typography.title7}
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
    ${typography.body2}
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
    ${typography.title4}
    color: #555;
    margin-bottom: 12px;
`;

export const InfoLabel = styled.h4`
    ${typography.body2}
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c2c2c;
`;

export const InfoTextLegacy = styled.p`
    ${typography.body2}
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
    ${typography.body1}
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c2c2c;
`;

export const AccountNumber = styled.p`
    ${typography.body2}
    color: #666;
    font-weight: 400;
    margin: 0;
`;

// 새로운 예배 안내 카드 스타일
export const SectionTitle = styled.h2`
    ${typography.title4}
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        ${typography.title5}
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
    ${typography.title7}
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
    ${typography.body1}
    font-weight: 600;
    color: #2c2c2c;
`;

export const WorshipDetail = styled.span`
    ${typography.body2}
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
    ${typography.title4}
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 8px;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        ${typography.title6}
    }
`;

export const InfoSubtitle = styled.p`
    ${typography.body2}
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
    ${typography.title6}
    font-weight: 600;
    color: #2c2c2c;
    letter-spacing: -0.01em;
`;

export const CardDesc = styled.p`
    ${typography.body2}
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
    ${typography.body2}
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
    ${typography.body2}
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s ease;

    &::after {
        content: ' ↗';
        margin-left: 2px;
        ${typography.caption}
    }

    &:hover {
        color: #666;
    }
`;


import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    color: #333;
    overflow-x: hidden;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    padding-top: 80px;
`;

// 1. 히어로 섹션
export const HeroSection = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 600px;
    background-image: url('/bg.jpeg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
    }

    @media (max-width: 768px) {
        height: 80vh;
        min-height: 500px;
    }
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
        border-radius: 4px;
        font-weight: 500;
        font-size: 1rem;
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
    position: relative;
    height: 400px;
    background-image: url('/bible_background.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 350px;
    }
`;

export const NewcomerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.55);
`;

export const NewcomerContent = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 20px;
`;

export const NewcomerTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: white;
    margin-bottom: 16px;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const NewcomerDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.85);
    margin-bottom: 32px;
`;

export const NewcomerButton = styled.div`
    a {
        display: inline-block;
        padding: 14px 32px;
        background: white;
        color: #2c2c2c;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.2s ease;

        &:hover {
            background: #f0f0f0;
        }
    }
`;

// 4. 교회 소식 섹션
export const NewsSection = styled.section`
    padding: 100px 20px;
    background: white;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const NewsGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    font-size: 2rem;
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 20px;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 1.6rem;
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
    a {
        color: #2c2c2c;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        border-bottom: 1px solid #2c2c2c;
        padding-bottom: 4px;
        transition: opacity 0.2s ease;

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
    height: 350px;
    object-fit: cover;

    @media (max-width: 768px) {
        height: 250px;
    }
`;

// 5. 유튜브 섹션
export const YouTubeSection = styled.section`
    padding: 80px 20px;
    background: #f59e0b;

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const YouTubeContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

export const YouTubeLabel = styled.p`
    font-size: 0.95rem;
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
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
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
export const InfoSection = styled.section`
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

export const InfoText = styled.p`
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

export const InfoTitle = styled.h3`
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

export const AccountBanner = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 40px;
    background: #2c2c2c;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const AccountText = styled.p`
    font-size: 1rem;
    color: white;
    margin: 0;

    strong {
        margin-right: 16px;
        color: #f59e0b;
    }
`;

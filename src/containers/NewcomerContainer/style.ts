import styled from '@emotion/styled';
import Link from 'next/link';
import { typography, colors } from '@/styles/theme';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #f6f5f1;
    background-image: radial-gradient(1200px 600px at 10% -10%, rgba(255, 213, 153, 0.22), transparent 60%),
        radial-gradient(1000px 500px at 90% 0%, rgba(196, 226, 255, 0.22), transparent 55%);
    color: #333;
    padding-top: 80px;
`;

export const Header = styled.div`
    background: linear-gradient(120deg, #1b1b1b 0%, #2b2b2b 45%, #3b2e27 100%);
    padding: 120px 20px 70px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Title = styled.h1`
    ${typography.title1}
    color: #f5f5f5;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
        ${typography.title3}
        color: #f5f5f5;
    }
`;

export const TabMenu = styled.div`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    gap: 0;
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    flex-wrap: wrap;
    position: sticky;
    top: 80px;
    z-index: 100;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }

    padding: 0 20px;

    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const Tab = styled.button<{ $active: boolean }>`
    padding: 16px 24px;
    background: transparent;
    color: ${props => props.$active ? '#2c2c2c' : '#999'};
    border: none;
    border-bottom: ${props => props.$active ? '2px solid #2c2c2c' : '2px solid transparent'};
    ${typography.body2}
    font-weight: ${props => props.$active ? '600' : '400'};
    cursor: pointer;
    flex: 0 0 auto;
    transition: all 0.2s ease;

    &:hover {
        color: #2c2c2c;
    }

    @media (max-width: 768px) {
        padding: 14px 18px;
        ${typography.body2}
        flex-shrink: 0;
    }
`;

export const TabLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: 16px 24px;
    background: transparent;
    color: #999;
    border-bottom: 2px solid transparent;
    ${typography.body2}
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    flex: 0 0 auto;
    transition: all 0.2s ease;

    &:hover {
        color: #2c2c2c;
    }

    @media (max-width: 768px) {
        padding: 14px 18px;
        ${typography.body2}
        flex-shrink: 0;
    }
`;

export const Content = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 60px 24px 120px;
`;

export const Section = styled.div`
    padding: 80px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    background: transparent;
    border-radius: 0;
    box-shadow: none;

    &:first-of-type {
        border-top: none;
    }
`;

export const SectionTitle = styled.h2`
    ${typography.title3}
    margin-bottom: 24px;
    padding-bottom: 14px;
    text-align: left;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 44px;
        height: 3px;
        border-radius: 999px;
        background: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.2));
    }

    @media (max-width: 768px) {
        ${typography.title5}
        margin-bottom: 20px;
    }
`;

export const IntroText = styled.p`
    ${typography.body1}
    text-align: left;
    margin-bottom: 80px;
    padding-bottom: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
        ${typography.body2}
        margin-bottom: 60px;
        padding-bottom: 60px;
    }
`;

// 등록 과정
export const StepsTitle = styled.h3`
    ${typography.title4}
    text-align: center;
    margin-bottom: 40px;
`;

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const StepFlow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 8px;
    row-gap: 16px;
    align-items: start;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StepCard = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: center;
    padding: 22px 0;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: border-color 0.2s ease;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 18px 0;
    }
`;

export const StepVisualCard = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px 8px;
`;

export const StepIconCircle = styled.div`
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background: #e8ebef;
    color: #1f232a;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    svg {
        width: 56px;
        height: 56px;
        stroke-width: 1.7;
    }

    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
        margin-bottom: 12px;

        svg {
            width: 44px;
            height: 44px;
        }
    }
`;

export const StepNumber = styled.div`
    ${typography.title5}
    margin-bottom: 8px;
`;

export const StepDescription = styled.p`
    ${typography.body2}
    line-height: 1.65;
    color: #5c626c;
    margin: 0;
    word-break: keep-all;
`;

export const StepArrow = styled.div`
    display: none;
`;

// 양육과 훈련
export const TrainingList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 40px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const TrainingItem = styled.div`
    padding: 22px 0;
    background: transparent;
    border-radius: 0;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: border-color 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 140px;

    @media (max-width: 768px) {
        padding: 28px 20px;
    }
`;

export const TrainingTitle = styled.h3`
    ${typography.title7}
    margin-bottom: 12px;
`;

export const TrainingPeriod = styled.p`
    ${typography.body2}
    color: #888;
    margin: 0;
    margin-top: 14px;
`;

export const TrainingDescription = styled.p`
    ${typography.body1}
    margin: 0;
`;

export const TrainingNote = styled.p`
    ${typography.body2}
    line-height: 1.7;
    color: #999;
    text-align: center;
    margin-top: 40px;
    padding: 18px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

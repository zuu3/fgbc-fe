import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #f6f5f1;
    background-image: radial-gradient(1200px 600px at 10% -10%, rgba(255, 213, 153, 0.22), transparent 60%),
        radial-gradient(1000px 500px at 90% 0%, rgba(196, 226, 255, 0.22), transparent 55%);
    color: #333;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    padding-top: 80px;
`;

export const Header = styled.div`
    background: linear-gradient(120deg, #1b1b1b 0%, #2b2b2b 45%, #3b2e27 100%);
    padding: 120px 20px 70px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.02em;
    color: #f5f5f5;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2.2rem;
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
    font-size: 0.95rem;
    font-weight: ${props => props.$active ? '600' : '400'};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: #2c2c2c;
    }

    @media (max-width: 768px) {
        padding: 14px 18px;
        font-size: 0.9rem;
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
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 24px;
    padding-bottom: 14px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #2c2c2c;
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
        font-size: 1.7rem;
        margin-bottom: 20px;
    }
`;

export const IntroText = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    text-align: left;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

// 등록 과정
export const StepsTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    color: #2c2c2c;
`;

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
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

export const StepNumber = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #666;
    margin-bottom: 10px;
    letter-spacing: 0.02em;
`;

export const StepDescription = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
    margin: 0;
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
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c2c2c;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
`;

export const TrainingPeriod = styled.p`
    font-size: 0.9rem;
    color: #888;
    margin: 0;
    margin-top: 14px;
`;

export const TrainingDescription = styled.p`
    font-size: 0.95rem;
    line-height: 1.7;
    color: #666;
    margin: 0;
`;

export const TrainingNote = styled.p`
    font-size: 0.9rem;
    line-height: 1.7;
    color: #999;
    text-align: center;
    margin-top: 40px;
    padding: 18px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

// 찾아오는 길
export const LocationInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 40px;
    margin-bottom: 50px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;

export const InfoBlock = styled.div`
    padding: 24px 0;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const InfoLabel = styled.h4`
    font-size: 1.05rem;
    font-weight: 600;
    color: #666;
    margin-bottom: 10px;
`;

export const InfoValue = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #2c2c2c;
    margin: 0;
`;

export const ChurchNote = styled.p`
    font-size: 0.9rem;
    color: #999;
    text-align: center;
    margin-bottom: 40px;
    padding: 18px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 400px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    
    .root_daum_roughmap {
        width: 100% !important;
        height: 100% !important;
    }

    .root_daum_roughmap .wrap_map {
        height: 100% !important;
    }

    @media (max-width: 768px) {
        height: 300px;
    }
`;

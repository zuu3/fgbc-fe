import styled from '@emotion/styled';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #fafafa;
    color: #333;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    padding-top: 80px;
`;

export const Header = styled.div`
    background: white;
    padding: 60px 20px 40px;
    text-align: center;
    border-bottom: 1px solid #eee;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.02em;
    color: #2c2c2c;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const TabMenu = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    gap: 0;
    padding: 0;
    border-bottom: 1px solid #ddd;
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

    @media (max-width: 768px) {
        justify-content: flex-start;
        padding: 0 20px;
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
`;

export const Section = styled.div`
    background: white;
    padding: 50px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);

    @media (max-width: 768px) {
        padding: 36px 24px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #2c2c2c;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-bottom: 24px;
    }
`;

export const IntroText = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    text-align: center;
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
    gap: 16px;
`;

export const StepCard = styled.div`
    padding: 24px 32px;
    background: #fafafa;
    border-radius: 8px;
    border-left: 3px solid #666;
    border: 1px solid #eee;
    border-left: 3px solid #666;
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        border-left-color: #444;
    }

    @media (max-width: 768px) {
        padding: 20px 18px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const TrainingItem = styled.div`
    padding: 40px 24px;
    background: #fafafa;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #eee;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;

    &:hover {
        border-color: #ddd;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

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
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dotted #ddd;
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
    padding: 20px;
    background: #fafafa;
    border-radius: 6px;
    border: 1px solid #eee;
`;

// 찾아오는 길
export const LocationInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const InfoBlock = styled.div`
    padding: 28px;
    background: #fafafa;
    border-radius: 8px;
    border: 1px solid #eee;

    @media (max-width: 768px) {
        padding: 22px 18px;
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
    padding: 18px;
    background: #fafafa;
    border-radius: 6px;
    border: 1px solid #eee;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 400px;
    background: #fafafa;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #eee;
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


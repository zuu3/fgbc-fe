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
        padding: 14px 16px;
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
    margin-bottom: 48px;
    letter-spacing: -0.02em;
    color: #2c2c2c;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-bottom: 32px;
    }
`;

// Vision Section
export const VisionBox = styled.div`
    margin-bottom: 80px;
`;

export const VisionHeader = styled.div`
    margin-bottom: 32px;
`;

export const VisionIcon = styled.span`
    display: none;
`;

export const VisionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin: 0 0 8px 0;
    letter-spacing: -0.01em;
`;

export const VisionSubtitle = styled.span`
    font-size: 1rem;
    color: rgba(255,255,255,0.6);
    display: block;
`;

export const VisionText = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 32px;
`;

export const VisionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const VisionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    transition: background 0.2s ease;

    &:hover {
        background: rgba(255,255,255,0.08);
    }
`;

export const VisionNumber = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    min-width: 40px;
`;

export const VisionItemText = styled.span`
    font-size: 1rem;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
`;

// Strategy Section
export const StrategyBox = styled.div`
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid rgba(255,255,255,0.1);
`;

export const StrategyHeader = styled(VisionHeader)``;

export const StrategyText = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 24px;
`;

export const StrategyHighlight = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.9);
    padding: 24px;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    border-left: 3px solid white;
`;

// Greeting Section
export const GreetingBox = styled.div``;

export const GreetingTitle = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
`;

export const GreetingSubtitle = styled.p`
    font-size: 1.125rem;
    color: rgba(255,255,255,0.7);
    text-align: center;
    margin-bottom: 60px;
`;

export const GreetingContent = styled.div`
    display: flex;
    gap: 60px;
    align-items: flex-start;
    padding: 50px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 40px;
        padding: 36px 24px;
    }
`;

export const GreetingIntro = styled.p`
    font-size: 1.15rem;
    line-height: 1.9;
    color: #555;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: -0.01em;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 40px;
    }
`;

export const PastorSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

export const PastorImage = styled.img`
    width: 420px;
    height: 560px;
    object-fit: cover;
    object-position: top;
    border-radius: 4px;
    // box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    
    @media (max-width: 1024px) {
        width: 100%;
        max-width: 380px;
        height: auto;
        aspect-ratio: 3/4;
    }
`;

export const PastorImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
`;

export const PastorInfo = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const PastorTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c2c2c;
    text-align: center;
    letter-spacing: -0.01em;
`;

export const GreetingTextWrapper = styled.div`
    flex: 1;
`;

export const GreetingIntroText = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 40px;
    word-break: keep-all;
    
    strong {
        color: #000;
        font-weight: 700;
    }
`;

export const KeywordList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
`;

export const KeywordItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const KeywordTitle = styled.h4`
    font-size: 1.15rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    display: flex;
    align-items: center;
    
    &::before {
        content: '';
        display: block;
        width: 3px;
        height: 15px;
        background-color: #333;
        margin-right: 10px;
    }
`;

export const KeywordDesc = styled.p`
    font-size: 1.05rem;
    line-height: 1.7;
    color: #555;
    margin: 0;
    word-break: keep-all;
    text-align: justify;
`;

export const ClosingMessage = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-top: 40px;
    word-break: keep-all;
`;


export const PastorSignature = styled.div`
    text-align: right;
    margin-top: 40px;
`;

export const PastorName = styled.p`
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 8px;
`;

export const SignatureImage = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c2c2c;
`;

// Staff Section
export const StaffTabs = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const StaffTab = styled.button<{ $active: boolean }>`
    padding: 16px 32px;
    background: transparent;
    color: ${props => props.$active ? 'white' : 'rgba(255,255,255,0.6)'};
    border: none;
    border-bottom: ${props => props.$active ? '2px solid white' : '2px solid transparent'};
    margin-bottom: -1px;
    font-size: 1rem;
    font-weight: ${props => props.$active ? '600' : '400'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: white;
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
        font-size: 0.95rem;
        flex-shrink: 0;
    }
`;


// Elder Section
export const ElderSection = styled.div`
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid rgba(255,255,255,0.1);
`;

export const ElderTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 40px;
    letter-spacing: -0.01em;
`;

export const ElderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
`;

export const ElderCard = styled.div`
    text-align: center;
    padding: 24px 16px;
    background: #fafafa;
    border-radius: 8px;
    border: 1px solid #eee;
    transition: all 0.2s ease;

    &:hover {
        border-color: #ddd;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

    @media (max-width: 768px) {
        padding: 20px 14px;
    }
`;

export const ElderPhoto = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
    border: 2px solid #eee;
`;

export const ElderName = styled.p`
    font-size: 1.05rem;
    font-weight: 600;
    color: #2c2c2c;
`;

// Registration Section
export const RegistrationBox = styled.div``;

export const RegistrationTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 50px;
    color: rgba(255,255,255,0.9);
`;

export const RegistrationSection = styled.div`
    margin-bottom: 50px;
`;

export const RegistrationSubtitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const RegistrationList = styled.ul`
    list-style: none;
    padding: 0;
    
    li {
        font-size: 1rem;
        line-height: 1.8;
        color: rgba(255,255,255,0.8);
        margin-bottom: 16px;
        padding-left: 24px;
        position: relative;

        &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: white;
        }
    }
`;

export const RegistrationOrderedList = styled.ol`
    padding-left: 24px;
    
    li {
        font-size: 1rem;
        line-height: 1.8;
        color: rgba(255,255,255,0.8);
        margin-bottom: 14px;
    }
`;

// Ministry & History
export const MinistryContent = styled.div`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
`;

export const HistoryContent = styled.div`
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
`;

// 담임목사 인사말 - Vision Labels
export const VisionSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 50px 0;
`;


// 섬기는 사람들
// 섬기는 사람들
export const StaffContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StaffGroup = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }
`;

export const StaffCategoryTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 700;
    color: #2c2c2c;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    align-items: center;
    
    &::before {
        content: '';
        display: block;
        width: 4px;
        height: 18px;
        background-color: #333;
        margin-right: 10px;
        border-radius: 2px;
    }
`;

export const StaffList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const StaffGridList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px 24px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const StaffItem = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px dashed #f0f0f0;

    &:last-child {
        border-bottom: none;
    }
`;

export const StaffName = styled.span`
    font-size: 1.05rem;
    font-weight: 600;
    color: #333;
`;

export const StaffRole = styled.span`
    font-size: 0.95rem;
    color: #777;
    text-align: right;
`;

// 예배 안내
export const WorshipSection = styled.div``;

export const WorshipCategory = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 24px;
    letter-spacing: -0.01em;
    color: #2c2c2c;
`;

export const WorshipTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const WorshipRow = styled.div`
    display: grid;
    grid-template-columns: 160px 200px 1fr;
    gap: 16px;
    padding: 18px;
    background: #fafafa;
    border-radius: 6px;
    border: 1px solid #eee;
    transition: border-color 0.2s ease;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 6px;
    }

    &:hover {
        border-color: #ddd;
    }
`;

export const WorshipLabel = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #2c2c2c;
`;

export const WorshipTime = styled.div`
    font-size: 0.95rem;
    color: #666;
`;

export const WorshipPlace = styled.div`
    font-size: 0.9rem;
    color: #999;
`;

export const OnlineSection = styled.div`
    margin-top: 60px;
    padding: 32px;
    background: #fafafa;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #eee;
`;

export const OnlineTitle = styled.h4`
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #2c2c2c;
`;

export const AccountNumber = styled.p`
    font-size: 1rem;
    color: #666;
    font-weight: 400;
`;

export const AccountBanner = styled.div`
    max-width: 800px;
    margin: 32px auto 0 auto;
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
    cursor: pointer;

    strong {
        margin-right: 16px;
        color: #f59e0b;
    }
`;

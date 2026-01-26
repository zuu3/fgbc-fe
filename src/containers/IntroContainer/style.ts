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
        padding: 14px 16px;
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
    margin-bottom: 32px;
    padding-bottom: 14px;
    letter-spacing: -0.02em;
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
        margin-bottom: 24px;
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

// 교회 위치
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
    display: grid;
    grid-template-columns: minmax(0, 1fr) 420px;
    gap: 80px;
    align-items: center;
    padding: 0;
    background: transparent;
    border-radius: 0;
    box-shadow: none;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 40px;
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
    width: 420px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 380px;
    }
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
    gap: 40px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StaffGroup = styled.div`
    background: transparent;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 28px 0;
    box-shadow: none;

    &:first-of-type {
        border-top: none;
        padding-top: 0;
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
    padding: 18px 0;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: border-color 0.2s ease;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 6px;
    }

    &:last-child {
        border-bottom: none;
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
    padding: 24px 0;
    background: transparent;
    border-radius: 0;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
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
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid transparent;

    &:hover {
        background: #3a3a3a;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        border-color: #f59e0b;
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 20px 16px;
        margin: 24px 16px 0 16px;
    }
`;

export const AccountText = styled.p`
    font-size: 1rem;
    color: white;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    word-break: keep-all;
    line-height: 1.5;

    strong {
        color: #f59e0b;
        white-space: nowrap;
    }

    svg {
        font-size: 1.2rem;
        opacity: 0.7;
        transition: opacity 0.2s;
        flex-shrink: 0;
    }

    &:hover svg {
        opacity: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
        font-size: 0.95rem;

        strong {
            margin-bottom: 4px;
        }
    }
`;

import styled from '@emotion/styled';
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
    margin: 0;
    color: #f5f5f5;
    text-align: center;

    @media (max-width: 768px) {
        ${typography.title3}
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
    transition: all 0.2s ease;

    &:hover {
        color: #2c2c2c;
    }

    @media (max-width: 768px) {
        padding: 14px 16px;
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
    ${typography.title5}
    margin-bottom: 32px;
    padding-bottom: 14px;
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
    ${typography.title6}
    color: white;
    margin: 0 0 8px 0;
`;

export const VisionSubtitle = styled.span`
    ${typography.body1}
    color: rgba(255,255,255,0.6);
    display: block;
`;

export const VisionText = styled.p`
    ${typography.body1}
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
    ${typography.title7}
    font-weight: 700;
    color: white;
    min-width: 40px;
`;

export const VisionItemText = styled.span`
    ${typography.body1}
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
    ${typography.body1}
    font-weight: 600;
    color: #666;
    margin-bottom: 10px;
`;

export const InfoValue = styled.p`
    ${typography.body1}
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
    ${typography.body1}
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 24px;
`;

export const StrategyHighlight = styled.p`
    ${typography.body1}
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
    ${typography.title4}
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
`;

export const GreetingSubtitle = styled.p`
    ${typography.title7}
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

export const GreetingSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const PastorSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    @media (max-width: 1024px) {
        order: -1;
        margin-bottom: 0;
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

export const GreetingTextWrapper = styled.div`
    flex: 1;
`;

export const PastorInfo = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const PastorTitle = styled.h3`
    ${typography.title7}
    font-weight: 600;
    color: #2c2c2c;
    text-align: center;
    letter-spacing: -0.01em;
`;

export const GreetingIntroText = styled.p`
    ${typography.title7}
    line-height: 1.8;
    color: #333;
    margin: 0 0 40px;
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
    ${typography.title7}
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
    ${typography.body1}
    line-height: 1.8;
    color: #555;
    margin: 0;
    word-break: keep-all;
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
    ${typography.body1}
    font-weight: ${props => props.$active ? '600' : '400'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: white;
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
        ${typography.body2}
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
    ${typography.title5}
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
    ${typography.body1}
    font-weight: 600;
    color: #2c2c2c;
`;

// Registration Section
export const RegistrationBox = styled.div``;

export const RegistrationTitle = styled.h3`
    ${typography.title7}
    font-weight: 600;
    margin-bottom: 50px;
    color: rgba(255,255,255,0.9);
`;

export const RegistrationSection = styled.div`
    margin-bottom: 50px;
`;

export const RegistrationSubtitle = styled.h4`
    ${typography.title7}
    font-weight: 600;
    margin-bottom: 20px;
`;

export const RegistrationList = styled.ul`
    list-style: none;
    padding: 0;
    
    li {
        ${typography.body1}
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
        ${typography.body1}
        line-height: 1.8;
        color: rgba(255,255,255,0.8);
        margin-bottom: 14px;
    }
`;

// Ministry & History
export const MinistryContent = styled.div`
    ${typography.body1}
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
`;

export const HistoryContent = styled.div`
    ${typography.body1}
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


// 섬기는 분들
// 섬기는 분들
export const StaffContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StaffGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0;
`;

export const StaffCategoryTitle = styled.h4`
    ${typography.title7}
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
    ${typography.body1}
    font-weight: 600;
    color: #333;
`;

export const StaffRole = styled.span`
    ${typography.body2}
    color: #777;
    text-align: right;
`;

export const StaffLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
`;

export const StaffSection = styled.div`
    padding: 88px 24px 96px;
    background: transparent;
    border-top: 1px solid rgba(36, 84, 123, 0.08);

    @media (max-width: 768px) {
        padding: 64px 20px 72px;
    }
`;

export const StaffSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 8px;
`;

export const StaffIntroTitle = styled.h3``;

export const StaffBoardTitle = styled.h2`
    ${typography.title3}
    margin: 0;
    text-align: center;

    @media (max-width: 768px) {
        ${typography.title4}
    }
`;

export const StaffIntroDesc = styled.p`
    ${typography.body1}
    text-align: center;
    margin: 0;
    margin-top: 8px;
`;

export const StaffSubHeading = styled.h3`
    ${typography.title5}
    margin: 40px 0 24px;
    text-align: left;

    &:first-of-type {
        margin-top: 0;
    }
`;

export const StaffBoard = styled.div`
    position: relative;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const SubTabMenu = styled.div`
    display: flex;
    gap: 0;
    margin-bottom: 0;
    border-bottom: 1px solid #ddd;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SubTabItem = styled.button<{ $active: boolean }>`
    padding: 16px 32px;
    background: ${props => props.$active ? '#fff' : 'transparent'};
    color: ${props => props.$active ? '#3b8f6c' : '#555'};
    border: 1px solid ${props => props.$active ? '#ddd' : 'transparent'};
    border-bottom: none;
    margin-bottom: -1px;
    ${typography.title7}
    font-weight: ${props => props.$active ? '700' : '500'};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: ${props => props.$active ? '#3b8f6c' : '#333'};
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
        ${typography.body1}
    }
`;

export const StaffContentBox = styled.div`
    border: 1px solid #ddd;
    border-top: none;
    padding: 60px 40px;
    background: #fff;
    min-height: 400px;

    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`;

export const EmptyStaffMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    ${typography.title7}
    color: #888;
    background: #f9f9f9;
    border-radius: 8px;
`;



export const MinistryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 280px));
    gap: 28px 22px;
    justify-content: start;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const MinistryCard = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
`;

export const MinistrySlot = styled.p`
    margin: 0 0 6px;
    ${typography.body2}
    line-height: 1.5;
    color: #666;
    text-align: center;
`;

export const MinistryPhotoFrame = styled.div`
    width: 100%;
    aspect-ratio: 3 / 4;
    border: 1px solid #ddd;
    background: #fafafa;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PhotoPlaceholder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    ${typography.body2}
`;

export const MinistryName = styled.h4`
    ${typography.title7}
    margin: 16px 0 4px;
    text-align: center;
`;

export const MinistryRole = styled.p`
    margin: 0 0 6px;
    ${typography.body2}
    line-height: 1.5;
    color: #49627a;
`;

export const MinistrySummary = styled.p`
    margin: 0;
    ${typography.caption}
    line-height: 1.55;
    color: #576b7e;
    word-break: keep-all;
`;

export const ElderBlock = styled.div`
    margin-top: 2px;
`;

export const ElderGroupTitle = styled.h4`
    ${typography.title7}
    margin: 0 0 12px;
`;

export const ElderSimpleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const ElderSimpleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const ElderCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(220px, 280px));
    gap: 28px 22px;
    justify-content: start;
    width: 100%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ElderProfileCard = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
`;

export const ElderPhotoCard = styled.div`
    width: 100%;
    aspect-ratio: 3 / 4;
    border: 1px solid #ddd;
    background: #fafafa;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ElderCardName = styled.h4`
    ${typography.title7}
    margin: 16px 0 4px;
    text-align: center;
`;

export const ElderCardRole = styled.p`
    margin: 0 0 6px;
    ${typography.body2}
    line-height: 1.5;
    color: #666;
    text-align: center;
`;

export const ElderPhotoPlaceholder = styled.div`
    width: 100%;
    max-width: 140px;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(0, 0, 0, 0.14);
    background: #f4f4f4;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    ${typography.caption}
`;

export const ElderNameOnly = styled.p`
    margin: 0;
    ${typography.body1}
    font-weight: 600;
    color: #222;
    text-align: center;
    word-break: keep-all;
`;

// 예배 안내
export const WorshipSection = styled.section`
    margin-top: 8px;
`;

export const WorshipTableWrapper = styled.div`
    width: min(1640px, 100%);
    margin: 0 auto;
    padding: 28px 24px;
    background: #f3f3f3;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 20px 16px;
        gap: 12px;
    }
`;

export const WorshipTableHeader = styled.h2`
    ${typography.title2}
    margin: 0 0 28px;
    font-weight: 700;
    color: #2c2c2c;
    text-align: center;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        ${typography.title4}
        margin-bottom: 20px;
    }
`;

export const WorshipTableColumn = styled.div`
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 0;
    padding: 20px 16px;
    min-height: 220px;

    @media (max-width: 768px) {
        min-height: auto;
        padding: 16px 14px;
    }
`;

export const WorshipTableTitle = styled.h3`
    ${typography.title7}
    font-weight: 700;
    margin-bottom: 14px;
    color: #2c2c2c;
`;

export const WorshipTableRow = styled.div`
    ${typography.body2}
    color: #444;
    line-height: 1.75;
    border-top: 1px solid #ececec;
    padding: 10px 0;
    display: block;

    &:first-of-type {
        border-top: 1px solid #dcdcdc;
    }
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
    ${typography.title7}
    font-weight: 600;
    margin-bottom: 12px;
    color: #2c2c2c;
`;

export const AccountNumber = styled.p`
    ${typography.body1}
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
    ${typography.body1}
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
        ${typography.title7}
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
        ${typography.body2}

        strong {
            margin-bottom: 4px;
        }
    }
`;


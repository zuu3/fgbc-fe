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
    text-align: center;
    color: #2c2c2c;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-bottom: 32px;
    }
`;

// YouTube Section
export const YouTubeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 40px;
    background: #fef5f5;
    border-radius: 8px;
    border: 1px solid #ffe0e0;

    @media (max-width: 768px) {
        padding: 36px 20px;
    }
`;

export const YouTubeIcon = styled.div`
    font-size: 5rem;
    color: #FF0000;
    margin-bottom: 32px;

    @media (max-width: 768px) {
        font-size: 3.5rem;
        margin-bottom: 24px;
    }
`;

export const YouTubeDescription = styled.p`
    font-size: 1.05rem;
    line-height: 1.7;
    color: #666;
    text-align: center;
    margin-bottom: 40px;
    max-width: 600px;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 32px;
    }
`;

export const YouTubeButton = styled.a`
    display: inline-block;
    padding: 14px 40px;
    background: #FF0000;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
        background: #CC0000;
    }
`;

// Instagram Section
export const InstagramSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 40px;
    background: #fef5f9;
    border-radius: 8px;
    border: 1px solid #ffe0ee;

    @media (max-width: 768px) {
        padding: 48px 20px;
    }
`;

export const InstagramIcon = styled.div`
    font-size: 5rem;
    color: #E1306C;
    margin-bottom: 32px;

    @media (max-width: 768px) {
        font-size: 3.5rem;
        margin-bottom: 24px;
    }
`;

export const ComingSoonText = styled.p`
    font-size: 1.15rem;
    line-height: 1.7;
    color: #666;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

// Bulletin Section
export const BulletinDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #666;
    text-align: center;
    margin-bottom: 40px;
`;

export const BulletinPlaceholder = styled.div`
    width: 100%;
    min-height: 500px;
    background: #fafafa;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 1rem;
    border: 2px dashed #ddd;
    text-align: center;
    line-height: 1.7;
`;

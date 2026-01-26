import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #1f1f1f;
    padding: 36px 24px 44px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const FooterRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
`;

export const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 220px;
`;

export const FooterTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
`;

export const FooterSubTitle = styled.span`
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
`;

export const FooterInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
    align-items: center;
`;

export const FooterLine = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    &:not(:last-of-type)::after {
        content: '|';
        color: rgba(255, 255, 255, 0.25);
        margin-left: 10px;
    }

    @media (max-width: 768px) {
        &:not(:last-of-type)::after {
            content: '';
            margin: 0;
        }
    }
`;

export const FooterLabel = styled.span`
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
`;

export const FooterValue = styled.span`
    font-size: 0.95rem;
    color: #ffffff;
`;

export const FooterSns = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const FooterSnsLink = styled.a`
    font-size: 0.9rem;
    color: #d9d9d9;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: #ffffff;
    }
`;

import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #f8f9fa;
    padding: 80px 24px 40px;
    border-top: 1px solid #e5e7eb;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const TopSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.5fr 1.5fr;
    gap: 40px;

    @media (max-width: 968px) {
        grid-template-columns: 1fr 1fr;
        gap: 40px 20px;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ColumnTitle = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: #111;
    margin: 0;
`;

export const ServiceList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ServiceItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    .name {
        font-size: 0.95rem;
        font-weight: 600;
        color: #374151;
    }

    .time {
        font-size: 0.9rem;
        color: #6b7280;
    }
    
    .location {
        font-size: 0.85rem;
        color: #9ca3af;
    }
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 0;
`;

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }
`;

export const ChurchInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        color: #111;
        margin: 0;
    }

    p {
        font-size: 1rem;
        color: #4b5563;
        line-height: 1.6;
        margin: 0;
    }
`;

export const Affiliation = styled.div`
    max-width: 300px;
    
    p {
        font-size: 1rem;
        color: #6b7280;
        line-height: 1.5;
        margin: 0;
        word-break: keep-all;
        // white-space: nowrap;
    }

    strong {
        font-weight: 600;
        color: #374151;
    }
`;

export const Copyright = styled.div`
    margin-top: 20px;
    font-size: 0.85rem;
    color: #9ca3af;
    font-weight: 500;
`;

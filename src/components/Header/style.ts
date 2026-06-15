import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderWrapper = styled.header<{ $isScrolled: boolean; $lightText: boolean }>`
    --header-bulletin-border: ${(props) => (props.$lightText ? 'rgba(255, 255, 255, 0.9)' : '#1C1712')};
    --header-bulletin-bg: ${(props) => (props.$lightText ? 'rgba(28, 23, 18, 0.28)' : '#1C1712')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${props => (props.$isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent')};
    backdrop-filter: ${props => (props.$isScrolled ? 'blur(10px)' : 'none')};
    z-index: 1000;
    border-bottom: ${props => (props.$isScrolled ? '1px solid #EEE8E1' : '1px solid transparent')};
    box-shadow: ${props => (props.$isScrolled ? '0 1px 3px rgba(28, 23, 18, 0.05)' : 'none')};
    transition: background 0.2s ease, border-bottom-color 0.2s ease, box-shadow 0.2s ease, backdrop-filter 0.2s ease;

    @media (max-width: 768px) {
        position: sticky;
        left: auto;
        right: auto;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #EEE8E1;
        box-shadow: 0 1px 3px rgba(28, 23, 18, 0.05);
    }
`;

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

export const Logo = styled.div<{ $lightText: boolean }>`
    a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: ${(props) => (props.$lightText ? '#ffffff' : '#1C1712')};
        text-shadow: ${(props) => (props.$lightText ? '0 2px 10px rgba(28, 23, 18, 0.35)' : 'none')};
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        white-space: nowrap;

        @media (max-width: 768px) {
            color: #1C1712;
            text-shadow: none;
            font-size: 1.1rem;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 32px;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const BulletinNavButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    padding: 0 20px;
    border-radius: 999px;
    border: 1px solid var(--header-bulletin-border);
    background: var(--header-bulletin-bg);
    color: #fff;
    text-decoration: none;
    font-size: 1.08rem;
    font-weight: 700;
    transition: all 0.2s ease;

    &:hover {
        background: #FAF8F5;
        color: #1C1712;
    }
`;

export const NavItem = styled.div<{ $lightText: boolean }>`
    position: relative;
    padding: 28px 0;

    a {
        color: ${(props) => (props.$lightText ? '#ffffff' : '#1C1712')};
        text-shadow: ${(props) => (props.$lightText ? '0 2px 10px rgba(28, 23, 18, 0.35)' : 'none')};
        text-decoration: none;
        font-size: 1.08rem;
        font-weight: 700;
        transition: color 0.2s ease;

        &:hover {
            color: ${(props) => (props.$lightText ? 'rgba(255, 255, 255, 0.82)' : '#5C5349')};
        }
    }
`;

export const NavLink = styled.span<{ $lightText: boolean }>`
    color: ${(props) => (props.$lightText ? '#ffffff' : '#1C1712')};
    text-shadow: ${(props) => (props.$lightText ? '0 2px 10px rgba(28, 23, 18, 0.35)' : 'none')};
    font-size: 1.08rem;
    font-weight: 700;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${(props) => (props.$lightText ? 'rgba(255, 255, 255, 0.82)' : '#5C5349')};
    }
`;

export const SubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #FAF8F5;
    border-radius: 6px;
    padding: 8px 0;
    min-width: 180px;
    box-shadow: 0 2px 12px rgba(28, 23, 18, 0.08);
    border: 1px solid #EEE8E1;
    animation: fadeIn 0.15s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%);
        }
        to {
            opacity: 1;
            transform: translateX(-50%);
        }
    }
`;

export const SubMenuItem = styled.div`
    padding: 8px 20px;
    transition: background 0.2s ease;

    &:hover {
        background: #F5F3EF;
    }

    a {
        color: #5C5349;
        text-decoration: none;
        font-size: 0.9rem;
        white-space: nowrap;
        display: block;
    }
`;

export const MobileMenuButton = styled.button<{ $lightText: boolean }>`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: ${(props) => (props.$lightText ? '#ffffff' : '#1C1712')};
    text-shadow: ${(props) => (props.$lightText ? '0 2px 10px rgba(28, 23, 18, 0.35)' : 'none')};
    z-index: 1100;

    @media (max-width: 768px) {
        display: block;
        color: #1C1712;
        text-shadow: none;
    }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #FAF8F5;
    z-index: 1050;
    padding: 80px 20px 40px;
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    overflow-y: auto;
`;

export const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const MobileNavItem = styled.div`
    border-bottom: 1px solid #E2D9CF;

    > a {
        text-decoration: none;
        color: #1C1712;
        display: flex;
        align-items: center;
        min-height: 52px;
        padding: 0 4px;
        font-size: 1.05rem;
        font-weight: 600;
        letter-spacing: -0.01em;
    }
`;

export const MobileNavLink = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: #1C1712;
    margin-bottom: 16px;
`;

export const MobileSubMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 10px;
`;

export const MobileSubMenuItem = styled.div`
    a {
        color: #5C5349;
        text-decoration: none;
        font-size: 1rem;
        display: block;
        padding: 4px 0;
    }
`;


export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 16px;
`;

export const BulletinButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    background: #1C1712;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 999px;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        background: #5C5349;
    }

    @media (max-width: 768px) {
        padding: 7px 12px;
        font-size: 0.8rem;
    }
`;

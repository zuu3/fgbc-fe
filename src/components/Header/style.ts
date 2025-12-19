import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

export const Logo = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #2c2c2c;

    a {
        color: #2c2c2c;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: #555;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 40px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    position: relative;
    padding: 28px 0;

    a {
        color: #2c2c2c;
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
        transition: color 0.2s ease;

        &:hover {
            color: #666;
        }
    }
`;

export const NavLink = styled.span`
    color: #2c2c2c;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #666;
    }
`;

export const SubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 6px;
    padding: 8px 0;
    min-width: 180px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #eee;
    animation: fadeIn 0.15s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;

export const SubMenuItem = styled.div`
    padding: 8px 20px;
    transition: background 0.2s ease;

    &:hover {
        background: #f8f9fa;
    }

    a {
        color: #444;
        text-decoration: none;
        font-size: 0.9rem;
        white-space: nowrap;
        display: block;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1100;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 1050;
    padding: 80px 20px 40px;
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    overflow-y: auto;
`;

export const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const MobileNavItem = styled.div`
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
`;

export const MobileNavLink = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c2c2c;
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
        color: #666;
        text-decoration: none;
        font-size: 1rem;
        display: block;
        padding: 4px 0;
    }
`;


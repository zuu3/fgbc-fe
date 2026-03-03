'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './style';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHomeDarkBanner, setIsHomeDarkBanner] = useState(() => {
        if (typeof document === 'undefined') return false;
        return document.body.dataset.homeBannerDark === '1';
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const onToneChange = (event: Event) => {
            const customEvent = event as CustomEvent<{ isDark?: boolean }>;
            setIsHomeDarkBanner(Boolean(customEvent.detail?.isDark));
        };

        window.addEventListener('home-banner-tone-change', onToneChange as EventListener);
        return () => {
            window.removeEventListener('home-banner-tone-change', onToneChange as EventListener);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const useLightText = !isScrolled && isHomeDarkBanner;

    return (
        <S.HeaderWrapper $isScrolled={isScrolled} $lightText={useLightText}>
            <S.Container>
                <S.Logo $lightText={useLightText}>
                    <Link href="/" aria-label="순복음범천교회 홈">순복음범천교회</Link>
                </S.Logo>

                <S.Nav>
                    <S.NavItem
                        $lightText={useLightText}
                        onMouseEnter={() => setActiveMenu('intro')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <Link href="/intro?tab=greeting">
                            <S.NavLink $lightText={useLightText}>교회 소개</S.NavLink>
                        </Link>
                        {activeMenu === 'intro' && (
                            <S.SubMenu>
                                <S.SubMenuItem>
                                    <Link href="/intro?tab=greeting">담임목사 인사말</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/intro?tab=staff">섬기는 사람들</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/intro?tab=worship">예배 안내</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/intro?tab=location">교회 위치</Link>
                                </S.SubMenuItem>
                            </S.SubMenu>
                        )}
                    </S.NavItem>

                    <S.NavItem
                        $lightText={useLightText}
                        onMouseEnter={() => setActiveMenu('life')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <Link href="/newcomer?tab=welcome">
                            <S.NavLink $lightText={useLightText}>교회 생활</S.NavLink>
                        </Link>
                        {activeMenu === 'life' && (
                            <S.SubMenu>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=welcome">처음 오셨나요?</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=education">교육 안내</Link>
                                </S.SubMenuItem>
                            </S.SubMenu>
                        )}
                    </S.NavItem>

                    <S.BulletinNavButton href="/bulletins">주보</S.BulletinNavButton>
                </S.Nav>

                <S.RightSection>
                    <S.MobileMenuButton
                        $lightText={useLightText}
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </S.MobileMenuButton>
                </S.RightSection>

                <S.MobileMenuOverlay
                    $isOpen={isMobileMenuOpen}
                    id="mobile-menu"
                    role="navigation"
                    aria-label="모바일 메뉴"
                    aria-hidden={!isMobileMenuOpen}
                >
                    <S.MobileNav>
                        <S.MobileNavItem>
                            <Link href="/" onClick={closeMobileMenu}>홈</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/intro?tab=greeting" onClick={closeMobileMenu}>담임목사 인사말</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/intro?tab=staff" onClick={closeMobileMenu}>섬기는 사람들</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/intro?tab=worship" onClick={closeMobileMenu}>예배 안내</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/intro?tab=location" onClick={closeMobileMenu}>교회 위치</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/newcomer?tab=welcome" onClick={closeMobileMenu}>처음 오셨나요?</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/newcomer?tab=education" onClick={closeMobileMenu}>교육 안내</Link>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <Link href="/bulletins" onClick={closeMobileMenu}>주보</Link>
                        </S.MobileNavItem>
                    </S.MobileNav>
                </S.MobileMenuOverlay>
            </S.Container>
        </S.HeaderWrapper>
    );
};

export default Header;

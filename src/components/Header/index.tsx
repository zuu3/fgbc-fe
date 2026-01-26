'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './style';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <S.HeaderWrapper>
            <S.Container>
                <S.Logo>
                    <Link href="/">순복음범천교회</Link>
                </S.Logo>

                <S.Nav>
                    <S.NavItem
                        onMouseEnter={() => setActiveMenu('intro')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <S.NavLink>교회 소개</S.NavLink>
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
                        onMouseEnter={() => setActiveMenu('life')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <S.NavLink>교회 생활</S.NavLink>
                        {activeMenu === 'life' && (
                            <S.SubMenu>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=welcome">처음 오셨나요?</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=community">공동체 소개</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=notice">교회 공지</Link>
                                </S.SubMenuItem>
                            </S.SubMenu>
                        )}
                    </S.NavItem>

                    <S.NavItem
                        onMouseEnter={() => setActiveMenu('sermon')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <S.NavLink>설교 및 주보</S.NavLink>
                        {activeMenu === 'sermon' && (
                            <S.SubMenu>
                                <S.SubMenuItem>
                                    <Link href="/sermon">예배 관련 정보</Link>
                                </S.SubMenuItem>
                            </S.SubMenu>
                        )}
                    </S.NavItem>

                </S.Nav>


                <S.RightSection>
                    <S.MobileMenuButton
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M18 6L6 18" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M3 12H21" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            <S.MobileNavLink>교회 소개</S.MobileNavLink>
                            <S.MobileSubMenu>
                                <S.MobileSubMenuItem>
                                    <Link href="/intro?tab=greeting" onClick={closeMobileMenu}>담임목사 인사말</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/intro?tab=staff" onClick={closeMobileMenu}>섬기는 사람들</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/intro?tab=worship" onClick={closeMobileMenu}>예배 안내</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/intro?tab=location" onClick={closeMobileMenu}>교회 위치</Link>
                                </S.MobileSubMenuItem>
                            </S.MobileSubMenu>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <S.MobileNavLink>교회 생활</S.MobileNavLink>
                            <S.MobileSubMenu>
                                <S.MobileSubMenuItem>
                                    <Link href="/newcomer?tab=welcome" onClick={closeMobileMenu}>처음 오셨나요?</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/newcomer?tab=community" onClick={closeMobileMenu}>공동체 소개</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/newcomer?tab=notice" onClick={closeMobileMenu}>교회 공지</Link>
                                </S.MobileSubMenuItem>
                            </S.MobileSubMenu>
                        </S.MobileNavItem>
                        <S.MobileNavItem>
                            <S.MobileNavLink>설교 및 주보</S.MobileNavLink>
                            <S.MobileSubMenu>
                                <S.MobileSubMenuItem>
                                    <Link href="/sermon" onClick={closeMobileMenu}>예배 관련 정보</Link>
                                </S.MobileSubMenuItem>
                            </S.MobileSubMenu>
                        </S.MobileNavItem>
                    </S.MobileNav>
                </S.MobileMenuOverlay>
            </S.Container>
        </S.HeaderWrapper>
    );
};

export default Header;

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
                        <S.NavLink>교회를 소개합니다</S.NavLink>
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
                            </S.SubMenu>
                        )}
                    </S.NavItem>

                    <S.NavItem
                        onMouseEnter={() => setActiveMenu('newcomer')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <S.NavLink>처음 오셨나요?</S.NavLink>
                        {activeMenu === 'newcomer' && (
                            <S.SubMenu>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=registration">등록 과정</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=training">양육과 훈련</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/newcomer?tab=location">찾아오는 길</Link>
                                </S.SubMenuItem>
                            </S.SubMenu>
                        )}
                    </S.NavItem>

                    <S.NavItem
                        onMouseEnter={() => setActiveMenu('online')}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <S.NavLink>온라인으로 만나기</S.NavLink>
                        {activeMenu === 'online' && (
                            <S.SubMenu>
                                <S.SubMenuItem>
                                    <Link href="https://www.youtube.com/@순복음범천교회" target="_blank" rel="noopener noreferrer">유튜브 채널 링크</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="https://www.instagram.com/fgbc_" target="_blank" rel="noopener noreferrer">인스타그램</Link>
                                </S.SubMenuItem>
                                <S.SubMenuItem>
                                    <Link href="/online?tab=bulletin">온라인 주보</Link>
                                </S.SubMenuItem>
                            </S.SubMenu>
                        )}
                    </S.NavItem>
                </S.Nav>

                <S.MobileMenuButton onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </S.MobileMenuButton>

                <S.MobileMenuOverlay $isOpen={isMobileMenuOpen}>
                    <S.MobileNav>
                        <S.MobileNavItem>
                            <S.MobileNavLink>교회를 소개합니다</S.MobileNavLink>
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
                            </S.MobileSubMenu>
                        </S.MobileNavItem>

                        <S.MobileNavItem>
                            <S.MobileNavLink>처음 오셨나요?</S.MobileNavLink>
                            <S.MobileSubMenu>
                                <S.MobileSubMenuItem>
                                    <Link href="/newcomer?tab=registration" onClick={closeMobileMenu}>등록 과정</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/newcomer?tab=training" onClick={closeMobileMenu}>양육과 훈련</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/newcomer?tab=location" onClick={closeMobileMenu}>찾아오는 길</Link>
                                </S.MobileSubMenuItem>
                            </S.MobileSubMenu>
                        </S.MobileNavItem>

                        <S.MobileNavItem>
                            <S.MobileNavLink>온라인으로 만나기</S.MobileNavLink>
                            <S.MobileSubMenu>
                                <S.MobileSubMenuItem>
                                    <Link href="https://www.youtube.com/@순복음범천교회" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>유튜브 채널 링크</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="https://www.instagram.com/fgbc_" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>인스타그램</Link>
                                </S.MobileSubMenuItem>
                                <S.MobileSubMenuItem>
                                    <Link href="/online?tab=bulletin" onClick={closeMobileMenu}>온라인 주보</Link>
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

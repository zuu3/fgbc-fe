'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import * as S from './style';

const OnlineContainer = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState<'youtube' | 'instagram' | 'bulletin'>('youtube');

    useEffect(() => {
        if (tabParam === 'youtube' || tabParam === 'instagram' || tabParam === 'bulletin') {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    return (
        <S.Container>
            <S.Header>
                <S.Title>온라인으로 만나기</S.Title>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'youtube'} onClick={() => setActiveTab('youtube')}>
                    유튜브 채널
                </S.Tab>
                <S.Tab $active={activeTab === 'instagram'} onClick={() => setActiveTab('instagram')}>
                    인스타그램
                </S.Tab>
                <S.Tab $active={activeTab === 'bulletin'} onClick={() => setActiveTab('bulletin')}>
                    온라인 주보
                </S.Tab>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'youtube' && (
                    <S.Section>
                        <S.SectionTitle>유튜브 채널</S.SectionTitle>

                        <S.YouTubeSection>
                            <S.YouTubeIcon>
                                <FaYoutube />
                            </S.YouTubeIcon>

                            <S.YouTubeDescription>
                                순복음범천교회 유튜브 채널에서 예배 영상과 설교 말씀을 만나보세요.<br />
                                온라인으로 함께하는 은혜로운 예배에 여러분을 초대합니다.
                            </S.YouTubeDescription>

                            <S.YouTubeButton href="https://www.youtube.com/@%EC%88%9C%EB%B3%B5%EC%9D%8C%EB%B2%94%EC%B2%9C%EA%B5%90%ED%9A%8C" target="_blank" rel="noopener noreferrer">
                                채널 바로가기
                            </S.YouTubeButton>
                        </S.YouTubeSection>
                    </S.Section>
                )}

                {activeTab === 'instagram' && (
                    <S.Section>
                        <S.SectionTitle>인스타그램</S.SectionTitle>

                        <S.InstagramSection>
                            <S.InstagramIcon>
                                <FaInstagram />
                            </S.InstagramIcon>

                            <S.ComingSoonText>
                                인스타그램 채널은 준비 중입니다.<br />
                                조금만 기다려 주세요!
                            </S.ComingSoonText>
                        </S.InstagramSection>
                    </S.Section>
                )}

                {activeTab === 'bulletin' && (
                    <S.Section>
                        <S.SectionTitle>온라인 주보</S.SectionTitle>

                        <S.BulletinDescription>
                            주일 예배의 모든 순서와 교회 소식을 확인하실 수 있습니다.
                        </S.BulletinDescription>

                        <S.BulletinPlaceholder>
                            주보 이미지 업로드 시스템<br />
                            (추후 구현 예정)
                        </S.BulletinPlaceholder>
                    </S.Section>
                )}
            </S.Content>
        </S.Container>
    );
};

export default OnlineContainer;

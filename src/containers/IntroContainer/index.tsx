'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as S from './style';

const IntroContainer = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState<'greeting' | 'staff' | 'worship'>('greeting');

    useEffect(() => {
        if (tabParam === 'greeting' || tabParam === 'staff' || tabParam === 'worship') {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    return (
        <S.Container>
            <S.Header>
                <S.Title>교회를 소개합니다</S.Title>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'greeting'} onClick={() => setActiveTab('greeting')}>
                    담임목사 인사말
                </S.Tab>
                <S.Tab $active={activeTab === 'staff'} onClick={() => setActiveTab('staff')}>
                    섬기는 사람들
                </S.Tab>
                <S.Tab $active={activeTab === 'worship'} onClick={() => setActiveTab('worship')}>
                    예배 안내
                </S.Tab>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'greeting' && (
                    <S.Section>
                        <S.SectionTitle>담임목사 인사말</S.SectionTitle>

                        <S.GreetingIntro>
                            순복음범천교회는 모든 세대가 하나 되어<br />
                            성령의 인도하심을 따라 하나님 나라의 비전을 품고<br />
                            예수 그리스도의 사랑을 세상으로 흘려보내는<br />
                            따뜻한 가족 공동체입니다.
                        </S.GreetingIntro>

                        <S.PastorSection>
                            <S.PastorImageWrapper>
                                <S.PastorImage src="/pastor_lee.jpg" alt="이효훈 목사" />
                            </S.PastorImageWrapper>
                            <S.PastorInfo>
                                <S.PastorTitle>이효훈 담임목사</S.PastorTitle>
                            </S.PastorInfo>
                        </S.PastorSection>

                        <S.VisionGrid>
                            <S.VisionCard>
                                <S.VisionLabel>성령</S.VisionLabel>
                                <S.VisionDescription>
                                    우리는 삶의 모든 자리에서 성령의 숨결을 경험하기를 소망합니다.
                                    하루의 작은 순간부터 공동체의 중요한 결단까지, 성령께서 인도하시는 길을 신뢰하며 따라갑니다.
                                </S.VisionDescription>
                            </S.VisionCard>

                            <S.VisionCard>
                                <S.VisionLabel>하나님 나라</S.VisionLabel>
                                <S.VisionDescription>
                                    우리는 눈에 보이는 현실을 넘어 성령께서 이루어 가시는 하나님 나라를 꿈꿉니다.
                                    우리의 예배와 삶이 하나님 나라의 가치를 드러내는 통로가 되기를 바랍니다.
                                </S.VisionDescription>
                            </S.VisionCard>

                            <S.VisionCard>
                                <S.VisionLabel>세상</S.VisionLabel>
                                <S.VisionDescription>
                                    우리는 교회 안에서만 머무는 신앙이 아니라, 하나님께 받은 사랑을 세상 속으로 흘려보냅니다.
                                    가정과 일터, 이웃과 지역사회에 예수 그리스도의 향기를 전하며 세상을 섬기고자 합니다.
                                </S.VisionDescription>
                            </S.VisionCard>

                            <S.VisionCard>
                                <S.VisionLabel>가족</S.VisionLabel>
                                <S.VisionDescription>
                                    우리 교회는 아이부터 어르신까지 모든 세대가 서로를 존중하고 격려하며 사랑으로 연결된 따뜻한 가족 공동체입니다.
                                    각 세대가 따로 존재하는 것이 아니라, 서로의 신앙을 붙잡아 주고 한 몸을 이루어 하나님 나라를 함께 세워가는 공동체가 되는 것이 우리가 추구하는 교회의 모습입니다.
                                </S.VisionDescription>
                            </S.VisionCard>
                        </S.VisionGrid>

                        <S.ClosingMessage>
                            살아계신 주님을 깊이 만나고 하나님이 주인된 삶을 살아갈 때 참된 쉼을 누리게 됩니다.
                            성령께서 주시는 새 힘과 회복, 기쁨이 여러분의 삶과 가정 위에 가득할 것입니다.
                            함께 하나님께서 예비하신 행복한 믿음의 여정을 걸어가기를 기도하고 축복합니다.
                        </S.ClosingMessage>
                    </S.Section>
                )}

                {activeTab === 'staff' && (
                    <S.Section>
                        <S.SectionTitle>섬기는 사람들</S.SectionTitle>

                        <S.StaffSection>
                            <S.StaffCategory>교역자</S.StaffCategory>
                            <S.StaffGrid>
                                <S.StaffCard>
                                    <S.StaffPhoto src="/pastor_profile.jpg" alt="정성철 목사" />
                                    <S.StaffName>정성철 원로목사</S.StaffName>
                                </S.StaffCard>

                                <S.StaffCard>
                                    <S.StaffPhoto src="/pastor_lee.jpg" alt="이효훈 목사" />
                                    <S.StaffName>이효훈 담임목사</S.StaffName>
                                    <S.StaffDepartment>교구, 청년, 청소년</S.StaffDepartment>
                                </S.StaffCard>

                                <S.StaffCard>
                                    <S.StaffPhoto src="/pastor_profile.jpg" alt="한혜진 담임사모" />
                                    <S.StaffName>한혜진 담임사모</S.StaffName>
                                    <S.StaffDepartment>초등부</S.StaffDepartment>
                                </S.StaffCard>
                            </S.StaffGrid>

                            <S.StaffCategory style={{ marginTop: '60px' }}>시무장로</S.StaffCategory>
                            <S.ElderGrid>
                                <S.ElderCard>
                                    <S.ElderName>김중배</S.ElderName>
                                    <S.ElderDepartment>행정위원회, 선교위원회</S.ElderDepartment>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderName>이재현</S.ElderName>
                                    <S.ElderDepartment>예배위원회, 봉사위원회</S.ElderDepartment>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderName>모정종</S.ElderName>
                                    <S.ElderDepartment>관리위원회, 교육위원회</S.ElderDepartment>
                                </S.ElderCard>
                            </S.ElderGrid>

                            <S.StaffCategory style={{ marginTop: '60px' }}>은퇴장로</S.StaffCategory>
                            <S.ElderGrid>
                                <S.ElderCard>
                                    <S.ElderName>김재덕</S.ElderName>
                                </S.ElderCard>
                                <S.ElderCard>
                                    <S.ElderName>오재문</S.ElderName>
                                </S.ElderCard>
                            </S.ElderGrid>

                            <S.TeamSection>
                                <S.TeamCategory>성가대장</S.TeamCategory>
                                <S.TeamList>
                                    <S.TeamMember>이영호 <span>지휘</span></S.TeamMember>
                                    <S.TeamMember>강성철 <span>건반</span></S.TeamMember>
                                    <S.TeamMember>연인혜, 한상원 <span>신디</span></S.TeamMember>
                                    <S.TeamMember>박희숙, 정수린</S.TeamMember>
                                </S.TeamList>

                                <S.TeamCategory>방송</S.TeamCategory>
                                <S.TeamList>
                                    <S.TeamMember>손상봉 <span>영상</span></S.TeamMember>
                                    <S.TeamMember>윤종철 <span>음향</span></S.TeamMember>
                                    <S.TeamMember>장주성</S.TeamMember>
                                </S.TeamList>

                                <S.TeamCategory>온라인, 홈페이지</S.TeamCategory>
                                <S.TeamList>
                                    <S.TeamMember>김명준</S.TeamMember>
                                </S.TeamList>
                            </S.TeamSection>
                        </S.StaffSection>
                    </S.Section>
                )}

                {activeTab === 'worship' && (
                    <S.Section>
                        <S.SectionTitle>예배 안내</S.SectionTitle>

                        <S.WorshipSection>
                            <S.WorshipCategory>주일 예배</S.WorshipCategory>
                            <S.WorshipTable>
                                <S.WorshipRow>
                                    <S.WorshipLabel>1부 예배</S.WorshipLabel>
                                    <S.WorshipTime>오전 09:00</S.WorshipTime>
                                    <S.WorshipPlace>2층 본당</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>2부 예배</S.WorshipLabel>
                                    <S.WorshipTime>오전 11:00</S.WorshipTime>
                                    <S.WorshipPlace>2층 본당</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>오후예배</S.WorshipLabel>
                                    <S.WorshipTime>오후 2:00 (격주)</S.WorshipTime>
                                    <S.WorshipPlace>2층 본당</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>영유치부 예배</S.WorshipLabel>
                                    <S.WorshipTime>오전 11:00</S.WorshipTime>
                                    <S.WorshipPlace>본당 3층 모자실</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>유초등부 예배</S.WorshipLabel>
                                    <S.WorshipTime>오전 10:30</S.WorshipTime>
                                    <S.WorshipPlace>교육관 3층 예배실</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>중고등부 예배</S.WorshipLabel>
                                    <S.WorshipTime>오전 10:00</S.WorshipTime>
                                    <S.WorshipPlace>1층 소예배실</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>청년예배</S.WorshipLabel>
                                    <S.WorshipTime>오후 02:00</S.WorshipTime>
                                    <S.WorshipPlace>1층 소예배실</S.WorshipPlace>
                                </S.WorshipRow>
                            </S.WorshipTable>

                            <S.WorshipCategory style={{ marginTop: '60px' }}>주중 예배</S.WorshipCategory>
                            <S.WorshipTable>
                                <S.WorshipRow>
                                    <S.WorshipLabel>수요예배</S.WorshipLabel>
                                    <S.WorshipTime>수요일 저녁 07:30</S.WorshipTime>
                                    <S.WorshipPlace>2층 본당</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>금요철야기도회</S.WorshipLabel>
                                    <S.WorshipTime>금요일 저녁 08:30 (시즌제)</S.WorshipTime>
                                    <S.WorshipPlace>2층 본당</S.WorshipPlace>
                                </S.WorshipRow>
                                <S.WorshipRow>
                                    <S.WorshipLabel>새벽기도회</S.WorshipLabel>
                                    <S.WorshipTime>월-금 오전 05:00</S.WorshipTime>
                                    <S.WorshipPlace>1층 소예배실</S.WorshipPlace>
                                </S.WorshipRow>
                            </S.WorshipTable>

                            <S.OnlineSection>
                                <S.OnlineTitle>온라인 헌금</S.OnlineTitle>
                                <S.AccountNumber>수협은행 701-01-189085 순복음범천교회</S.AccountNumber>
                            </S.OnlineSection>
                        </S.WorshipSection>
                    </S.Section>
                )}
            </S.Content>
        </S.Container>
    );
};

export default IntroContainer;

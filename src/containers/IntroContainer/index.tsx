'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { MdContentCopy } from 'react-icons/md';
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

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#offering') {
            setTimeout(() => {
                const element = document.getElementById('offering');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }, [activeTab]);

    const handleAccountCopy = () => {
        navigator.clipboard.writeText('수협은행 701-01-189085');
        toast.success('계좌번호가 복사되었습니다');
    };

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
                    <S.GreetingContent>


                        <S.GreetingTextWrapper>
                            <S.SectionTitle style={{ textAlign: 'left', marginBottom: '30px' }}>담임목사 인사말</S.SectionTitle>

                            <S.GreetingIntroText>
                                순복음범천교회는 <strong>모든 세대가 하나 되어</strong><br />
                                성령의 인도하심을 따라 하나님 나라의 비전을 품고<br />
                                예수 그리스도의 사랑을 세상으로 흘려보내는<br />
                                <strong>따뜻한 가족 공동체</strong>입니다.
                            </S.GreetingIntroText>

                            <S.KeywordList>
                                <S.KeywordItem>
                                    <S.KeywordTitle>성령</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        우리는 삶의 모든 자리에서 성령의 숨결을 경험하기를 소망합니다.<br />
                                        하루의 작은 순간부터 공동체의 중요한 결단까지, 성령께서 인도하시는 길을 신뢰하며 따라갑니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>

                                <S.KeywordItem>
                                    <S.KeywordTitle>하나님 나라</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        우리는 눈에 보이는 현실을 넘어 성령께서 이루어 가시는 하나님 나라를 꿈꿉니다.<br />
                                        우리의 예배와 삶이 하나님 나라의 가치를 드러내는 통로가 되기를 바랍니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>

                                <S.KeywordItem>
                                    <S.KeywordTitle>세상</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        우리는 교회 안에서만 머무는 신앙이 아니라, 하나님께 받은 사랑을 세상 속으로 흘려보냅니다.<br />
                                        가정과 일터, 이웃과 지역사회에 예수 그리스도의 향기를 전하며 세상을 섬기고자 합니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>

                                <S.KeywordItem>
                                    <S.KeywordTitle>가족</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        우리 교회는 아이부터 어르신까지 모든 세대가 서로를 존중하고 격려하며 사랑으로 연결된 따뜻한 가족 공동체입니다.<br />
                                        각 세대가 따로 존재하는 것이 아니라, 서로의 신앙을 붙잡아 주고 한 몸을 이루어 하나님 나라를 함께 세워가는 공동체가 되는 것이 우리가 추구하는 교회의 모습입니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>
                            </S.KeywordList>

                            <S.ClosingMessage>
                                살아계신 주님을 깊이 만나고 하나님이 주인된 삶을 살아갈 때 참된 쉼을 누리게 됩니다.<br />
                                성령께서 주시는 새 힘과 회복, 기쁨이 여러분의 삶과 가정 위에 가득할 것입니다.<br />
                                함께 하나님께서 예비하신 행복한 믿음의 여정을 걸어가기를 기도하고 축복합니다.
                            </S.ClosingMessage>
                        </S.GreetingTextWrapper>

                        <S.PastorSection>
                            <S.PastorImageWrapper>
                                <S.PastorImage src="/pastor_lee.png" alt="이효훈 목사" />
                            </S.PastorImageWrapper>
                            <S.PastorInfo>
                                <S.PastorTitle>이효훈 담임목사</S.PastorTitle>
                            </S.PastorInfo>
                        </S.PastorSection>
                    </S.GreetingContent>
                )}

                {activeTab === 'staff' && (
                    <S.Section>
                        <S.SectionTitle>섬기는 사람들</S.SectionTitle>

                        <S.StaffContainer>
                            {/* 교역자 */}
                            <S.StaffGroup>
                                <S.StaffCategoryTitle>교역자</S.StaffCategoryTitle>
                                <S.StaffList>
                                    <S.StaffItem>
                                        <S.StaffName>정성철</S.StaffName>
                                        <S.StaffRole>원로목사</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>이효훈</S.StaffName>
                                        <S.StaffRole>담임목사 (교구, 청년, 청소년)</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>한혜진</S.StaffName>
                                        <S.StaffRole>담임사모 (초등부)</S.StaffRole>
                                    </S.StaffItem>
                                </S.StaffList>
                            </S.StaffGroup>

                            {/* 시무장로 */}
                            <S.StaffGroup>
                                <S.StaffCategoryTitle>시무장로</S.StaffCategoryTitle>
                                <S.StaffList>
                                    <S.StaffItem>
                                        <S.StaffName>김중배</S.StaffName>
                                        <S.StaffRole>행정위원회, 선교위원회</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>이재현</S.StaffName>
                                        <S.StaffRole>예배위원회, 봉사위원회</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>모정종</S.StaffName>
                                        <S.StaffRole>관리위원회, 교육위원회</S.StaffRole>
                                    </S.StaffItem>
                                </S.StaffList>
                            </S.StaffGroup>

                            {/* 은퇴장로 */}
                            <S.StaffGroup>
                                <S.StaffCategoryTitle>은퇴장로</S.StaffCategoryTitle>
                                <S.StaffList>
                                    <S.StaffItem>
                                        <S.StaffName>김재덕</S.StaffName>
                                        <S.StaffRole>은퇴장로</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>오재문</S.StaffName>
                                        <S.StaffRole>은퇴장로</S.StaffRole>
                                    </S.StaffItem>
                                </S.StaffList>
                            </S.StaffGroup>

                            {/* 찬양/방송/행정 */}
                            <S.StaffGroup>
                                <S.StaffCategoryTitle>찬양 / 방송 / 행정</S.StaffCategoryTitle>
                                <S.StaffGridList>
                                    <S.StaffItem>
                                        <S.StaffName>이영호</S.StaffName>
                                        <S.StaffRole>성가대장</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>강성철</S.StaffName>
                                        <S.StaffRole>지휘</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>연인혜, 한상원</S.StaffName>
                                        <S.StaffRole>건반</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>박희숙, 정수린</S.StaffName>
                                        <S.StaffRole>신디</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>손상봉</S.StaffName>
                                        <S.StaffRole>방송</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>윤종철</S.StaffName>
                                        <S.StaffRole>영상</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>장주성</S.StaffName>
                                        <S.StaffRole>음향</S.StaffRole>
                                    </S.StaffItem>
                                    <S.StaffItem>
                                        <S.StaffName>김명준</S.StaffName>
                                        <S.StaffRole>온라인, 홈페이지</S.StaffRole>
                                    </S.StaffItem>
                                </S.StaffGridList>
                            </S.StaffGroup>
                        </S.StaffContainer>
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

                            <S.AccountBanner id="offering" onClick={handleAccountCopy}>
                                <S.AccountText>
                                    <strong>온라인 헌금</strong> 수협은행 701-01-189085 순복음범천교회 <MdContentCopy />
                                </S.AccountText>
                            </S.AccountBanner>
                        </S.WorshipSection>
                    </S.Section>
                )}
            </S.Content>
        </S.Container>
    );
};

export default IntroContainer;

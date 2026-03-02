'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { MdContentCopy } from 'react-icons/md';
import Image from 'next/image';
import KakaoMap from '@/components/KakaoMap';
import * as S from './style';

const IntroContainer = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const activeTab: 'greeting' | 'staff' | 'worship' | 'location' =
        tabParam === 'greeting' || tabParam === 'staff' || tabParam === 'worship' || tabParam === 'location'
            ? tabParam
            : 'greeting';

    const changeTab = (tab: 'greeting' | 'staff' | 'worship' | 'location') => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', tab);
        router.push(`${pathname}?${params.toString()}`);
    };

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
                <S.Tab $active={activeTab === 'greeting'} onClick={() => changeTab('greeting')}>
                    담임목사 인사말
                </S.Tab>
                <S.Tab $active={activeTab === 'staff'} onClick={() => changeTab('staff')}>
                    섬기는 사람들
                </S.Tab>
                <S.Tab $active={activeTab === 'worship'} onClick={() => changeTab('worship')}>
                    예배 안내
                </S.Tab>
                <S.Tab $active={activeTab === 'location'} onClick={() => changeTab('location')}>
                    교회 위치
                </S.Tab>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'greeting' && (
                    <S.GreetingContent>


                        <S.GreetingTextWrapper>
                            <S.SectionTitle style={{ textAlign: 'left', marginBottom: '30px' }}>담임목사 인사말</S.SectionTitle>

                            <S.GreetingIntroText>
                                순복음범천교회는<br />
                                <strong>성령의 능력으로 세상을 밝히는 하나님 나라 공동체입니다.</strong>
                            </S.GreetingIntroText>

                            <S.KeywordList>
                                <S.KeywordItem>
                                    <S.KeywordTitle>우리의 정체성 (Identity)</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        “너희는 세상의 빛이라<br />
                                        산 위에 있는 동네가 숨겨지지 못할 것이요”(마 5:14)<br /><br />
                                        우리는 서로의 삶을 밝히는 공동체입니다.<br />
                                        가정과 일터, 이웃과 지역 안에서<br />
                                        예수님의 사랑을 나누며 살아가고자 합니다.<br />
                                        교회는 완벽한 사람들이 모인 곳이 아닙니다.<br />
                                        부족하고 연약한 이들이 함께 배우고 성장하는 공동체입니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>

                                <S.KeywordItem>
                                    <S.KeywordTitle>우리의 사명 (Mission)</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        “오직 성령이 너희에게 임하시면 너희가 권능을 받고<br />
                                        예루살렘과 온 유대와 사마리아와 땅 끝까지 이르러<br />
                                        내 증인이 되리라 하시니라”(행 1:8)<br /><br />
                                        우리는 하나님의 도우심을 의지하며 살아갑니다.<br />
                                        예배를 통해 힘을 얻고<br />
                                        인간의 지혜보다 성령님의 인도하심을 신뢰합니다.<br />
                                        신앙은 교회 안에만 머무는 것이 아니라<br />
                                        일상의 자리에서 이어지는 삶이라고 믿습니다.<br />
                                        그래서 우리는 삶의 자리에서 예수님의 증인으로 살아갑니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>

                                <S.KeywordItem>
                                    <S.KeywordTitle>우리가 꿈꾸는 하나님 나라</S.KeywordTitle>
                                    <S.KeywordDesc>
                                        “주의 성령이 내게 임하셨으니 이는 가난한 자에게 복음을 전하게 하시려고<br />
                                        내게 기름을 부으시고 나를 보내사 포로 된 자에게 자유를,<br />
                                        눈 먼 자에게 다시 보게 함을 전파하며 눌린 자를 자유롭게 하고<br />
                                        주의 은혜의 해를 전파하게 하려 하심이라 하였더라”(눅 4:18-19)<br /><br />
                                        우리가 바라는 하나님 나라는<br />
                                        상처가 회복되고<br />
                                        묶인 삶이 자유로워지고<br />
                                        절망이 소망으로 바뀌는 세상입니다.<br />
                                        하나님의 은혜가 실제가 되는 곳<br />
                                        교회는 그런 변화를 함께 경험하는 공동체입니다.<br />
                                        우리는 이 땅에서 하나님 나라를 미리 살아내고자 합니다.
                                    </S.KeywordDesc>
                                </S.KeywordItem>
                            </S.KeywordList>

                        </S.GreetingTextWrapper>

                        <S.PastorSection>
                            <S.PastorImageWrapper>
                                <Image
                                    src="/pastor_lee.png"
                                    alt="이효훈 담임목사님 사진"
                                    width={420}
                                    height={560}
                                    quality={75}
                                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                    priority
                                />
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

                        <S.StaffLayout>
                            <S.StaffIntroTitle>교역자 및 장로 소개</S.StaffIntroTitle>
                            <S.StaffIntroDesc>순복음범천교회를 섬기는 사역자와 장로를 소개합니다.</S.StaffIntroDesc>
                            <S.StaffDivider />

                            <S.StaffSubHeading>사역자</S.StaffSubHeading>
                            <S.MinistryGrid>
                                <S.MinistryCard>
                                    <S.MinistryPhotoFrame>
                                        <S.PhotoPlaceholder>사진 준비중</S.PhotoPlaceholder>
                                    </S.MinistryPhotoFrame>
                                    <S.MinistryName>정성철 원로목사</S.MinistryName>
                                    <S.MinistryBodyPlaceholder />
                                </S.MinistryCard>

                                <S.MinistryCard>
                                    <S.MinistryPhotoFrame>
                                        <Image
                                            src="/pastor_lee.png"
                                            alt="이효훈 담임목사"
                                            width={220}
                                            height={280}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </S.MinistryPhotoFrame>
                                    <S.MinistryName>이효훈 담임목사</S.MinistryName>
                                    <S.MinistryBodyPlaceholder />
                                </S.MinistryCard>

                                <S.MinistryCard>
                                    <S.MinistryPhotoFrame>
                                        <S.PhotoPlaceholder>사진 준비중</S.PhotoPlaceholder>
                                    </S.MinistryPhotoFrame>
                                    <S.MinistryName>한혜진 담임사모</S.MinistryName>
                                    <S.MinistryBodyPlaceholder />
                                </S.MinistryCard>
                            </S.MinistryGrid>

                            <S.StaffDivider />
                            <S.StaffSubHeading>장로</S.StaffSubHeading>
                            <S.ElderBlock>
                                <S.ElderGroupTitle>시무장로</S.ElderGroupTitle>
                                <S.ElderSimpleGrid>
                                    <S.ElderSimpleCard>
                                        <S.ElderPhotoPlaceholder>사진</S.ElderPhotoPlaceholder>
                                        <S.ElderNameOnly>김중배 장로</S.ElderNameOnly>
                                    </S.ElderSimpleCard>
                                    <S.ElderSimpleCard>
                                        <S.ElderPhotoPlaceholder>사진</S.ElderPhotoPlaceholder>
                                        <S.ElderNameOnly>이재현 장로</S.ElderNameOnly>
                                    </S.ElderSimpleCard>
                                    <S.ElderSimpleCard>
                                        <S.ElderPhotoPlaceholder>사진</S.ElderPhotoPlaceholder>
                                        <S.ElderNameOnly>모정종 장로</S.ElderNameOnly>
                                    </S.ElderSimpleCard>
                                </S.ElderSimpleGrid>
                            </S.ElderBlock>

                            <S.ElderBlock>
                                <S.ElderGroupTitle>은퇴장로</S.ElderGroupTitle>
                                <S.ElderSimpleGrid>
                                    <S.ElderSimpleCard>
                                        <S.ElderPhotoPlaceholder>사진</S.ElderPhotoPlaceholder>
                                        <S.ElderNameOnly>김재덕 장로</S.ElderNameOnly>
                                    </S.ElderSimpleCard>
                                    <S.ElderSimpleCard>
                                        <S.ElderPhotoPlaceholder>사진</S.ElderPhotoPlaceholder>
                                        <S.ElderNameOnly>오재문 장로</S.ElderNameOnly>
                                    </S.ElderSimpleCard>
                                </S.ElderSimpleGrid>
                            </S.ElderBlock>
                        </S.StaffLayout>
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

                {activeTab === 'location' && (
                    <S.Section>
                        <S.SectionTitle>교회 위치</S.SectionTitle>

                        <S.LocationInfo>
                            <S.InfoBlock>
                                <S.InfoLabel>주소</S.InfoLabel>
                                <S.InfoValue>부산광역시 부산진구 엄광로 359</S.InfoValue>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.InfoLabel>교통편</S.InfoLabel>
                                <S.InfoValue>
                                    버스 - 신암입구 하차 도보 5분<br />
                                    지하철 - 부암역 7번 출구 하차 도보 10분
                                </S.InfoValue>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.InfoLabel>전화 및 FAX</S.InfoLabel>
                                <S.InfoValue>
                                    TEL : 051) 634-9362<br />FAX : 051) 635-2801
                                </S.InfoValue>
                            </S.InfoBlock>
                        </S.LocationInfo>

                        <S.MapContainer>
                            <KakaoMap />
                        </S.MapContainer>
                    </S.Section>
                )}
            </S.Content>
        </S.Container>
    );
};

export default IntroContainer;

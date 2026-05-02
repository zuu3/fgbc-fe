'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { MdContentCopy } from 'react-icons/md';
import { motion } from 'framer-motion';
import Image from 'next/image';
import KakaoMap from '@/components/KakaoMap';
import * as S from './style';

type MinistryMember = {
    slotTitle: string;
    name: string;
    role: string;
    image: string | null;
    alt: string;
    summary?: string;
};

const IntroContainer = () => {
    const [staffTab, setStaffTab] = useState<'pastor' | 'elder' | 'staff'>('pastor');

    const ministryMembers: MinistryMember[] = [
        {
            slotTitle: '원로목사',
            name: '정성철 원로목사',
            role: '원로목사',
            image: '/pastor/pastor_jung.png',
            alt: '정성철 원로목사',
            // summary: '순복음범천교회의 믿음의 뿌리를 세운 원로목사',
        },
        {
            slotTitle: '담임목사',
            name: '이효훈 담임목사',
            role: '담임목사',
            image: '/pastor/pastor_lee_zoom.png',
            alt: '이효훈 담임목사',
            // summary: '순복음범천교회의 목회 방향을 이끄는 담임목사',
        },
        {
            slotTitle: '담임사모',
            name: '한혜진 담임사모',
            role: '주일학교',
            image: null,
            alt: '한혜진 담임사모',
            // summary: '기도와 섬김으로 공동체를 함께 세워가는 동역자',
        },
        {
            slotTitle: '교육간사',
            name: '장성윤 교육간사',
            role: '학생회',
            image: null,
            alt: '장성윤 교육간사',
        },
    ];

    const activeElders = [
        { name: '김중배 장로', image: '/elder/40_kimj.JPG', alt: '김중배 장로' },
        { name: '이재현 장로', image: null, alt: '이재현 장로' },
        { name: '모정종 장로', image: '/elder/47_mo.JPG', alt: '모정종 장로' },
    ];

    const retiredElders = [
        { name: '김재덕 장로', image: '/elder/37_kim.JPG', alt: '김재덕 장로' },
        { name: '오재문 장로', image: '/elder/29_oh.JPG', alt: '오재문 장로' },
    ];

    const churchStaff: { name: string; image: string | null; alt: string; role: string }[] = [];

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const activeTab: 'greeting' | 'worship' | 'location' =
        tabParam === 'greeting' || tabParam === 'staff' || tabParam === 'worship' || tabParam === 'location'
            ? (tabParam === 'staff' ? 'greeting' : tabParam)
            : 'greeting';

    const changeTab = (tab: 'greeting' | 'worship' | 'location') => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('tab', tab);
        router.push(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
        if (tabParam === 'staff') {
            const params = new URLSearchParams(searchParams.toString());
            params.set('tab', 'greeting');
            router.replace(`${pathname}?${params.toString()}`);
        }
    }, [pathname, router, searchParams, tabParam]);

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
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                >
                    <S.Title>교회를 소개합니다</S.Title>
                </motion.div>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'greeting'} onClick={() => changeTab('greeting')}>
                    섬기는 분들
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
                    <S.GreetingSection>
                        <S.GreetingContent>
                            <S.GreetingTextWrapper>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                                >
                                    <S.GreetingIntroText>
                                        <span>순복음범천교회는</span>
                                        <strong>성령의 능력으로 세상을 밝히는 하나님 나라 공동체입니다.</strong>
                                    </S.GreetingIntroText>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
                                >
                                    <S.KeywordList>
                                        <S.KeywordItem>
                                            <S.KeywordTitle>우리의 정체성(마 5:14)</S.KeywordTitle>
                                            <S.KeywordDesc>
                                                우리는 서로의 삶을 밝히는 공동체입니다. 가정과 일터, 이웃과 지역 안에서
                                                예수님의 사랑을 나누며 살아가고자 합니다. 교회는 완벽한 사람들이 모인 곳이 아닙니다.
                                                부족하고 연약한 이들이 함께 배우고 성장하는 공동체입니다.
                                            </S.KeywordDesc>
                                        </S.KeywordItem>

                                        <S.KeywordItem>
                                            <S.KeywordTitle>우리의 사명 (행 1:8)</S.KeywordTitle>
                                            <S.KeywordDesc>
                                                우리는 하나님의 도우심을 의지하며 살아갑니다. 예배를 통해 힘을 얻고
                                                인간의 지혜보다 성령님의 인도하심을 신뢰합니다. 신앙은 교회 안에만 머무는 것이 아니라
                                                일상의 자리에서 이어지는 삶이라고 믿습니다. 그래서 우리는 삶의 자리에서
                                                예수님의 증인으로 살아갑니다.
                                            </S.KeywordDesc>
                                        </S.KeywordItem>

                                        <S.KeywordItem>
                                            <S.KeywordTitle>우리가 꿈꾸는 하나님 나라 (눅 4:18-19)</S.KeywordTitle>
                                            <S.KeywordDesc>
                                                우리가 바라는 하나님 나라는 상처가 회복되고 묶인 삶이 자유로워지고
                                                절망이 소망으로 바뀌는 세상입니다. 하나님의 은혜가 실제가 되는 곳,
                                                교회는 그런 변화를 함께 경험하는 공동체입니다. 우리는 이 땅에서
                                                하나님 나라를 미리 살아내고자 합니다.
                                            </S.KeywordDesc>
                                        </S.KeywordItem>
                                    </S.KeywordList>
                                </motion.div>
                            </S.GreetingTextWrapper>

                            <S.PastorSection>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } } }}
                                >
                                    <S.PastorImageWrapper>
                                        <Image
                                            src="/pastor/pastor_lee.jpeg"
                                            alt="이효훈 담임목사님 사진"
                                            width={420}
                                            height={560}
                                            quality={75}
                                            style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '20px' }}
                                            priority
                                        />
                                    </S.PastorImageWrapper>
                                    <S.PastorInfo>
                                        <S.PastorTitle>이효훈 담임목사</S.PastorTitle>
                                    </S.PastorInfo>
                                </motion.div>
                            </S.PastorSection>
                        </S.GreetingContent>
                    </S.GreetingSection>
                )}

                {activeTab === 'worship' && (
                    <S.Section>
                        <S.WorshipSection>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                            >
                                <S.WorshipTableHeader>예배 안내</S.WorshipTableHeader>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
                            >
                                <S.WorshipTableWrapper>
                                    <S.WorshipTableColumn>
                                        <S.WorshipTableTitle>주일예배</S.WorshipTableTitle>
                                        <S.WorshipTableRow>1부예배 · 오전 9:00 · 2F 본당</S.WorshipTableRow>
                                        <S.WorshipTableRow>2부예배 · 오전 11:00 · 2F 본당</S.WorshipTableRow>
                                        <S.WorshipTableRow>오후예배 · 오후 2:00 · 2F 본당</S.WorshipTableRow>
                                    </S.WorshipTableColumn>

                                    <S.WorshipTableColumn>
                                        <S.WorshipTableTitle>부서예배</S.WorshipTableTitle>
                                        <S.WorshipTableRow>영유치부 · 오전 11:00 · B1 키즈룸</S.WorshipTableRow>
                                        <S.WorshipTableRow>유초등부 · 오전 10:40 · 비전센터 3F</S.WorshipTableRow>
                                        <S.WorshipTableRow>청소년부 · 오전 9:50 · 1F 소예배실</S.WorshipTableRow>
                                        <S.WorshipTableRow>청년부 · 오후 2:00 · 1F 소예배실</S.WorshipTableRow>
                                    </S.WorshipTableColumn>

                                    <S.WorshipTableColumn>
                                        <S.WorshipTableTitle>주중예배</S.WorshipTableTitle>
                                        <S.WorshipTableRow>새벽기도회 · 오전 5:00 · 1F 소예배실</S.WorshipTableRow>
                                        <S.WorshipTableRow>수요예배 · 저녁 7:30 · 2F 본당</S.WorshipTableRow>
                                        <S.WorshipTableRow>금요기도회 · 저녁 8:30 · 2F 본당</S.WorshipTableRow>
                                    </S.WorshipTableColumn>
                                </S.WorshipTableWrapper>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } } }}
                            >
                                <S.AccountBanner id="offering" onClick={handleAccountCopy}>
                                    <S.AccountText>
                                        <strong>온라인 헌금</strong> 수협은행 701-01-189085 순복음범천교회 <MdContentCopy />
                                    </S.AccountText>
                                </S.AccountBanner>
                            </motion.div>
                        </S.WorshipSection>
                    </S.Section>
                )}

                {activeTab === 'location' && (
                    <S.Section>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                        >
                            <S.SectionTitle>교회 위치</S.SectionTitle>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
                        >
                            <S.LocationInfo>
                                <S.InfoBlock>
                                    <S.InfoLabel>주소</S.InfoLabel>
                                    <S.InfoValue>
                                        도로명 주소 : 부산광역시 부산진구 엄광로 359<br />
                                        지번 주소 : 부산광역시 부산진구 범천동 1090-24<br />
                                        우편번호 : 47342
                                    </S.InfoValue>
                                </S.InfoBlock>

                                <S.InfoBlock>
                                    <S.InfoLabel>교통편</S.InfoLabel>
                                    <S.InfoValue>
                                        버스 - 신암입구 하차 도보 5분<br />
                                        지하철 - 부암역 7번 출구 하차 도보 10분
                                    </S.InfoValue>
                                </S.InfoBlock>

                                <S.InfoBlock>
                                    <S.InfoLabel>주차 안내</S.InfoLabel>
                                    <S.InfoValue>
                                        주차장 위치 : 안디옥 성전<br />
                                        도로명 주소 : 부산광역시 부산진구 엄광로 355<br />
                                        지번 주소 : 부산광역시 부산진구 범천동 1080-236<br />
                                        우편번호 : 47342
                                    </S.InfoValue>
                                </S.InfoBlock>

                                <S.InfoBlock>
                                    <S.InfoLabel>전화 및 FAX</S.InfoLabel>
                                    <S.InfoValue>
                                        TEL : 051) 634-9362<br />FAX : 051) 635-2801
                                    </S.InfoValue>
                                </S.InfoBlock>
                            </S.LocationInfo>
                        </motion.div>

                        <S.MapContainer>
                            <KakaoMap />
                        </S.MapContainer>
                    </S.Section>
                )}
            </S.Content>

            {activeTab === 'greeting' && (
                <S.StaffSection>
                    <S.StaffLayout>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                        >
                            <S.StaffSectionHeader>
                                <S.StaffBoardTitle>섬기는 분들</S.StaffBoardTitle>
                                <S.StaffIntroDesc>순복음범천교회를 함께 세워가는 사역자와 장로를 소개합니다.</S.StaffIntroDesc>
                            </S.StaffSectionHeader>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
                        >
                            <S.StaffBoard>
                                <S.SubTabMenu>
                                    <S.SubTabItem $active={staffTab === 'pastor'} onClick={() => setStaffTab('pastor')}>사역자</S.SubTabItem>
                                    <S.SubTabItem $active={staffTab === 'elder'} onClick={() => setStaffTab('elder')}>장로</S.SubTabItem>
                                </S.SubTabMenu>

                                <S.StaffContentBox>
                                    {staffTab === 'pastor' && (
                                        <S.MinistryGrid>
                                            {ministryMembers.map((member) => (
                                                <S.MinistryCard key={member.name}>
                                                    <S.MinistryPhotoFrame>
                                                        {member.image ? (
                                                            <Image
                                                                src={member.image}
                                                                alt={member.alt}
                                                                width={270}
                                                                height={345}
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                                                            />
                                                        ) : (
                                                            <S.PhotoPlaceholder>사진 준비중</S.PhotoPlaceholder>
                                                        )}
                                                    </S.MinistryPhotoFrame>
                                                    <S.MinistryName>{member.name}</S.MinistryName>
                                                    <S.MinistrySlot>{member.role}</S.MinistrySlot>
                                                    {member.summary && <S.MinistrySummary>{member.summary}</S.MinistrySummary>}
                                                </S.MinistryCard>
                                            ))}
                                        </S.MinistryGrid>
                                    )}

                                    {staffTab === 'elder' && (
                                        <>
                                            <S.StaffSubHeading>시무장로</S.StaffSubHeading>
                                            <S.ElderCardGrid>
                                                {activeElders.map((elder) => (
                                                    <S.ElderProfileCard key={elder.name}>
                                                        <S.ElderPhotoCard>
                                                            {elder.image ? (
                                                                <Image
                                                                    src={elder.image}
                                                                    alt={elder.alt}
                                                                    width={270}
                                                                    height={345}
                                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                                                                />
                                                            ) : (
                                                                <S.PhotoPlaceholder>사진 준비중</S.PhotoPlaceholder>
                                                            )}
                                                        </S.ElderPhotoCard>
                                                        <S.ElderCardName>{elder.name}</S.ElderCardName>
                                                        <S.ElderCardRole>시무장로</S.ElderCardRole>
                                                    </S.ElderProfileCard>
                                                ))}
                                            </S.ElderCardGrid>

                                            <S.StaffSubHeading>은퇴장로</S.StaffSubHeading>
                                            <S.ElderCardGrid>
                                                {retiredElders.map((elder) => (
                                                    <S.ElderProfileCard key={elder.name}>
                                                        <S.ElderPhotoCard>
                                                            <Image
                                                                src={elder.image}
                                                                alt={elder.alt}
                                                                width={270}
                                                                height={345}
                                                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                                                            />
                                                        </S.ElderPhotoCard>
                                                        <S.ElderCardName>{elder.name}</S.ElderCardName>
                                                        <S.ElderCardRole>은퇴장로</S.ElderCardRole>
                                                    </S.ElderProfileCard>
                                                ))}
                                            </S.ElderCardGrid>
                                        </>
                                    )}
                                </S.StaffContentBox>
                            </S.StaffBoard>
                        </motion.div>
                    </S.StaffLayout>
                </S.StaffSection>
            )}
        </S.Container>
    );
};

export default IntroContainer;

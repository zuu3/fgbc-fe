'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FiArrowRight, FiClipboard, FiCoffee, FiSmile, FiUsers } from 'react-icons/fi';
import * as S from './style';
import { getPublishedNotices } from '@/lib/content/client';
import type { Notice } from '@/types/content';
import { formatKstDate, formatKstTime } from '@/lib/dateTimeKst';

const NewcomerContainer = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [selectedTab, setSelectedTab] = useState<'welcome' | 'notice' | null>(null);
    const [notices, setNotices] = useState<Notice[]>([]);
    const [isLoadingNotices, setIsLoadingNotices] = useState(true);
    const activeTab = useMemo<'welcome' | 'notice'>(() => {
        if (selectedTab) return selectedTab;
        if (tabParam === 'welcome' || tabParam === 'notice') {
            return tabParam;
        }
        return 'welcome';
    }, [selectedTab, tabParam]);

    useEffect(() => {
        let mounted = true;

        getPublishedNotices(5).then((items) => {
            if (!mounted) return;
            setNotices(items.slice(0, 5));
            setIsLoadingNotices(false);
        }).catch(() => {
            if (!mounted) return;
            setNotices([]);
            setIsLoadingNotices(false);
        });

        return () => {
            mounted = false;
        };
    }, []);

    const noticeCategoryLabel = {
        worship: '예배',
        event: '행사',
        group: '모임',
        volunteer: '봉사',
        urgent: '긴급',
    } as const;

    const welcomeSteps = [
        {
            step: 'STEP 1',
            description: '순복음범천교회를 방문하셨다면 새가족팀의 환영을 받으실 수 있습니다.',
            icon: <FiSmile />,
        },
        {
            step: 'STEP 2',
            description: '예배당 입구에 비치된 방문카드를 작성해서 새가족 봉사자에게 전달해주세요.',
            icon: <FiClipboard />,
        },
        {
            step: 'STEP 3',
            description: '예배를 마치고 난 후에 잠시 담임목사와 인사를 나누는 시간을 가집니다.',
            icon: <FiUsers />,
        },
        {
            step: 'STEP 4',
            description: '이후 새가족 교육(4주)이 진행됩니다.',
            icon: <FiCoffee />,
        },
        {
            step: 'STEP 5',
            description: '새가족 교육을 마치면 정식으로 등록교인이 되며 소그룹에 배정됩니다.',
            icon: <FiUsers />,
        },
    ];



    return (
        <S.Container>
            <S.Header>
                <S.Title>교회 생활</S.Title>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'welcome'} onClick={() => setSelectedTab('welcome')}>
                    처음 오셨나요?
                </S.Tab>
                <S.Tab $active={activeTab === 'notice'} onClick={() => setSelectedTab('notice')}>
                    교회 공지
                </S.Tab>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'welcome' && (
                    <S.Section>
                        <S.SectionTitle>처음 오셨나요?</S.SectionTitle>
                        <S.IntroText>
                            순복음범천교회는 처음 오신 분들을 축복하고 환영합니다.<br />
                            4주간의 새가족 교육을 수료하여 등록 교인이 되시면 신앙생활의 도움을 받으실 수 있습니다.<br />
                            궁금한 점이 있으시면 주일예배 후 본당 입구에서 안내자 봉사자에게 문의해주세요.<br />
                            따뜻한 미소와 마음으로 행복한 믿음의 여정을 함께 걸어가겠습니다.
                        </S.IntroText>

                        <S.StepsTitle>순복음범천교회의 가족이 되는 방법을 알려드립니다</S.StepsTitle>

                        <S.StepFlow>
                            {welcomeSteps.map((item, index) => (
                                <React.Fragment key={item.step}>
                                    <S.StepVisualCard>
                                        <S.StepIconCircle>{item.icon}</S.StepIconCircle>
                                        <S.StepNumber>{item.step}</S.StepNumber>
                                        <S.StepDescription>{item.description}</S.StepDescription>
                                    </S.StepVisualCard>
                                    {index < welcomeSteps.length - 1 && (
                                        <S.StepArrow aria-hidden="true">
                                            <FiArrowRight />
                                        </S.StepArrow>
                                    )}
                                </React.Fragment>
                            ))}
                        </S.StepFlow>
                    </S.Section>
                )}

                {activeTab === 'notice' && (
                    <S.Section>
                        <S.SectionTitle>교회 공지</S.SectionTitle>
                        <S.IntroText>
                            주간 공지와 주요 일정을 확인하세요.
                        </S.IntroText>

                        {isLoadingNotices ? (
                            <S.NoticeLoading>공지 불러오는 중...</S.NoticeLoading>
                        ) : notices.length === 0 ? (
                            <S.NoticeLoading>등록된 공지가 없습니다.</S.NoticeLoading>
                        ) : (
                            <S.NoticeList>
                                {notices.map((notice) => (
                                    <S.NoticeItem key={notice.id}>
                                        <S.NoticeTag>{noticeCategoryLabel[notice.category]}</S.NoticeTag>
                                        <S.NoticeTitle>{notice.title}</S.NoticeTitle>
                                        <S.NoticeBody>{notice.content}</S.NoticeBody>
                                        <S.NoticeMeta>
                                            {formatKstDate(notice.start_at)} · {formatKstTime(notice.start_at)}
                                            {notice.location ? ` · ${notice.location}` : ''}
                                        </S.NoticeMeta>
                                    </S.NoticeItem>
                                ))}
                            </S.NoticeList>
                        )}

                    </S.Section>
                )}

            </S.Content>
        </S.Container>
    );
};

export default NewcomerContainer;

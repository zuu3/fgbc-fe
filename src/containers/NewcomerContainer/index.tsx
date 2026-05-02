'use client';

import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FiArrowRight, FiBookOpen, FiClipboard, FiCoffee, FiMessageCircle, FiSmile } from 'react-icons/fi';
import { motion } from 'framer-motion';
import * as S from './style';

const NewcomerContainer = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [selectedTab, setSelectedTab] = useState<'welcome' | 'education' | null>(null);
    const activeTab = useMemo<'welcome' | 'education'>(() => {
        if (selectedTab) return selectedTab;
        if (tabParam === 'welcome' || tabParam === 'education') {
            return tabParam;
        }
        return 'welcome';
    }, [selectedTab, tabParam]);

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
            icon: <FiMessageCircle />,
        },
        {
            step: 'STEP 4',
            description: '이후 새가족 교육(4주)이 진행됩니다.',
            icon: <FiCoffee />,
        },
        {
            step: 'STEP 5',
            description: '새가족 교육을 마치면 정식으로 등록교인이 되며 소그룹에 배정됩니다.',
            icon: <FiBookOpen />,
        },
    ];



    return (
        <S.Container>
            <S.Header>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                >
                    <S.Title>교회 생활</S.Title>
                </motion.div>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'welcome'} onClick={() => setSelectedTab('welcome')}>
                    처음 오셨나요?
                </S.Tab>
                <S.Tab $active={activeTab === 'education'} onClick={() => setSelectedTab('education')}>
                    교육 안내
                </S.Tab>
                <S.TabLink href="/sharing-worship">
                    나눔으로 드리는 예배
                </S.TabLink>
                <S.TabLink href="/pastoral-letter">
                    목양편지
                </S.TabLink>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'welcome' && (
                    <S.Section>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                        >
                            <S.SectionTitle>처음 오셨나요?</S.SectionTitle>
                            <S.IntroText>
                                순복음범천교회는 처음 오신 분들을 축복하고 환영합니다.<br />
                                4주간의 새가족 교육을 수료하여 등록 교인이 되시면 신앙생활의 도움을 받으실 수 있습니다.<br />
                                궁금한 점이 있으시면 주일예배 후 본당 입구에서 안내자 봉사자에게 문의해주세요.<br />
                                따뜻한 미소와 마음으로 행복한 믿음의 여정을 함께 걸어가겠습니다.
                            </S.IntroText>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
                        >
                            <S.StepsTitle>순복음범천교회의 가족이 되는 방법을 알려드립니다</S.StepsTitle>

                            <S.StepFlow>
                                {welcomeSteps.map((item, index) => (
                                    <React.Fragment key={item.step}>
                                        <motion.div
                                            initial="itemHidden"
                                            whileInView="itemVisible"
                                            viewport={{ once: true, amount: 0.1 }}
                                            variants={{ itemHidden: { opacity: 0, x: -30 }, itemVisible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: 'easeOut', delay: index * 0.5 } } }}
                                            style={{ height: '100%', width: '100%' }}
                                        >
                                            <S.StepVisualCard>
                                                <S.StepIconCircle>{item.icon}</S.StepIconCircle>
                                                <S.StepNumber>{item.step}</S.StepNumber>
                                                <S.StepDescription>{item.description}</S.StepDescription>
                                            </S.StepVisualCard>
                                        </motion.div>
                                        {index < welcomeSteps.length - 1 && (
                                            <S.StepArrow aria-hidden="true">
                                                <FiArrowRight />
                                            </S.StepArrow>
                                        )}
                                    </React.Fragment>
                                ))}
                            </S.StepFlow>
                        </motion.div>
                    </S.Section>
                )}

                {activeTab === 'education' && (
                    <S.Section>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                        >
                            <S.SectionTitle>교육 안내</S.SectionTitle>
                            <S.IntroText>준비중입니다.</S.IntroText>
                        </motion.div>
                    </S.Section>
                )}
            </S.Content>
        </S.Container>
    );
};

export default NewcomerContainer;

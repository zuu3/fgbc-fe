'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as S from './style';

const NewcomerContainer = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState<'welcome' | 'community' | 'notice'>('welcome');

    useEffect(() => {
        if (tabParam === 'welcome' || tabParam === 'community' || tabParam === 'notice') {
            setActiveTab(tabParam);
        }
    }, [tabParam]);



    return (
        <S.Container>
            <S.Header>
                <S.Title>교회 생활</S.Title>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'welcome'} onClick={() => setActiveTab('welcome')}>
                    처음 오셨나요?
                </S.Tab>
                <S.Tab $active={activeTab === 'community'} onClick={() => setActiveTab('community')}>
                    공동체 소개
                </S.Tab>
                <S.Tab $active={activeTab === 'notice'} onClick={() => setActiveTab('notice')}>
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

                        <S.StepsTitle>새가족이 되는 방법을 알려드립니다</S.StepsTitle>

                        <S.StepsContainer>
                            <S.StepCard>
                                <S.StepNumber>STEP 1</S.StepNumber>
                                <S.StepDescription>
                                    순복음범천교회를 방문하셨다면 새가족팀의 환영을 받으실 수 있습니다.
                                </S.StepDescription>
                            </S.StepCard>

                            <S.StepCard>
                                <S.StepNumber>STEP 2</S.StepNumber>
                                <S.StepDescription>
                                    예배당 입구에 비치된 방문카드를 작성해서 새가족 봉사자에게 전달해주세요.
                                </S.StepDescription>
                            </S.StepCard>

                            <S.StepCard>
                                <S.StepNumber>STEP 3</S.StepNumber>
                                <S.StepDescription>
                                    예배를 마치고 난 후에 잠시 담임목사와 인사를 나누는 시간을 가집니다.
                                </S.StepDescription>
                            </S.StepCard>

                            <S.StepCard>
                                <S.StepNumber>STEP 4</S.StepNumber>
                                <S.StepDescription>
                                    이후 새가족 교육(4주)이 진행됩니다.
                                </S.StepDescription>
                            </S.StepCard>

                            <S.StepCard>
                                <S.StepNumber>STEP 5</S.StepNumber>
                                <S.StepDescription>
                                    새가족 교육을 마치면 정식으로 등록교인이 되며 소그룹에 배정됩니다.
                                </S.StepDescription>
                            </S.StepCard>
                        </S.StepsContainer>
                    </S.Section>
                )}

                {activeTab === 'community' && (
                    <S.Section>
                        <S.SectionTitle>공동체 소개</S.SectionTitle>
                        <S.IntroText>
                            교회 공동체 소개 내용은 준비 중입니다.<br />
                            확정되는 대로 업데이트하겠습니다.
                        </S.IntroText>
                    </S.Section>
                )}

                {activeTab === 'notice' && (
                    <S.Section>
                        <S.SectionTitle>교회 공지</S.SectionTitle>
                        <S.IntroText>
                            교회 공지 내용은 준비 중입니다.<br />
                            확정되는 대로 업데이트하겠습니다.
                        </S.IntroText>
                    </S.Section>
                )}

            </S.Content>
        </S.Container>
    );
};

export default NewcomerContainer;

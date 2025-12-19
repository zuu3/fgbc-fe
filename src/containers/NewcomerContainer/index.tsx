'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as S from './style';
import KakaoMap from '@/components/KakaoMap';

const NewcomerContainer = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState<'registration' | 'training' | 'location'>('registration');

    useEffect(() => {
        if (tabParam === 'registration' || tabParam === 'training' || tabParam === 'location') {
            setActiveTab(tabParam);
        }
    }, [tabParam]);



    return (
        <S.Container>
            <S.Header>
                <S.Title>처음 오셨나요?</S.Title>
            </S.Header>

            <S.TabMenu>
                <S.Tab $active={activeTab === 'registration'} onClick={() => setActiveTab('registration')}>
                    등록 과정
                </S.Tab>
                <S.Tab $active={activeTab === 'training'} onClick={() => setActiveTab('training')}>
                    양육과 훈련
                </S.Tab>
                <S.Tab $active={activeTab === 'location'} onClick={() => setActiveTab('location')}>
                    찾아오는 길
                </S.Tab>
            </S.TabMenu>

            <S.Content>
                {activeTab === 'registration' && (
                    <S.Section>
                        <S.SectionTitle>등록 과정</S.SectionTitle>
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

                {activeTab === 'training' && (
                    <S.Section>
                        <S.SectionTitle>양육과 훈련</S.SectionTitle>
                        <S.IntroText style={{ marginBottom: '50px' }}>
                            순복음범천교회는 성도님들의 신앙 성장을 돕기 위해<br />
                            다양한 양육과 훈련 프로그램을 운영하고 있습니다.
                        </S.IntroText>

                        <S.TrainingList>
                            <S.TrainingItem>
                                <S.TrainingTitle>하나님 나라 성경 관통</S.TrainingTitle>
                                <S.TrainingDescription>
                                    창세기부터 요한계시록까지 성경 66권의 흐름을 배우며,
                                    하나님 나라의 관점에서 성경 전체를 이해하는 과정입니다.
                                </S.TrainingDescription>
                                <S.TrainingPeriod>매년 상·하반기 개설</S.TrainingPeriod>
                            </S.TrainingItem>

                            <S.TrainingItem>
                                <S.TrainingTitle>하나님 나라 제자훈련</S.TrainingTitle>
                                <S.TrainingDescription>
                                    예수 그리스도의 제자로서 삶의 모든 영역에서
                                    하나님 나라를 세워가는 방법을 배우는 훈련입니다.
                                </S.TrainingDescription>
                                <S.TrainingPeriod>매년 상·하반기 개설</S.TrainingPeriod>
                            </S.TrainingItem>

                            <S.TrainingItem>
                                <S.TrainingTitle>하나님을 경험하는 삶</S.TrainingTitle>
                                <S.TrainingDescription>
                                    일상에서 하나님의 임재를 경험하고,
                                    성령의 인도하심을 따라 살아가는 방법을 배웁니다.
                                </S.TrainingDescription>
                                <S.TrainingPeriod>매년 상·하반기 개설</S.TrainingPeriod>
                            </S.TrainingItem>
                        </S.TrainingList>

                        <S.TrainingNote>
                            * 각 훈련 과정은 교회 사정에 따라 일정이 변경될 수 있습니다.<br />
                            * 훈련 신청 및 문의는 교회 사무실로 연락해 주세요.
                        </S.TrainingNote>
                    </S.Section>
                )}

                {activeTab === 'location' && (
                    <S.Section>
                        <S.SectionTitle>찾아오는 길</S.SectionTitle>

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
                                <S.InfoLabel>전화</S.InfoLabel>
                                <S.InfoValue>051) 634-9362</S.InfoValue>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.InfoLabel>팩스</S.InfoLabel>
                                <S.InfoValue>051) 635-2801</S.InfoValue>
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

export default NewcomerContainer;

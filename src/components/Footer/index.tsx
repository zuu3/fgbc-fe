'use client';

import React from 'react';
import * as S from './style';

export default function Footer() {
    return (
        <S.FooterWrapper>
            <S.Container>
                <S.FooterRow>
                    <S.FooterBrand>
                        <S.FooterTitle>순복음범천교회</S.FooterTitle>
                        <S.FooterSubTitle>Full Gospel Beomcheon Church</S.FooterSubTitle>
                    </S.FooterBrand>
                    <S.FooterInfo>
                        <S.FooterLine>
                            <S.FooterLabel>주소</S.FooterLabel>
                            <S.FooterValue>부산광역시 부산진구 엄광로 359</S.FooterValue>
                        </S.FooterLine>
                        <S.FooterLine>
                            <S.FooterLabel>전화</S.FooterLabel>
                            <S.FooterValue>051) 634-9362</S.FooterValue>
                        </S.FooterLine>
                        <S.FooterLine>
                            <S.FooterLabel>팩스</S.FooterLabel>
                            <S.FooterValue>051) 635-2801</S.FooterValue>
                        </S.FooterLine>
                        <S.FooterLine>
                            <S.FooterLabel>담임목사 이메일</S.FooterLabel>
                            <S.FooterValue>pastor@example.com</S.FooterValue>
                        </S.FooterLine>
                    </S.FooterInfo>
                </S.FooterRow>
                <S.FooterRow>
                    <S.FooterSns>
                        <S.FooterSnsLink
                            href="https://www.youtube.com/@%EC%88%9C%EB%B3%B5%EC%9D%8C%EB%B2%94%EC%B2%9C%EA%B5%90%ED%9A%8C"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            유튜브
                        </S.FooterSnsLink>
                        <S.FooterSnsLink
                            href="https://www.instagram.com/fgbc_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            인스타그램
                        </S.FooterSnsLink>
                    </S.FooterSns>
                </S.FooterRow>
            </S.Container>
        </S.FooterWrapper>
    );
}

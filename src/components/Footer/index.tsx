'use client';

import * as S from './style';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <S.FooterWrapper>
            <S.Container>
                <S.TopSection>
                    <S.Column>
                        <S.ColumnTitle>예배 안내</S.ColumnTitle>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>주일 예배</S.ColumnTitle>
                        <S.ServiceList>
                            <S.ServiceItem>
                                <span className="name">1부 예배</span>
                                <span className="time">오전 09:00</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">2부 예배</span>
                                <span className="time">오전 11:00</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">오후예배</span>
                                <span className="time">오후 02:00 (격주)</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                        </S.ServiceList>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>주중 예배</S.ColumnTitle>
                        <S.ServiceList>
                            <S.ServiceItem>
                                <span className="name">수요예배</span>
                                <span className="time">수요일 저녁 07:30</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">금요철야기도회</span>
                                <span className="time">금요일 저녁 08:30 (시즌제)</span>
                                <span className="location">2층 본당</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">새벽기도회</span>
                                <span className="time">월-금 오전 05:00</span>
                                <span className="location">1층 소예배실</span>
                            </S.ServiceItem>
                        </S.ServiceList>
                    </S.Column>

                    <S.Column>
                        <S.ColumnTitle>교회 학교</S.ColumnTitle>
                        <S.ServiceList>
                            <S.ServiceItem>
                                <span className="name">영유치부</span>
                                <span className="time">주일 오전 11:00</span>
                                <span className="location">본당 3층 모자실</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">유초등부</span>
                                <span className="time">주일 오전 10:30</span>
                                <span className="location">교육관 3층</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">중고등부</span>
                                <span className="time">주일 오전 10:00</span>
                                <span className="location">1층 소예배실</span>
                            </S.ServiceItem>
                            <S.ServiceItem>
                                <span className="name">청년예배</span>
                                <span className="time">주일 오후 02:00</span>
                                <span className="location">1층 소예배실</span>
                            </S.ServiceItem>
                        </S.ServiceList>
                    </S.Column>
                </S.TopSection>

                <S.Divider />

                <S.BottomSection>
                    <S.ChurchInfo>
                        <h2>순복음범천교회</h2>
                        <p>
                            부산광역시 부산진구 엄광로 359<br />
                            Tel: 051) 634-9362
                        </p>
                        <S.Copyright>
                            © {currentYear} Full Gospel Beomcheon Church. All rights reserved.
                        </S.Copyright>
                    </S.ChurchInfo>

                    <S.Affiliation>
                        <p>
                            본 교회는 <strong>기독교대한하나님의성회(순복음)</strong>에<br />
                            소속된 복음주의를 실천하는 건강한 교회입니다.
                        </p>
                    </S.Affiliation>
                </S.BottomSection>
            </S.Container>
        </S.FooterWrapper>
    );
}

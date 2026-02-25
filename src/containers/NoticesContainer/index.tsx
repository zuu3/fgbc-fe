'use client';

import { useEffect, useMemo, useState } from 'react';
import * as S from './style';
import type { Notice } from '@/types/content';
import { getPublishedNotices } from '@/lib/content/client';
import { formatKstDate, formatKstTime } from '@/lib/dateTimeKst';

const categoryLabel: Record<Notice['category'], string> = {
  worship: '예배',
  event: '행사',
  group: '모임',
  volunteer: '봉사',
  urgent: '긴급',
};

function dateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function toMonthLabel(date: Date): string {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
}

function buildCalendar(baseDate: Date): Date[] {
  const firstDay = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - firstDay.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

export default function NoticesContainer() {
  const [monthCursor, setMonthCursor] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getPublishedNotices(200).then((items) => {
      if (!mounted) return;
      setNotices(items);
      setIsLoading(false);
    }).catch(() => {
      if (!mounted) return;
      setNotices([]);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const calendarDays = useMemo(() => buildCalendar(monthCursor), [monthCursor]);
  const selectedDayNotices = useMemo(() => {
    const start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0);
    const end = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 23, 59, 59);
    return notices
      .filter((notice) => {
        const startAt = new Date(notice.start_at);
        const endAt = new Date(notice.end_at);
        return startAt <= end && endAt >= start;
      })
      .sort((a, b) => new Date(a.start_at).getTime() - new Date(b.start_at).getTime());
  }, [notices, selectedDate]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>공지 캘린더</S.Title>
        <S.Description>날짜를 선택해서 일정과 공지를 확인하세요.</S.Description>
      </S.Header>

      <S.MonthControl>
        <button
          type="button"
          onClick={() => setMonthCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
        >
          이전 달
        </button>
        <strong>{toMonthLabel(monthCursor)}</strong>
        <button
          type="button"
          onClick={() => setMonthCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
        >
          다음 달
        </button>
      </S.MonthControl>

      <S.Grid>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <S.DayHeader key={day}>{day}</S.DayHeader>
        ))}

        {calendarDays.map((day) => {
          const key = dateKey(day);
          const dayNotices = notices
            .filter((notice) => {
              const start = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, 0, 0);
              const end = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59);
              const startAt = new Date(notice.start_at);
              const endAt = new Date(notice.end_at);
              return startAt <= end && endAt >= start;
            })
            .sort((a, b) => new Date(a.start_at).getTime() - new Date(b.start_at).getTime());
          const isCurrentMonth = day.getMonth() === monthCursor.getMonth();
          const isSelected = key === dateKey(selectedDate);

          return (
            <S.DayCell
              key={key}
              $isCurrentMonth={isCurrentMonth}
              $isSelected={isSelected}
              onClick={() => setSelectedDate(day)}
              type="button"
            >
              <S.DateNumber>{day.getDate()}</S.DateNumber>
              <S.DotRow>
                {dayNotices.slice(0, 3).map((notice) => (
                  <S.Dot key={notice.id} $category={notice.category} />
                ))}
              </S.DotRow>
            </S.DayCell>
          );
        })}
      </S.Grid>

      <S.ListSection>
        <S.SectionTitle>
          {formatKstDate(selectedDate)} 공지
        </S.SectionTitle>

        {isLoading ? (
          <S.EmptyText>공지 불러오는 중...</S.EmptyText>
        ) : selectedDayNotices.length === 0 ? (
          <S.EmptyText>해당 날짜의 공지가 없습니다.</S.EmptyText>
        ) : (
          <S.List>
            {selectedDayNotices.map((notice) => (
              <S.Item key={notice.id}>
                <S.Tag>{categoryLabel[notice.category]}</S.Tag>
                <S.ItemTitle>{notice.title}</S.ItemTitle>
                <S.ItemDesc>{notice.content}</S.ItemDesc>
                <S.ItemMeta>
                  {formatKstTime(notice.start_at)}
                  {' - '}
                  {formatKstTime(notice.end_at)}
                  {notice.location ? ` · ${notice.location}` : ''}
                </S.ItemMeta>
              </S.Item>
            ))}
          </S.List>
        )}
      </S.ListSection>
    </S.Container>
  );
}

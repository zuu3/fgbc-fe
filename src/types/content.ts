export type Bulletin = {
  id: string;
  title: string;
  week_start_date: string;
  service_type: string | null;
  file_path: string;
  published_at: string | null;
  is_latest: boolean;
};

export type NoticeCategory = 'worship' | 'event' | 'group' | 'volunteer' | 'urgent';

export type Notice = {
  id: string;
  title: string;
  content: string;
  category: NoticeCategory;
  start_at: string;
  end_at: string;
  is_all_day: boolean;
  is_pinned: boolean;
  location: string | null;
  attachment_path: string | null;
  status: 'draft' | 'scheduled' | 'published';
  published_at: string | null;
};

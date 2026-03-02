export type Bulletin = {
  id: string;
  title: string;
  week_start_date: string;
  service_type: string | null;
  file_path: string;
  published_at: string | null;
  is_latest: boolean;
};

export type MonthlySummary = {
  id: string;
  month_key: string;
  content: string;
  published_at: string | null;
};

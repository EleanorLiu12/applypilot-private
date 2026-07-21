export type JobLead = {
  date_found: string;
  company: string;
  job_title: string;
  role_family: string;
  level: string;
  location: string;
  remote_policy: string;
  source: string;
  job_url: string;
  posted_date: string;
  priority: string;
  status: string;
  resume_variant: string;
  skip_reason: string;
  blocker: string;
  next_action: string;
  notes: string;
  archived?: string;
};

export type ApplicationLogEntry = {
  attempt_date: string;
  company: string;
  job_title: string;
  job_url: string;
  platform: string;
  status: string;
  submission_evidence: string;
  resume_used: string;
  answers_used: string;
  confirmation_url: string;
  confirmation_text: string;
  notes: string;
};

export type AppliedArchiveEntry = {
  archived_at: string;
  company: string;
  job_title: string;
  job_url: string;
  applied_at: string;
  source: string;
  archive_reason: string;
  notes: string;
};

export type DailyDashboardRow = {
  date: string;
  found_count: string;
  submitted_count: string;
  skipped_count: string;
  blocked_count: string;
  needs_user_count: string;
  pending_count: string;
  top_sources: string;
  summary: string;
  user_actions_needed: string;
};

export type Filters = {
  search: string;
  status: string;
  priority: string;
  roleFamily: string;
  level: string;
  source: string;
  location: string;
  remotePolicy: string;
  applied: string;
  dateFrom: string;
  dateTo: string;
};

export type SortKey = 'priority' | 'date_found' | 'posted_date' | 'company' | 'status';

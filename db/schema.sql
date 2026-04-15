-- 抓周 MBTI 報告網站：MVP schema

create table if not exists props (
  id uuid primary key default gen_random_uuid(),
  round_type text not null check (round_type in ('interest', 'ability', 'personality')),
  name_zh text not null,
  meaning text not null,
  mbti_axis text not null check (mbti_axis in ('EI', 'SN', 'TF', 'JP')),
  axis_value char(1) not null check (axis_value in ('E','I','S','N','T','F','J','P')),
  weight numeric(4,2) not null default 1.00,
  active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists mbti_profiles (
  mbti_type char(4) primary key,
  title text not null,
  summary text not null,
  parenting_tips jsonb not null default '[]'::jsonb,
  development_paths jsonb not null default '[]'::jsonb,
  cover_theme text,
  updated_at timestamptz not null default now(),
  check (mbti_type ~ '^[E|I][S|N][T|F][J|P]$')
);

create table if not exists report_templates (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  is_brand boolean not null default false,
  html_template text not null,
  css_template text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists report_requests (
  id uuid primary key default gen_random_uuid(),
  baby_name text not null,
  baby_photo_url text,
  report_date date not null,
  brand_name text,
  parent_email text,
  round1_prop_id uuid not null references props(id),
  round2_prop_id uuid not null references props(id),
  round3_prop_id uuid not null references props(id),
  mbti_result char(4),
  report_pdf_url text,
  report_image_url text,
  payment_status text not null default 'unpaid' check (payment_status in ('unpaid','paid','refunded')),
  created_at timestamptz not null default now()
);

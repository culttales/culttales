-- Enquiries sent from the site's contact forms.
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  wedding text,
  location text,
  guests text,
  rituals text,
  scope text,
  message text not null,
  emailed boolean not null default false
);

-- Only the site's server writes here, with the secret key, which bypasses RLS.
-- No policies, so the public (anon) key can neither read nor write.
alter table public.enquiries enable row level security;

create index enquiries_created_at_idx on public.enquiries (created_at desc);

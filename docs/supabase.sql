-- Tranches : à coller une fois dans Supabase → SQL Editor → Run.
-- Une ligne par compte : la collection (livres, lettrines, lecture) en JSON.
create table if not exists public.tranches (
  user_id uuid primary key references auth.users on delete cascade,
  data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
alter table public.tranches enable row level security;
create policy "chacun sa bibliothèque" on public.tranches
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

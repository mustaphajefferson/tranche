-- Tranches : à coller dans Supabase → SQL Editor → Run. Peut être relancé sans risque.
-- Une ligne par compte : la collection (livres, lettrines, lecture) en JSON.
create table if not exists public.tranches (
  user_id uuid primary key references auth.users on delete cascade,
  data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
alter table public.tranches enable row level security;
grant select, insert, update, delete on public.tranches to authenticated;
drop policy if exists "chacun sa bibliothèque" on public.tranches;
create policy "chacun sa bibliothèque" on public.tranches
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

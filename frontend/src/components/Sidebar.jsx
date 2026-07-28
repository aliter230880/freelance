import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, LayoutDashboard, Briefcase, TrendingUp, User, PenLine, Activity, BookOpen, Inbox, Archive, Plus } from 'lucide-react';
import { CATEGORIES, SYSTEM_CATEGORIES } from '../mock';
import { useNotes } from '../context/NotesContext';

const ICONS = { Briefcase, TrendingUp, User, PenLine, Activity, BookOpen, Inbox, Archive };

export default function Sidebar({ onNewNote }) {
  const { notes } = useNotes();
  const countBy = (id) => notes.filter((n) => n.category === id).length;

  const linkClass = ({ isActive }) =>
    `group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors duration-200 ${
      isActive
        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03] border border-transparent'
    }`;

  const IconRow = ({ Icon, label, count, activeColor }) => (
    <>
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4" style={{ color: activeColor }} />
        <span className="font-medium tracking-tight">{label}</span>
      </span>
      <span className="text-xs text-zinc-500 group-hover:text-zinc-300">{count}</span>
    </>
  );

  return (
    <aside className="w-[260px] shrink-0 border-r border-white/[0.06] bg-black/40 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-lg shadow-emerald-500/20">
            <Brain className="h-4 w-4 text-black" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-tight">Second Brain</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">personal os</div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-3">
        <button
          onClick={onNewNote}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-medium py-2.5 text-sm transition-colors"
        >
          <Plus className="h-4 w-4" />
          Новая заметка
        </button>
      </div>

      <nav className="px-3 py-2 space-y-1 overflow-y-auto flex-1">
        <NavLink to="/" end className={linkClass}>
          <span className="flex items-center gap-3">
            <LayoutDashboard className="h-4 w-4 text-emerald-400" />
            <span className="font-medium tracking-tight">Дашборд</span>
          </span>
          <span className="text-xs text-zinc-500">{notes.length}</span>
        </NavLink>

        <div className="pt-4 pb-1 px-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-600 font-semibold">Сферы жизни</div>
        </div>

        {CATEGORIES.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <NavLink key={c.id} to={`/category/${c.id}`} className={linkClass}>
              <IconRow Icon={Icon} label={c.label} count={countBy(c.id)} activeColor={c.color} />
            </NavLink>
          );
        })}

        <div className="pt-4 pb-1 px-3">
          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-600 font-semibold">Система</div>
        </div>

        {SYSTEM_CATEGORIES.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <NavLink key={c.id} to={`/category/${c.id}`} className={linkClass}>
              <IconRow Icon={Icon} label={c.label} count={countBy(c.id)} activeColor={c.color} />
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/[0.06]">
        <div className="rounded-xl p-3 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/15">
          <div className="text-xs text-emerald-300 font-medium">Синхронизация активна</div>
          <div className="text-[11px] text-zinc-400 mt-0.5">Локальное хранилище</div>
        </div>
      </div>
    </aside>
  );
}

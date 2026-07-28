import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Plus, Trash2, Archive as ArchiveIcon } from 'lucide-react';
import { ALL_CATEGORIES } from '../mock';
import { useNotes } from '../context/NotesContext';

export default function CategoryPage({ onNewNote, onOpenNote }) {
  const { id } = useParams();
  const { notes, deleteNote, archiveNote } = useNotes();
  const [query, setQuery] = useState('');

  const category = ALL_CATEGORIES.find((c) => c.id === id);

  const filtered = useMemo(() => {
    return notes
      .filter((n) => n.category === id)
      .filter((n) =>
        query.trim()
          ? (n.title + ' ' + n.content).toLowerCase().includes(query.toLowerCase())
          : true
      )
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [notes, id, query]);

  if (!category) {
    return (
      <div className="text-white">
        <Link to="/" className="text-emerald-400">← На дашборд</Link>
        <div className="mt-4">Категория не найдена</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-300 transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          На дашборд
        </Link>
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs" style={{ borderColor: `${category.color}30`, background: `${category.color}10`, color: category.color }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: category.color }} />
              Сфера
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-white tracking-tight leading-none">
              {category.label}
            </h1>
            <div className="mt-2 text-sm text-zinc-500">{filtered.length} записей в этой сфере</div>
          </div>
          <button
            onClick={() => onNewNote(category.id)}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2.5 text-sm transition-colors self-start"
          >
            <Plus className="h-4 w-4" />
            Добавить заметку
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
        <Search className="h-4 w-4 text-zinc-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по заметкам…"
          className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.length === 0 && (
          <div className="md:col-span-2 rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01] p-10 text-center">
            <div className="text-white font-medium">Пусто</div>
            <div className="text-sm text-zinc-500 mt-1">Создай первую заметку в этой сфере</div>
          </div>
        )}
        {filtered.map((n) => (
          <div
            key={n.id}
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-emerald-500/30 transition-colors relative"
          >
            <button onClick={() => onOpenNote(n)} className="text-left w-full">
              <div className="flex items-start justify-between gap-3">
                <div className="text-white font-semibold tracking-tight leading-tight">{n.title}</div>
                <span className="h-2 w-2 rounded-full mt-1.5 shrink-0" style={{ background: category.color }} />
              </div>
              <div className="mt-2 text-sm text-zinc-400 line-clamp-3 leading-relaxed">{n.content}</div>
              <div className="mt-4 text-[11px] text-zinc-600 tabular-nums">
                {new Date(n.updatedAt).toLocaleString('ru-RU')}
              </div>
            </button>
            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {n.category !== 'archive' && (
                <button
                  onClick={(e) => { e.stopPropagation(); archiveNote(n.id); }}
                  className="h-7 w-7 rounded-lg bg-black/40 hover:bg-white/[0.06] text-zinc-400 hover:text-amber-300 grid place-items-center"
                  title="Архивировать"
                >
                  <ArchiveIcon className="h-3.5 w-3.5" />
                </button>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); if (confirm('Удалить заметку?')) deleteNote(n.id); }}
                className="h-7 w-7 rounded-lg bg-black/40 hover:bg-white/[0.06] text-zinc-400 hover:text-rose-300 grid place-items-center"
                title="Удалить"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layers, Inbox as InboxIcon, Archive as ArchiveIcon, Sparkles, ArrowUpRight, Clock, Send, Loader2 } from 'lucide-react';
import { CATEGORIES, SYSTEM_CATEGORIES, AI_MOCK_RESPONSES } from '../mock';
import { useNotes } from '../context/NotesContext';

const dateStr = () =>
  new Date().toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

const StatCard = ({ icon: Icon, label, value, accent, glow }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/10 transition-colors group">
    <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity ${glow}`}></div>
    <div className="relative flex items-start justify-between">
      <div>
        <div className="text-[11px] uppercase tracking-[0.14em] text-zinc-500 font-medium">{label}</div>
        <div className="mt-2 text-4xl font-semibold text-white tracking-tight">{value}</div>
      </div>
      <div className={`h-10 w-10 rounded-xl grid place-items-center ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

const SphereBar = ({ label, count, max, color }) => {
  const pct = max === 0 ? 0 : Math.min(100, (count / max) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="text-zinc-300 font-medium">{label}</span>
        <span className="text-zinc-500 tabular-nums">{count}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
          }}
        />
      </div>
    </div>
  );
};

export default function Dashboard({ onOpenNote }) {
  const { notes } = useNotes();
  const [aiInput, setAiInput] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const stats = useMemo(() => {
    const inbox = notes.filter((n) => n.category === 'inbox').length;
    const archive = notes.filter((n) => n.category === 'archive').length;
    const active = CATEGORIES.filter((c) => notes.some((n) => n.category === c.id)).length;
    return { total: notes.length, active, inbox, archive };
  }, [notes]);

  const sphereCounts = CATEGORIES.map((c) => ({
    ...c,
    count: notes.filter((n) => n.category === c.id).length,
  }));
  const maxCount = Math.max(1, ...sphereCounts.map((s) => s.count));

  const recent = [...notes]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 5);

  const handleAsk = (e) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    setAiLoading(true);
    setAiAnswer('');
    setTimeout(() => {
      const idx = Math.floor(Math.random() * AI_MOCK_RESPONSES.length);
      setAiAnswer(AI_MOCK_RESPONSES[idx]);
      setAiLoading(false);
    }, 900);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Командный центр
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.02]">
            Take control of<br />
            <span className="text-emerald-400">your knowledge</span>
          </h1>
          <p className="mt-4 text-zinc-400 max-w-lg leading-relaxed">
            Все направления твоей жизни одним взглядом. Заметки, идеи и цели — в одной чистой системе с интеллектуальным поиском.
          </p>
        </div>
        <div className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs text-zinc-400 self-start">
          {dateStr()}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={FileText} label="Всего заметок" value={stats.total} accent="bg-emerald-500/15 text-emerald-300" glow="bg-emerald-500" />
        <StatCard icon={Layers} label="Активных сфер" value={stats.active} accent="bg-cyan-500/15 text-cyan-300" glow="bg-cyan-500" />
        <StatCard icon={InboxIcon} label="Во входящих" value={stats.inbox} accent="bg-amber-500/15 text-amber-300" glow="bg-amber-500" />
        <StatCard icon={ArchiveIcon} label="В архиве" value={stats.archive} accent="bg-zinc-500/15 text-zinc-300" glow="bg-zinc-500" />
      </div>

      {/* Spheres + AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.14em] text-zinc-500 font-medium">Overview</div>
              <div className="text-lg font-semibold text-white mt-1">Заполненность сфер</div>
            </div>
            <div className="flex gap-1 text-xs">
              {['Overview','Wallet','Reports'].map((t, i) => (
                <span key={t} className={`px-3 py-1.5 rounded-full ${i===0 ? 'bg-white/[0.06] text-white' : 'text-zinc-500'}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {sphereCounts.map((s) => (
              <SphereBar key={s.id} label={s.label} count={s.count} max={maxCount} color={s.color} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-transparent p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 text-emerald-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.14em] font-medium">AI ассистент</span>
            </div>
            <div className="mt-2 text-lg font-semibold text-white">Спроси второй мозг</div>
            <p className="text-xs text-zinc-400 mt-1">Краткий анализ твоей базы знаний.</p>

            <form onSubmit={handleAsk} className="mt-4">
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-black/40 pl-3.5 pr-1 py-1">
                <input
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Что в приоритете?"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 py-2 focus:outline-none"
                />
                <button type="submit" disabled={aiLoading} className="h-8 w-8 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black grid place-items-center disabled:opacity-60">
                  {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
            </form>
            <div className="mt-4 min-h-[80px] text-sm text-zinc-300 leading-relaxed">
              {aiLoading && <span className="text-zinc-500">Анализирую базу…</span>}
              {!aiLoading && aiAnswer && aiAnswer}
              {!aiLoading && !aiAnswer && <span className="text-zinc-500">Жду вопрос…</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Recent notes */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-zinc-400" />
            <span className="text-lg font-semibold text-white">Последние заметки</span>
          </div>
          <span className="text-xs text-zinc-500">{recent.length} из {notes.length}</span>
        </div>
        <div className="divide-y divide-white/[0.05]">
          {recent.map((n) => {
            const cat = [...CATEGORIES, ...SYSTEM_CATEGORIES].find((c) => c.id === n.category);
            return (
              <button
                key={n.id}
                onClick={() => onOpenNote(n)}
                className="w-full text-left py-4 flex items-center justify-between gap-4 group hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: cat?.color || '#10b981' }} />
                    <span className="text-white font-medium tracking-tight truncate">{n.title}</span>
                  </div>
                  <div className="mt-1 text-sm text-zinc-500 truncate pl-3.5">{n.content}</div>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium" style={{ background: `${cat?.color || '#10b981'}18`, color: cat?.color || '#10b981' }}>
                  {cat?.label || n.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sphere quick access */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-zinc-500 font-medium">Spheres</div>
            <div className="text-lg font-semibold text-white mt-1">Перейти в сферу</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((c) => {
            const cnt = notes.filter((n) => n.category === c.id).length;
            return (
              <Link
                key={c.id}
                to={`/category/${c.id}`}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all relative overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: c.color }} />
                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="text-white font-medium tracking-tight">{c.label}</div>
                    <div className="mt-1 text-xs text-zinc-500">заметок: {cnt}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

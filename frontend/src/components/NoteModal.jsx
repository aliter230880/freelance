import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { X, Save, Trash2 } from 'lucide-react';
import { ALL_CATEGORIES } from '../mock';
import { useNotes } from '../context/NotesContext';

export default function NoteModal({ open, onOpenChange, note, defaultCategory }) {
  const { addNote, updateNote, deleteNote } = useNotes();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('inbox');

  useEffect(() => {
    if (open) {
      if (note) {
        setTitle(note.title);
        setContent(note.content);
        setCategory(note.category);
      } else {
        setTitle('');
        setContent('');
        setCategory(defaultCategory || 'inbox');
      }
    }
  }, [open, note, defaultCategory]);

  const handleSave = () => {
    if (!title.trim() && !content.trim()) return;
    if (note) {
      updateNote(note.id, { title: title.trim() || 'Без названия', content, category });
    } else {
      addNote({ title: title.trim() || 'Без названия', content, category });
    }
    onOpenChange(false);
  };

  const handleDelete = () => {
    if (note && confirm('Удалить заметку?')) {
      deleteNote(note.id);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-950 border-white/[0.08] text-white max-w-2xl p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-5 pb-3 border-b border-white/[0.06]">
          <DialogTitle className="text-white text-sm uppercase tracking-[0.14em] text-zinc-500 font-medium">
            {note ? 'Редактировать заметку' : 'Новая заметка'}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название заметки"
            className="w-full bg-transparent text-2xl font-semibold tracking-tight text-white placeholder:text-zinc-600 focus:outline-none"
            autoFocus
          />

          <div className="flex items-center gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[220px] bg-white/[0.03] border-white/[0.08] text-white h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-zinc-950 border-white/[0.08] text-white">
                {ALL_CATEGORIES.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                      {c.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {note && (
              <div className="text-xs text-zinc-500">
                Обновлено: {new Date(note.updatedAt).toLocaleString('ru-RU')}
              </div>
            )}
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Начни писать…"
            rows={10}
            className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/40 resize-none leading-relaxed"
          />
        </div>

        <div className="flex items-center justify-between gap-2 px-6 py-4 border-t border-white/[0.06] bg-black/40">
          <div>
            {note && (
              <button
                onClick={handleDelete}
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-rose-400 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Удалить
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <X className="h-4 w-4" /> Отмена
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium text-sm transition-colors"
            >
              <Save className="h-4 w-4" /> Сохранить
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

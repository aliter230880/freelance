import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { INITIAL_NOTES } from '../mock';

const NotesContext = createContext(null);
const STORAGE_KEY = 'sb_notes_v1';

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return INITIAL_NOTES;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      // ignore
    }
  }, [notes]);

  const addNote = useCallback((data) => {
    const now = new Date().toISOString();
    const newNote = {
      id: crypto.randomUUID(),
      title: data.title || 'Без названия',
      content: data.content || '',
      category: data.category || 'inbox',
      createdAt: now,
      updatedAt: now,
    };
    setNotes((prev) => [newNote, ...prev]);
    return newNote;
  }, []);

  const updateNote = useCallback((id, data) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, ...data, updatedAt: new Date().toISOString() } : n
      )
    );
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const archiveNote = useCallback((id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, category: 'archive', updatedAt: new Date().toISOString() } : n
      )
    );
  }, []);

  const resetNotes = useCallback(() => {
    setNotes(INITIAL_NOTES);
  }, []);

  const value = { notes, addNote, updateNote, deleteNote, archiveNote, resetNotes };
  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error('useNotes must be used within NotesProvider');
  return ctx;
}

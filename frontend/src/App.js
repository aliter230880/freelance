import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CategoryPage from './components/CategoryPage';
import NoteModal from './components/NoteModal';
import ZohoBooksPage from './components/ZohoBooksPage';
import VfsVisaBotPage from './components/VfsVisaBotPage';

function Shell() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [defaultCategory, setDefaultCategory] = useState('inbox');

  const openNew = (cat) => {
    setEditingNote(null);
    setDefaultCategory(typeof cat === 'string' ? cat : 'inbox');
    setModalOpen(true);
  };
  const openEdit = (n) => {
    setEditingNote(n);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex relative overflow-hidden">
      {/* ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] h-[520px] w-[520px] rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="absolute top-[30%] right-[-8%] h-[420px] w-[420px] rounded-full bg-emerald-400/[0.05] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <Sidebar onNewNote={() => openNew()} />

      <main className="flex-1 min-w-0">
        {/* Top nav bar */}
        <div className="sticky top-0 z-30 backdrop-blur-xl bg-[#050505]/70 border-b border-white/[0.06]">
          <div className="px-8 h-[64px] flex items-center justify-between">
            <div className="flex items-center gap-8 text-sm text-zinc-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how" className="hover:text-white transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openNew()}
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium px-4 py-2 transition-colors"
              >
                Get Started
                <span className="h-5 w-5 rounded-full bg-black/10 grid place-items-center text-black group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 py-8 max-w-[1240px]">
          <Routes>
            <Route path="/" element={<Dashboard onOpenNote={openEdit} />} />
            <Route path="/category/:id" element={<CategoryPage onNewNote={openNew} onOpenNote={openEdit} />} />
          </Routes>
        </div>
      </main>

      <NoteModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        note={editingNote}
        defaultCategory={defaultCategory}
      />
    </div>
  );
}

function App() {
  return (
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/projects/zoho-books" element={<ZohoBooksPage />} />
          <Route path="/projects/vfs-visa-bot" element={<VfsVisaBotPage />} />
          <Route path="/*" element={<Shell />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;

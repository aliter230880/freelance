import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import BlockchainIdProject from './pages/BlockchainIdProject'
import ZohoBooksProject from './pages/ZohoBooksProject'
import VfsVisaBotProject from './pages/VfsVisaBotProject'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/blockchain-id" element={<BlockchainIdProject />} />
        <Route path="/projects/zoho-books" element={<ZohoBooksProject />} />
        <Route path="/projects/vfs-visa-bot" element={<VfsVisaBotProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import './styles.css'; // CSS Tailwind com customizações

export default function App() {
  return (
    <div className="min-h-screen bg-neve text-cafe">
      <Router>
        {/* Header fixo para todas as páginas */}
        <header className="bg-neve text-cafe shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
            <Link to="/" className="text-4xl font-extrabold">
              Meu Lugar Aconchegante
            </Link>
            <nav className="mt-4 md:mt-0 space-x-6 text-lg font-medium">
              <Link
                to="/"
                className="hover:text-cafe transition-colors duration-300"
                aria-current={window.location.pathname === '/' ? 'page' : undefined}
              >
                Início
              </Link>
              <Link
                to="/post/1"
                className="hover:text-cafe transition-colors duration-300"
                aria-current={window.location.pathname.startsWith('/post') ? 'page' : undefined}
              >
                Post Exemplo
              </Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo das rotas */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

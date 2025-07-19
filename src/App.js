import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PostPage from './pages/PostPage';
import Footer from './components/Footer';
import './index.css';
import { Link } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Como o basename é "/meu-lugar-aconchegante", location.pathname não inclui o basename
  // Oculta cabeçalho para todas as rotas que começam com "/post/"
  const hideHeader = location.pathname.startsWith('/post/');

  return (
    <div className="min-h-screen bg-white text-slick font-serif">
      {!hideHeader && (
        <header className="bg-white text-slick shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
            <Link to="/" className="text-3xl font-architects text-black leading-tight">
              Meu<br />
              Lugar<br />
              Aconchegante
            </Link>
            <nav className="mt-4 md:mt-0 flex flex-wrap gap-6 text-lg-plus font-medium">
              <Link to="/" className="hover:text-slick transition-colors duration-300">Início</Link>
              <Link to="/galeria" className="hover:text-slick transition-colors duration-300">Galeria</Link>
              <Link to="/sobre" className="hover:text-slick transition-colors duration-300">Sobre</Link>
              <Link to="/contato" className="hover:text-slick transition-colors duration-300">Contato</Link>
            </nav>
          </div>
        </header>
      )}

      <main className="container mx-auto px-4 py-8 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/meu-lugar-aconchegante">
      <Layout />
    </Router>
  );
}

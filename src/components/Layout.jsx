import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PostPage from './pages/PostPage';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

function Layout() {
  const location = useLocation();

  const hideHeader = location.pathname.startsWith('/post/');

  return (
    <div className="min-h-screen bg-white text-slick font-serif">
      {!hideHeader && <Header />}

      <main className="container mx-auto px-4 sm:px-6 py-8 bg-white">
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
    <Router>
      <Layout />
    </Router>
  );
}

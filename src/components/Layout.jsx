import { useLocation, Routes } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  const location = useLocation();

  // Regex para detectar rotas do tipo "/post/123" (post seguido só de números)
  const isPostNumberRoute = /^\/post\/\d+$/.test(location.pathname);

  return (
    <div className="min-h-screen bg-white text-slick font-serif">
      <header
        className={`bg-white text-slick shadow-md ${
          isPostNumberRoute ? '' : 'sticky top-0 z-50'
        }`}
      >
        {/* seu conteúdo do header aqui */}
      </header>

      <main className="container mx-auto px-4 py-8 bg-white">
        <Routes>
          {/* suas rotas aqui */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;

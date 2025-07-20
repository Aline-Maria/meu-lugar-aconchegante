function Layout() {
  return (
    <div className="min-h-screen bg-white text-slick font-serif">
      <header className="bg-white text-slick shadow-md">
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

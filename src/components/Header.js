import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Função para destacar o link ativo
  const isActive = (path) => location.pathname === path;

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Meu Lugar Aconchegante</h1>
      <nav style={styles.nav}>
        <Link to="/" style={{ ...styles.link, ...(isActive('/') ? styles.activeLink : {}) }}>
          Início
        </Link>
        <Link to="/posts" style={{ ...styles.link, ...(isActive('/posts') ? styles.activeLink : {}) }}>
          Posts
        </Link>
        <Link to="/galeria" style={{ ...styles.link, ...(isActive('/galeria') ? styles.activeLink : {}) }}>
          Galeria
        </Link>
        <Link to="/sobre" style={{ ...styles.link, ...(isActive('/sobre') ? styles.activeLink : {}) }}>
          Sobre
        </Link>
        <Link to="/contato" style={{ ...styles.link, ...(isActive('/contato') ? styles.activeLink : {}) }}>
          Contato
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#A17C4B', // marrom claro da paleta oficial
    padding: '1.5rem 3rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    margin: 0,
    color: '#F6F1E7', // off-white creme
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    fontSize: '2.5rem',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#F6F1E7',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    fontFamily: 'Georgia, serif',
    transition: 'color 0.3s ease',
  },
  activeLink: {
    borderBottom: '2px solid #F6F1E7',
    fontWeight: 'bold',
  },
};

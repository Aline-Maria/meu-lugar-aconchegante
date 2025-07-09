import React from 'react';

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Meu Lugar Aconchegante</h1>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#A17C4B',  // marrom claro da paleta oficial
    padding: '1.5rem 3rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  title: {
    margin: 0,
    color: '#F6F1E7',  // off-white creme
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    fontSize: '2.5rem',
  },
};

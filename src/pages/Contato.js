import React from 'react';

export default function Contato() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contato</h2>
      <p>Você pode me encontrar nas redes sociais ou enviar um email:</p>
      <ul>
        <li>Email: <a href="mailto:aline@email.com">aline@email.com</a></li>
        <li><a href="https://www.instagram.com/seuusuario" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}


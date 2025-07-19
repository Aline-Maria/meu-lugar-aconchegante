import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContatoForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5xsh2w9', 'template_42gia3q', form.current, 'EtU3UPioVgNjUL3AG')
      .then((result) => {
          setStatus('Mensagem enviada com sucesso! Obrigada 😊');
          form.current.reset();
      }, (error) => {
          setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-creme rounded-xl shadow-md text-cafe">
      <h2 className="text-2xl font-bold mb-6 text-center">Fale comigo</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Seu nome"
          required
          className="p-3 rounded border border-cafe focus:outline-none focus:ring-2 focus:ring-dourado"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu email"
          required
          className="p-3 rounded border border-cafe focus:outline-none focus:ring-2 focus:ring-dourado"
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          required
          rows="5"
          className="p-3 rounded border border-cafe focus:outline-none focus:ring-2 focus:ring-dourado"
        />
        <button type="submit" className="bg-cafe text-white py-3 rounded hover:bg-dourado transition-colors">
          Enviar
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}

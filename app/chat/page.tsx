'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

interface RootState {
  form: {
    idioma: string;
    nivel: string;
    nome: string;
  }
}

export default function ChatPage() {
  const [formValues, setFormValues] = useState([]);
  const { idioma, nivel, nome } = useSelector((state: RootState) => state.form);

  const buscarDados = async () => {
    const res = await fetch('/api/genkit');
    const dados = await res.json();

    setFormValues(dados);
  };

  const handleCadastrar = async () => {
    const res = await fetch('/api/genkit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idioma, nivel, nome }),
    });

    if (res.ok) {
      buscarDados();
    } else {
      const erro = await res.json();
      alert(erro.erro);
    }
  };

  return (
    <div className="py-8 px-4 max-w-md mx-auto">
      <div className="my-4">
        <Link href="/form" className="text-white hover:underline font-semibold">
          ← Voltar 
        </Link>
      </div>

      <div className='bg-amber-50 p-4 rounded-md text-black shadow-md'>
        <h2 className="text-xl font-bold mb-2">Bem-vindo ao Chat!</h2>

        <div className='flex justify-between'>
          <h4 className="text-2xl font-bold mb-2">
            {idioma === "english"? "LET'S TALK!" : "¡HABLEMOS!"}
          </h4>

          <button className='btn' onClick={()=>handleCadastrar()}>Iniciar</button>
        </div>

        <div style={{ paddingTop: '20px' }}>
          <h2>Testando API:</h2>
          <ul>
            {formValues.map((item) => (
              <li key={item.id}>idioma - {item.idioma} - nivel {item.nivel} - nome: {item.nome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
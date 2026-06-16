"use client";

import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useEffect } from 'react';

interface RootState {
  form: {
    idioma: string;
    nivel: string;
    nome: string;
  }
}

export default function ChatPage() {
  const { nome, idioma, nivel } = useSelector((state: RootState) => state.form);

  useEffect(()=>{
    console.log(nome, nivel)
  })

  return (
    <div className="py-8 px-4 max-w-md mx-auto">
      <div className="my-4">
        <Link href="/form" className="text-white hover:underline font-semibold">
          ← Voltar 
        </Link>
      </div>

      <div className='bg-amber-50 p-4 rounded-md text-black shadow-md'>
        <h2 className="text-xl font-bold mb-2">Bem-vindo ao Chat!</h2>

        <h4 className="text-2xl font-bold mb-2">
          {idioma === "english"? "LET'S TALK!" : "¡HABLEMOS!"}
        </h4>
      </div>
    </div>
  )
}
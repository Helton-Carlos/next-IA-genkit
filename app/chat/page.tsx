"use client";

import { useSelector } from 'react-redux';
import Link from 'next/link';

interface RootState {
  form: {
    idioma: string;
    nivel: string;
    nome: string;
  }
}

export default function ChatPage() {
  const { nome, idioma, nivel } = useSelector((state: RootState) => state.form);

  return (
    <div className="py-8 px-4 max-w-md mx-auto">
      <div className='bg-amber-50 p-4 rounded-md text-black shadow-md'>
        <h2 className="text-xl font-bold mb-2">Bem-vindo ao Chat!</h2>
        
        {nome ? (
          <div className="space-y-1">
            <p><strong>Usuário:</strong> {nome}</p>
            <p><strong>Idioma escolhido:</strong> {idioma}</p>
            <p><strong>Nível atual:</strong> {nivel.toUpperCase()}</p>
          </div>
        ) : (
          <p className="text-gray-500">Nenhum dado encontrado. Volte e preencha o formulário.</p>
        )}
      </div>

      <div className="mt-4">
        <Link href="/form" className="text-blue-600 hover:underline font-semibold">
          ← Voltar para o Formulário
        </Link>
      </div>
    </div>
  )
}
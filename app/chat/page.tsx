'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { streamFlow } from '@genkit-ai/next/client';
import Link from 'next/link';

interface RootState {
  form: {
    idioma: string;
    nivel: string;
    nome: string;
  }
}

export default function ChatPage() {
  const [context, setContext] = useState('');
  const [genkit, setGenkit] = useState<string>(''); 
  const value = useSelector((state: RootState) => state.form);

  const languages = value.idioma === "english" ? { 
      title: "LET'S TALK!", 
      input: "write here...",
      button: "generate"
    } 
  : { 
      title: "¡HABLEMOS!", 
      input: "Escribe aquí...",     
      button: "generar" 
  };

  async function handleGenerate() {
    try {
      setGenkit(''); 

      const chat = { context, ...value };

      const result = await streamFlow({
        url: '/api/genkit',
        input: { chat },
      });

      for await (const chunk of result.stream) {
        if (typeof chunk === 'string') {
          setGenkit((prev) => prev + chunk);
        } else if (chunk && typeof chunk === 'object') {
          if ('message' in chunk && typeof chunk.message === 'string') {
            setGenkit((prev) => prev + chunk.message);
          } 
          else if ('output' in chunk && typeof chunk.output === 'string') {
            setGenkit((prev) => prev + chunk.output);
          }
        }
      }

      const finalResult = await result.output;
      
      if (finalResult?.result?.menuItem) {
        setGenkit(finalResult.result.menuItem);
      } else if (typeof finalResult === 'string') {
        setGenkit(finalResult);
      }
    } catch(e) {
      console.error(`Erro na geração: ${e}`);
    } finally {
      setContext('')
    }
  }

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
          {languages.title}
        </h4>

        <textarea 
          value={context} 
          onChange={(e) => setContext(e.target.value)}
          placeholder={languages.input}
          className="p-2 mr-2 w-full h-45 text-black border focus:outline-none focus:outline-primary"
        />

        <button onClick={handleGenerate} className="btn uppercase mt-2 bg-blue-600 text-white p-2 rounded">
          {languages.button}
        </button>

        <div className='mt-4 p-2 bg-white rounded border'>
          <p className="whitespace-pre-wrap text-sm text-gray-800">
            {genkit || "Aguardando geração..."}
          </p>
        </div>
      </div>
    </div>
  )
}
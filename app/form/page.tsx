"use client"

import { useRouter } from "next/navigation" 
import Link from "next/link"
import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { updateField, FormState } from '@/app/store/formSlice';

export default function FormPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state.form);

  function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    
    dispatch(updateField({ 
      field: name as keyof FormState, 
      value 
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault() 
    
    router.push("/chat")
  }

  return (
   <div className="py-8 px-4 max-w-md mx-auto">
      <div className="my-4">
        <Link href="/" className="text-white hover:underline font-semibold">
          ← Voltar 
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-300 max-w-120 text-black mx-auto p-4 rounded-md">
        <h3 className="text-2xl font-bold mb-4">Responda o formulário</h3>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="idioma">Qual idioma você quer aprender?</label>
          <select 
            name="idioma" 
            id="idioma"
            value={formData.idioma}
            onChange={handleChange}
            className="bg-white p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
          >
            <option value="">Selecione uma opção</option>
            <option value="english">Inglês</option>
            <option value="spanish">Espanhol</option>
          </select>
        </div>

        <div className="flex flex-col my-4 gap-2">
          <label htmlFor="nivel">Qual é seu nível atual?</label>
          <select 
            name="nivel" 
            id="nivel"
            value={formData.nivel}
            onChange={handleChange}
            className="bg-white p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"
          >
            <option value="">Selecione uma opção</option>
            <option value="a-1">A-1</option>
            <option value="a-2">A-2</option>
            <option value="b-1">B-1</option>
            <option value="b-2">B-2</option>
            <option value="c-1">C-1</option>
            <option value="c-2">C-2</option>
          </select>
        </div>

        <div className="flex flex-col my-4 gap-2">
          <label htmlFor="nome">Escreva seu apelido ou nome:</label>
          <input 
            type="text" 
            name="nome" 
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="ex: João, Maria, outros..." 
            className="bg-white p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"  
          />
        </div>

        <button className="btn w-full" type="submit">
          Vamos lá 
        </button>
      </form>
    </div>
  )
}
"use client"

import { useRef } from "react";
import Link from 'next/link'

export default function FormPage() {
  const proximoInputRef = useRef(null); 

  function lidarComSelecao(evento: any) {
     console.log(evento)
  };

  function onSubmitHandler() {
    console.log(proximoInputRef)
  }

  return(
    <div className="py-8 px-4">
      <form onSubmit={onSubmitHandler} className="bg-gray-300 max-w-120 text-black mx-auto p-4 rounded-md">
        <h3 className="text-2xl font-bold mb-4">Responda o formulário</h3>
        <div className="flex flex-col gap-2">
          <label htmlFor="idioma">Qual idioma você quer aprender?</label>
          <select className="bg-white p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none" onChange={lidarComSelecao}>
            <option value="">Selecione uma opção</option>
            <option value="english">Inglês</option>
            <option value="spanish">Espanhol</option>
          </select>
        </div>

        <div className="flex flex-col my-4 gap-2">
          <label htmlFor="idioma">Qual é seu nivel atual?</label>
          <select className="bg-white p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none" onChange={lidarComSelecao}>
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
          <label htmlFor="idioma">Escreva seu apelido ou nome:</label>
          <input type="text" placeholder="ex: João, Maria, outros..." className="bg-white p-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none"  />
        </div>

        <div className="flex items-center gap-8 hover:underline">
          <Link href="/" className="font-bold" >
            Voltar
          </Link>

          <button className="btn" type="submit">
            Vamos lá
          </button>
        </div>
      </form>
    </div>
  )
}
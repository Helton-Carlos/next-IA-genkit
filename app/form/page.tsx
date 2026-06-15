"use client"

import { useRef } from "react";

export default function FormPage() {
  const proximoInputRef = useRef(null); 

  function lidarComSelecao(evento: any) {
     console.log(evento)
  };

  function onSubmitHandler() {
    console.log(proximoInputRef)
  }

  return(
    <>
     <form onSubmit={onSubmitHandler} className="bg-gray-300">
      <div className="flex flex-col gap-4">
        <label htmlFor="idioma">Qual idioma você quer aprender?</label>
        <select onChange={lidarComSelecao}>
          <option value="">Selecione uma opção</option>
          <option value="english">Inglês</option>
          <option value="spanish">Espanhol</option>
        </select>
      </div>
     </form>
    </>
  )
}
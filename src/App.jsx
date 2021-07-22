/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmentos from './components/Fragmentos';
import Card from './components/layout/Card';
import Res from './components/ex1/NumeroAleator'

export default _ => {

  return (
    <div>
      <h1>Fundamentos React (Arrow)</h1>
      <Fragmentos />
      <Primeiro />
      <ComParametros
        titulo='Situação do Aluno'
        aluno='Pedro' nota={6}
      />

      <Res
      min = {10}
      max= {60}
      />

      <Card/>


    </div>

  )

}
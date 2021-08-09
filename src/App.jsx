/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmentos from './components/Fragmentos';
import Card from './components/layout/Card';
import Res from './components/ex1/NumeroAleator';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAluno from './components/repetição/ListaAluno';
import ListaProduto from './components/repetição/TabelaPreco';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicação/DiretaPai';
import './App.css'

export default _ => {

  return (
    <div className='App'>
      <h1>Fundamentos React (Arrow)</h1>

      <div className='Card'>


        <Card titulo="#08 Par Ou Impar" color="#9275">
      <DiretaPai/>
        </Card>

        <Card titulo="#08 Par Ou Impar" color="#982395">

          <ParOuImpar />
          <UsuarioInfo usuario={{ nome: 'Gabriel' }} />
          <UsuarioInfo usuario={{ email: 'gabriel@hotmail.com' }} />

        </Card>

        <Card titulo="#07 Desafio Lista" color="#ff65">

          <ListaProduto />

        </Card>

        <Card titulo="#06 Lista de Repetições" color="#ff4c65">

          <ListaAluno />

        </Card>

        <Card titulo="#05 Componentes filho" color="#00c8f8">

          <Familia sobrenome='Pereira'>
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Elza" />
            <FamiliaMembro nome="Mireli" />

          </Familia>

        </Card>

        <Card titulo="#04 Desafio Aleatorio" color="#080">
          <Res min={10} max={60} />
        </Card>

        <Card titulo="#03 Fragmento">
          <Fragmentos />
        </Card>

        <Card titulo="#02 Com Parâmetros">
          <ComParametros
            titulo='Situação do Aluno'
            aluno='Pedro' nota={6}
          />
        </Card>

        <Card titulo="#01 Primeiro Componente">
          <Primeiro />
        </Card>

      </div>

    </div>

  )

}
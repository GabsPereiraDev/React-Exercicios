/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Alunos from '../../data/alunos'

export default props => {
  const AlunosJSX = Alunos.map(Aluno => {
    return <li key={Aluno.id}>
      {Aluno.id})  {Aluno.nome} - {Aluno.nota}
    </li>
  })

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {AlunosJSX}
      </ul>
    </div>
  )
}
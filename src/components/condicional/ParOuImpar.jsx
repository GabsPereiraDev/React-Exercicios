/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import  users from '../../data/numeros'

export default props =>{
 
  const NumerosJSX = users.map(n =>{

    const IsPar = n.numero % 2 === 0
  return(
    <li>Esse {n.numero} ele é {IsPar ? "Par" : "Impar"}</li>
  )})

return (
  <div> 
    <ul>{NumerosJSX}</ul>
  </div>)

}
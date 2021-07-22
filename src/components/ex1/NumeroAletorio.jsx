/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default function NumeroAleatorios(props){
  const {min, max} = props
  const random = Math.floor(Math.random() * (max - min +1) + min) 
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Minimo: {min}</strong></p>
      <p><strong>Valor Maximo: {max}</strong></p>
      <p><strong>O valor aleatório é {random}</strong></p>
    </>
  )
}
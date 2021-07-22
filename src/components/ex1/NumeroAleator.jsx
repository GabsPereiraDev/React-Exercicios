/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => {

  const {min, max} = props;

  const res = Math.floor(Math.random()* (max -min +1) + min);

  return (
    <>
    <div>
      <h2>Fazendo numeros aleatorios</h2>
      <p>Número minimo:{min}</p>
      <p>Número maximo:{max}</p>
      <p>Número aleatorio :{res}</p>
    </div>
    </>
  )



}
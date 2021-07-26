/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Produto from '../../data/Produto'


export default props =>{

const ProdutoJSX = Produto.map(
  produto => {
    return(
      <tr id ={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$: {produto.preco.toFixed(2).replace('.' , ',')}</td>
      </tr>
    )
  }
)



return(
<div>
  <table border = '1'>
    <thead>
      <td>ID</td>
      <td>PRODUTO</td>
      <td>PREÇO</td>
    </thead>
    <tbody>
    {ProdutoJSX}
    </tbody>
  </table>
</div>
  )



}
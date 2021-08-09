/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Produto from '../../data/Produto'

export default props =>{

const ProdutoJSX = Produto.map(
  produtos =>{

    return(
      <tr key={produtos.id}>
      <td>{produtos.id}</td>
      <td>{produtos.nome}</td>
      <td>R$:{produtos.preco}</td>
    </tr>
    )

  }
)


return(
  <div>
    <table border ='1'>
      <thead>
        <td>ID</td>
        <td>Produto</td>
        <td>Preço</td>
      </thead>
      <tbody>
        {ProdutoJSX}
      </tbody>
    </table>
  </div>
)

  

}
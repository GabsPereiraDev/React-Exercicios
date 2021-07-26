/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement, Children } from 'react'


export default props => {

  return (
    <div>
      {props.children.map((child, index) => {
        return (cloneElement(child, { ...props, key: index }))
      })}
    </div>
  )

}
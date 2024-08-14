import React from 'react'

export const BasicFunction = () => {
  
    const addTwoNumber = (a:number, b:number) =>{
        return a + b;
    }

  
  
    return (
    <>
    <h3>Functions</h3>
    <span>El Resultado de sumar: { addTwoNumber(2,8)} </span>
    </>
  )
}

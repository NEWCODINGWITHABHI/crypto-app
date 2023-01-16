import React from 'react'
import style from './style.module.css';

function Button({text,onClick,outline}) {
  return (
    <div className={outline?style.outlineBtnDiv:style.btnDiv} onClick={()=>onClick()} >
      {text}
    </div>
  )
}

export default Button




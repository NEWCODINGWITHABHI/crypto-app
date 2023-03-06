import React from 'react'
import style from './style.module.css';

function Button({text,outline}) {
  return (
    <div className={outline?style.outlineBtnDiv:style.btnDiv}  >
      {text}
    </div>
  )
}

export default Button




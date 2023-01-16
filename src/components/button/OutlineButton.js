import React from 'react'
import style from './style.module.css';
function OutlineButton({text,onClick}) {
  return (
    <div  className={style.outlineBtnDiv} onClick={()=>onClick()}
   >
       {text}
    </div>
  )
}

export default OutlineButton

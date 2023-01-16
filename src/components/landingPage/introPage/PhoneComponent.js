import React from 'react'
import style from './style.module.css';
import gradient from '../../../assets/gradient 1.svg';
import phone from '../../../assets/iphone 1.svg';

function PhoneComponent() {
  return (
    <div className={style.phone_box}>
    <img className={style.gradient} src={gradient} alt="gradient" />
    <img className={style.phone} src={phone} alt="phone" />
    

    
    </div>
  )
}

export default PhoneComponent

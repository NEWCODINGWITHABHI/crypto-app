import React from 'react'
import style from './style.module.css';
import gradient from '../../../assets/gradient 1.svg';
import phone from '../../../assets/iphone 1.svg';
import { motion } from "framer-motion";

function PhoneComponent() {
  return (
    <div className={style.phone_box}>
    <img className={style.gradient} src={gradient} alt="gradient" />
    <motion.img 
     
    className={style.phone} src={phone} alt="phone"
     initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration:1.5,
            repeat: Infinity,
          }}
     />
    

    
    </div>
  )
}

export default PhoneComponent

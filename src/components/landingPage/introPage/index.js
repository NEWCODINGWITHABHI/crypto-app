import React from 'react'
import style from './style.module.css';
import Button from '../../button';
// import OutlineButton from '../../button/OutlineButton';
import {motion} from 'framer-motion'
import PhoneComponent from './PhoneComponent';
function LandingIntro() {
  return (
    <div className={style.wrapper}>
       <div className={style.info}>
        <motion.h1 
         initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5}}

        className={style.bigHeading}>Track Crypto</motion.h1>
        <motion.h2 
         initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.25}}
     
        className={style.bigHeading2}> Real Time</motion.h2>
        <motion.p 
         initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5 ,delay:0.5}}
       className={style.para}
       >
        
            Track crypto through a public api in real time. Visit the dashboard to do so
        </motion.p>
        <motion.div 
         initial={{scale:0,opacity:0}}
      whileInView={{scale:1,opacity:1}}
      transition={{duration:0.5,delay:0.75}}
      
        className={style.flexBtn}>
            <Button text="Dashboard" outline={false}/>
            <Button text="Share" outline={true}/>
        </motion.div>
       </div>
       <div className={style.phone}>
        <PhoneComponent/>
       </div>
    </div>
  )
}

export default LandingIntro

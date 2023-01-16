import React from 'react'
import style from  "./style.module.css";
import {Link} from 'react-router-dom';
import Button from '../button';
// import MobileDrawer from './MobileDrawer';
import {motion} from 'framer-motion'

const Header = () => {
  return (

    < div>
     <div className={style.container}>
     <Link to='/'>
      <h1
     >CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
    </Link>  
     <div className={style.link}>
       <Link to='/'>
         <p className={style.link}>Home </p>
      </Link>
       <Link to='/compare'>
         <p className={style.link}>Compare</p>
       </Link>
       <Link to='/dashboard'>
          <Button text="dashboard"/>
       </Link> 
      </div>
       {/* <MobileDrawer/> */}
     </div>
    </div>
    
  )
}

export default Header

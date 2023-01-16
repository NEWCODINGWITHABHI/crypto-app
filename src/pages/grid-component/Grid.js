import { style } from '@mui/system'
import React from 'react';
import  './style.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { TrendingDown } from '@mui/icons-material';
import {motion} from 'framer-motion';

function Grid({coin,delay}) {
  return (
    <a href={`/coin/${coin.id}`}>
    <motion.div 
    initial={{y:60,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.33,delay:delay}}

    className={`grid_box ${coin.price_change_percentage_24h<0 && "grid_box_red"}`}>
    <div className="info_flex">
     <img src={coin.image} alt="coin image" className="coin_logo" />
     <div className="name_flex">
        <p className="coin_symbol">{coin.symbol}</p> 
        <p className="coin_name">{coin.name}</p>
     </div>
    </div>
    
    {coin.price_change_percentage_24h>0?(
     <div className="chip_flex">   
    <div className="coin_chip">
     {coin.price_change_percentage_24h.toFixed("2")+""+"%"}
     </div>
       <TrendingUpIcon className='icon'/>
     </div>
     ):(<div className="chip_flex">
      <div className="chip_red .coin_chip">
     {coin.price_change_percentage_24h.toFixed("2")+""+"%"}
     </div>
     <TrendingDown className='icon icon-red'/>
     </div>
     )
     } 
     <p className='coin-price' style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>
      ${coin.current_price.toLocaleString()}
     </p>
    
     <div className='volume-container'>
     <p className='volume-text'>
      <strong>Total Volume : </strong> ${coin.total_volume.toLocaleString()}
     </p>
     <p className='volume-text'>
    <strong>Total Market Cap :</strong>
    ${coin.market_cap.toLocaleString()}
     </p>
     </div>
    </motion.div>
  </a>
  )
}

export default Grid

import React from 'react'
import './style.css';
function CoinInfo({name,desc}) {
  return (
    <div className='grey-container' style={{padding:"1rem"}}>
      <h3 style={{margin:"0rem"}}>{name}</h3>
      <p className='desc-links' dangerouslySetInnerHTML={{__html:desc}}/>

    </div>
  )
}

export default CoinInfo

import React, { useState } from 'react'
import './style.css';
function CoinInfo({name,desc}) {
  const [descToggle,setDescToggle]=useState(false);
  
   const shortDesc=desc.slice(0,300)+"<br/><p style=`color:grey;cursor:pointer;`>Read More...</P>"
 
    const longDesc=desc+"<br/><p style=`color:grey;cursor:pointer;`>Read Less...</p>"

 
  return (
    <div className='grey-container' style={{padding:"1rem"}}>
      <h3 style={{margin:"0rem"}}>{name}</h3>
      <p className='desc-links' dangerouslySetInnerHTML={{__html:desc.length>=300?(descToggle?longDesc:shortDesc):desc}}
        onClick={()=>setDescToggle(!descToggle)}
      />
   
    </div>
  )
}

export default CoinInfo

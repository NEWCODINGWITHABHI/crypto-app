import React from 'react'
import SearchIcon  from '@mui/icons-material/Search';
import './style.css';
function Search({search,setSearch}) {
  return (
    <div className='search-box'>
    <SearchIcon className='search-icon'/>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' />
    </div>
  )
}

export default Search

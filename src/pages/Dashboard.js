import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {DASHBOARD_API_URL} from '../constants';
import Header from '../components/header';
import Tabs from './Tab';
import Search from '../components/search-box/Search';
import { ListItem } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Loading from '../components/loading/Loading';
import PaginationComponent from '../components/pagination/PaginationComponent';
const Dashboard = () => {
const [data,setData]=useState([]);
const [search,setSearch]=useState('');
const [loading,setLoading]=useState(true);
const [pageNumber,setPageNumber]=useState(1)
const [pageCoins, setPageCoins] = useState([]);

var filteredCoins = data.filter((item) => {
  if (
    item.symbol.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  ) {
    return item;
  }
});

 useEffect(()=>{
  axios.get(DASHBOARD_API_URL).then((response)=>{
  
    setData(response.data);
    setLoading(false);
    setPageCoins(response.data.slice(0,10));
   

 }).catch((error)=>{
  alert("Error while fetching data","dashboard data");
 })
 },[]);


 function topFunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
 }

 let myButton=document.getElementById("myBtn");
 window.onscroll=function(){
  scrollFunction();
 }
 function scrollFunction(){
  if(document.body.scrollTop>100||
    document.documentElement.scrollTop>100){
    myButton.style.display="flex";
    }
    else{
      myButton.style.display="none";
    }
 }
const handleChange=(event,value)=>{
   console.log(value,".....");
  setPageNumber(value);
  setPageCoins(data.slice((value-1)*10,(value-1)*10+10))
  console.log(pageCoins);
 }
  return (
    <div>
    <Header/>
    {
      loading?<Loading/>:<>
    <Search search={search} setSearch={setSearch}/>
    <Tabs data={search?filteredCoins:pageCoins}/>
    <div onClick={()=>topFunction()} id='myBtn' className='top-btn'>
      <ArrowUpwardIcon sx={{color:"var(--blue)"}}/>
    </div>
    {!search&&(
    <PaginationComponent pageNumber={pageNumber} handleChange={handleChange} />
    )}
      </>
    }
      
    </div>
  )
}

export default Dashboard

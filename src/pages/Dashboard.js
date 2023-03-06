import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import {DASHBOARD_API_URL} from '../constants';
import Header from '../components/header';
import Tabs from './Tab';
import Search from '../components/search-box/Search';
import { ListItem } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Loading from '../components/loading/Loading';
import PaginationComponent from '../components/pagination/PaginationComponent';
import Footer from '../components/footer/Footer';
const Dashboard = () => {
const [data,setData]=useState([]);
const [search,setSearch]=useState('');
const [loading,setLoading]=useState(true);
const [pageNumber,setPageNumber]=useState(1)
const [pageCoins, setPageCoins] = useState([]);

const btnRef=useRef(null);

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
  // console.log("button");
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
 }

 let myButton=document.getElementById("myBtn");
 console.log(btnRef)
 window.onscroll=function(){
  console.log("scroll")
  scrollFunction(btnRef);
 }
 function scrollFunction(btnRef){
  if(document.body.scrollTop>100||
    document.documentElement.scrollTop>100){
    btnRef.current.style.display="flex";
    }
    else{
      console.log("bbbbbbbb")
      btnRef.current.style.display="none";
    }
 }
const handleChange=(event,value)=>{
   console.log(value,".....");
  setPageNumber(value);
  setPageCoins(data.slice((value-1)*10,(value-1)*10+10))
  console.log(pageCoins);
 }
  return (
    <>
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <Tabs data={search ? filteredCoins : pageCoins} />
          <div
          ref={btnRef}
           onClick={() => topFunction()} id="myBtn" className="top-btn">
            <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
          </div>
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handleChange}
            />
          )}
        </>
      )}
    </div>
      <Footer />
      </>
  );
}

export default Dashboard

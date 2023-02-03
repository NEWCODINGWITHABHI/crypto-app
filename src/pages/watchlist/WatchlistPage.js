import React, { useEffect, useState } from 'react'
import { getDatasetAtEvent } from 'react-chartjs-2';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header';
import Loading from '../../components/loading/Loading';
import getAllCoins from '../../function/getAllCoins';
import Tabs from '../Tab';

function WatchlistPage() {
    const [watchlist,setWatchlist]=useState([]);
    const [loading, setLoading]=useState(true);
    let coins=JSON.parse(localStorage.getItem("watchlist"));

    useEffect(()=>{
       getData();
    },[]);

    const getData=async ()=>{
      
        const data=await getAllCoins();
        if(coins){

            setWatchlist(data.filter((item)=>coins.includes(item.id)));
        }
        setLoading(false);
    }
    console.log(watchlist,"watchlist",coins);

  return (
    <div>
       <div>
        <Header/>
       </div>
        {loading?<Loading/>:(<div style={{height:"90vh"}}>
            {watchlist.length==0?(<h1>No Items in Wathlist section</h1>):(<div style={{height:"90vh"}}>
            <Tabs data={watchlist} isWatchlistPage={true} />
            {console.log(watchlist,"ccccc")}
        <Footer/>
            </div>
            )}
          </div>
        )
        }
    </div>
  )
}

export default WatchlistPage

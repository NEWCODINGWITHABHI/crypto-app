import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { getDatasetAtEvent } from 'react-chartjs-2';
import {useParams} from 'react-router-dom';
import LineChart from '../../components/coin/coinChart/LineChart';
import CoinInfo from '../../components/coin/coinInfo/CoinInfo';
import Header from  '../../components/header';
import Loading from '../../components/loading/Loading';
import { getCoinData } from '../../function/getCoinData';
import { getCoinPrices } from '../../function/getCoinPrices';
import { getDaysArray } from '../../function/getDaysArray';
import List from '../list-component/List';
import { getDate } from '../../function/getDaysArray';
function CoinPage() {
   const {id}=useParams();
   const [loading,setLoading]=useState(true);
   const [days,setDays]=useState(7);
   const [coin,setCoin]=useState({});
   const today=new Date();
   const priorDate=new Date(new Date().setDate(today.getDate()-days));
   console.log(priorDate);
   const [chartData,setChartData]=useState({
    labels:[],
    datasets:[
        {
          label:"My First Dataset",
          data:[],
          fill:false,
          borderColor:"#fff",
          tension:0.1,  
        }
    ]
   })
    
    // const chartData={
    //     labels:["1","2","3","4","5","6","7"],
    //     datasets:[
    //         {
    //         label:"My first Dataset",
    //         data:[45,65,78,90,33,22],
    //         fill:false,
    //         borderColor:"#fff",
    //         tension:0.1
    //         }

    //     ]
    // }
    const options={
        plugins:{
            legend:{
                display:false,
            }
        },
        responsive:true,
        interaction:{
            mode:"index",
            intersect:false,
        }
    }
    useEffect(()=>{
       if(id){
        getData()
       }
    },[id])
    const getData=async ()=>{
        const data=await getCoinData(id);
        const prices=await getCoinPrices(id,days);
        if(data){
            setCoin({
                id:data.id,
                name:data.name,
                Symbol:data.symbol,
                image:data.image.large,
                desc:data.description.en,
                price_change_percentage_24h:data.market_data.price_change_percentage_24h,
                total_volume:data.market_data.total_volume.usd,
                current_price:data.market_data.current_price.usd,
                market_cap:data.market_data.market_cap.usd
            })
            setLoading(false);
        }
        if(prices){
            console.log(prices,"prices...")
            setChartData({
                labels:prices?.map((data)=>getDate(data[0])),
                datasets:[
                    {
                        label:"prices",
                        data:prices?.map((data)=>data[1]),
                        fill:false,
                        borderColor:"#3a80e9",
                        tension:0.1,
                        borderWidth:2,
                        pointRadius:0,


                    }
                ]
            })
        }
    }
   
    // useEffect(()=>{
      
    //     if(id){
    //         console.log(id);
            // fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then((res)=>res.json()).
            // then((response)=>{
            //     console.log(response.id,"response id..");
            //     setLoading(false);
            //     setCoin({
            //         id:response.id,
            //         name:response.name,
            //         Symbol:response.symbol,
                    // image:response.image.large,
                    // desc:response.description.en,
                    // price_change_percentage_24h:response.market_data.price_change_percentage_24h,
                    // total_volume:response.market_data.total_volume.usd,
    //                 current_price:response.market_data.current_price.usd,
    //                 market_cap:response.market_data.market_cap.usd
            
    //             })
                
    //         })
    //     }
    // },[id])
    // console.log(coin,coin.image,"coin....")
      
       
    
    

return (
    <div>
      <Header/>
    
      {loading?<Loading/>:
      <>
      <div className='grey-container'>
      <List coin={coin}/>
      </div>
      <LineChart chartData={chartData}/>
      <CoinInfo name={coin.name} desc={coin.desc}/>
      </>} 
    </div>
  )
}

export default CoinPage

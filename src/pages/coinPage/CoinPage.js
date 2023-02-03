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
import SelectDays from '../../components/coin/selectdays';
import SelectPrice from '../../components/coin/selectPrice';
import settingSingleChartData from '../../function/settingSingleChartData';
function CoinPage() {
   const {id}=useParams();
   const [loading,setLoading]=useState(true);
   const [days,setDays]=useState(7);
   const [coin,setCoin]=useState({});
   const [priceType, setPriceType] = useState("prices");
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
        setLoading(true);
        const data=await getCoinData(id);
        const prices=await getCoinPrices(id,days,priceType);
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
           
        }
        if(prices){
            console.log(prices,"priiiiiiiiii")
          settingSingleChartData(setChartData,prices,coin)
          console.log("tttttttttttttt");
          setLoading(false);
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
      
       const changeDataWithDays= async ()=>{
          setLoading(true);
          const prices=await getCoinPrices(id ,days,priceType);
          if(prices){

              settingSingleChartData(setChartData,prices,coin);
              setLoading(false);
          }
       }

       const changeDataWithPrices= async ()=>{
        setLoading(true);
        console.log(id,days,priceType,"id days price")
        const prices=await getCoinPrices(id,days,priceType);
        console.log(prices,"pppppp")
        if(prices){

            settingSingleChartData(setChartData,prices,coin);
            setLoading(false);
        }
       }

       useEffect(()=>{
        changeDataWithDays();
        changeDataWithPrices();
       },[days,priceType]);
    
    

return (
  <div>
    <Header />

    {loading || !chartData || !coin.id ? (
      <Loading />
    ) : (
      <>
        <div style={{ width: "90vw", margin: "auto" }}>
          <List coin={coin} />
        </div>

        <div className="grey-container">
          <SelectDays days={days} setDays={setDays} />
          <SelectPrice priceType={priceType} setPriceType={setPriceType} />
          <LineChart chartData={chartData} />
        </div>
        <CoinInfo name={coin.name} desc={coin.desc} />
      </>
    )}
  </div>
);
}

export default CoinPage

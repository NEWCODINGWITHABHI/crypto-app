import React, { useState } from 'react'
import { useEffect } from 'react';
import { getDatasetAtEvent } from 'react-chartjs-2';
import LineChart from '../../components/coin/coinChart/LineChart';
import CoinInfo from '../../components/coin/coinInfo/CoinInfo';
import SelectPrice from '../../components/coin/selectPrice';
import SelectCoin from '../../components/compare/SelectCoin';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header'
import Loading from '../../components/loading/Loading';
import getAllCoins from '../../function/getAllCoins';
import { getCoinData } from '../../function/getCoinData';
import { getCoinPrices } from '../../function/getCoinPrices';
import setCoinObject from '../../function/setCoinObject';
import setCompareChartData from '../../function/setCompareChartData';
import List from '../list-component/List';
function ComparePage() {
    const [allCoins,setAllCoins]=useState([]);
    const [coinId1,setCoinId1]=useState("usd-coin");
    const [coinId2,setCoinId2]=useState("tether");
    const [coinData1,setCoinData1]=useState("");
    const [coinData2,setCoinData2]=useState("");
    const [loading,setLoading]=useState(true);
    const [days,setDays]=useState(120);
    const [priceType,setPriceType]=useState("prices");
    const [chartData,setChartData]=useState({
        labels:[],
        datasets:[],
    });
     
    useEffect(()=>{
        changeDataWithCoin1Coin2();
    },[coinId1,coinId2])
    
    const changeDataWithCoin1Coin2=async ()=>{
      
        const dataOfCoin1 = await getCoinData(coinId1);
        const dataOfCoin2 = await getCoinData(coinId2);
        setCoinObject(setCoinData1, dataOfCoin1);
        setCoinObject(setCoinData2, dataOfCoin2);
        const prices1 = await getCoinPrices(coinId1, days, priceType);
        const prices2 = await getCoinPrices(coinId2, days, priceType);
     
        setCompareChartData(
            setChartData,
            prices1,
            prices2,
            coinData1,
            coinData2
            );
            setLoading(false);
        }

        useEffect(()=>{
        changeDataWithDays();
    },[days]);
    const changeDataWithDays=async ()=>{
       
        const prices1 = await getCoinPrices(coinId1, days, priceType);
        const prices2 = await getCoinPrices(coinId2, days, priceType);
        setCompareChartData(setChartData, prices1, prices2, coinData1, coinData2);
        setLoading(false);
    }

    useEffect(()=>{
        getData();
   
    },[])
    
    let getData=async ()=>{
      
        const data=await getAllCoins();
        setAllCoins(data);

        setLoading(false);
        const dataOfCoin1=await getCoinData(coinId1);
        const dataOfCoin2=await getCoinData(coinId2);
        setCoinObject(setCoinData1,dataOfCoin1);
        setCoinObject(setCoinData2,dataOfCoin2);
        const prices1=await getCoinPrices(coinId1,days,priceType);
        const prices2=await getCoinPrices(coinId2,days,priceType);
      
        setCompareChartData(setChartData,prices1,prices2,coinData1,coinData2);
        setLoading(false);
    }
    return (
      <>
        <Header />
        <div
        // style={{padding:"2rem"}}
        >
          {loading == true || !coinData1 || !coinData2 ? (
            <Loading />
          ) : (
            <>
              <div style={{ width: "90vw", margin: "auto" }}>
                <SelectCoin
                  days={days}
                  setDays={setDays}
                  allcoins={allCoins}
                  coinId1={coinId1}
                  coinId2={coinId2}
                  setCoinId1={setCoinId1}
                  setCoinId2={setCoinId2}
                />
              </div>
              <div style={{ width: "90vw", margin: "auto" }}>
                <List coin={coinData1} />
              </div>
              <div style={{ width: "90vw", margin: "auto" }}>
                <List coin={coinData2} />
              </div>
              <div style={{ padding: "2rem", width: "90vw", margin: "auto" }}>
                <SelectPrice
                  priceType={priceType}
                  setPriceType={setPriceType}
                />
                <LineChart
                  chartData={chartData}
                  multiAxis={true}
                  priceType={priceType}
                />
              </div>
              <div>
                <CoinInfo name={coinData1.name} desc={coinData1.desc} />
              </div>
              <div>
                <CoinInfo name={coinData2.name} desc={coinData2.desc} />
              </div>
              <Footer/>
            </>
          )}
        </div>
      </>
    );
}

export default ComparePage

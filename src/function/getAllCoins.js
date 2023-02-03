
import axios from 'axios';
import { DASHBOARD_API_URL } from '../constants';

const  getAllCoins=()=>{
    const coins = axios.get(
      `${DASHBOARD_API_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    ).then((response)=>{
      
       if(response.status==200){
        return response.data;
       }
    }).catch((error)=>{
          console.log("Error while fething all coins");
    })
    if(coins){
        return coins;
    }
    else{
        return ;
    }
}
export default getAllCoins;
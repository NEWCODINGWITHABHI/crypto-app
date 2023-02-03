import axios from "axios";
import { COIN_GECKO_V3 } from "../constants";

export const getCoinPrices = (id, days,priceType) => {
  const prices= axios
    .get(
      `${COIN_GECKO_V3}/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
   if (priceType == "market_caps") {
     return response.data.market_caps;
   } else if (priceType == "total_volumes") {
     return response.data.total_volumes;
   } else {
     return response.data.prices;
   }
    }).catch((error)=>{
        console.log("error while fetching prices of coin")
    })
    if (prices) {
      return prices;
    } else {
      return;
    }
}
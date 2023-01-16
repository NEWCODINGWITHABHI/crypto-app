import axios from "axios";
import { COIN_GECKO_V3 } from "../constants";

export const getCoinPrices = (id, days) => {
  const data = axios
    .get(
      `${COIN_GECKO_V3}/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
        return response.data.prices;
    }).catch((error)=>{
        console.log("error while fetching prices of coin")
    })
}
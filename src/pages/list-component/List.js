import React, { useEffect, useState } from 'react'
import './style.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { TrendingDown } from '@mui/icons-material';
import convertNumber from '../../function/convertNumber';
import {motion} from 'framer-motion';
import coinAdded from '../../function/coinAdded';

import removeFromWatchList from "../../function/removeFromWatchList";
import addToWatchList from "../../function/addToWatchList";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
function List({coin,delay,isWatchlistPage}) {
const [volume,setVolume]=useState("");
const [added,setAdded]=useState(coinAdded(coin));

function watchList(e) {
  e.preventDefault();
  if (added) {
    removeFromWatchList(coin.id);
    setAdded(false);
  } else {
    addToWatchList(coin.id);
    setAdded(true);
  }
}


useEffect(()=>{
    setVolume(convertNumber(parseInt(coin.total_volume)));
},[])

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        style={{ display: isWatchlistPage && !added && "none" }}
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.33, delay: delay }}
        className="list-row"
      >
        <td className="td-img">
          <img src={coin.image} className="coin_logo" />
        </td>

        <td className="td-name-flex">
          <div className="name_flex">
            <p className="coin_symbol name-txt">{coin.symbol}-USD</p>
            <p className="coin_name name-txt">{coin.name}</p>
          </div>
        </td>
        
        <td className="td-chip-flex">
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip_flex">
              <div className="coin_chip percentage-txt">
                {coin.price_change_percentage_24h.toFixed(2) + "" + "%"}
              </div>
              <TrendingUpIcon className="icon chip-coin" />
            </div>
          ) : (
            <div className="chip_flex">
              <div className="chip_red .coin_chip percentage-txt">
                {coin
                  ? coin.price_change_percentage_24h.toFixed(2) + "" + "%"
                  : ""}
              </div>
              <TrendingDown className="icon icon-red chip-coin" />
            </div>
          )}
        </td>

        <td>
          <p
            className="coin-price name-txt"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </p>
        </td>

        <td>
          <p className="td-mkt-cap">${coin.total_volume.toLocaleString()}</p>
        </td>

        <td className="td-mkt-cap">
          <p>${coin.market_cap.toLocaleString()}</p>
          <div className="td-vol-cap">
            <p>${volume}hiiii</p>
          </div>
        </td>

        <td className="star-icon">
       
          <IconButton
            onClick={(e) => {
              watchList(e);
            }}
          >
            {added ? (
              <StarRoundedIcon
              className='star'
               style={{ color: "red", textAlign: "right" }} />
            ) : (
              <StarBorderRoundedIcon
              className='star'
               style={{ color: "green" }} />
            )}
          </IconButton>
        </td>
      </motion.tr>
    </a>
  );
}

export default List

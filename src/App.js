
import './App.css';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CoinPage from './pages/coinPage/CoinPage';
import ComparePage from './pages/comparePage/ComparePage';
import WatchlistPage from './pages/watchlist/WatchlistPage';
import { useEffect, useState } from 'react';
import { ThemeContext } from '@emotion/react';
 import { ToastContainer } from "react-toastify";
import Footer from './components/footer/Footer';
import { DocumentScannerTwoTone } from '@mui/icons-material';

function App() {
 
  var cursorCircle;
  var cursorPointer;
  useEffect(()=>{
   
    cursorCircle = document.getElementById("cursor-circle");
    cursorPointer = document.getElementById("cursor-pointer");
   

    document.body.addEventListener("mousemove",(e)=>{
      return  (cursorCircle.style.left=e.clientX+"px",
       cursorPointer.style.left=e.clientX+"px",
       cursorCircle.style.top=e.clientY+"px",
       cursorPointer.style.top=e.clientY+"px")
    })
    document.body.addEventListener("mousedown",(e)=>{
      return (
        (cursorCircle.style.height = "3rem"),
        (cursorCircle.style.width = "3rem"),
        (cursorPointer.style.height = "0.8rem"),
        (cursorPointer.style.width = "0.8rem")
      );
    })

     document.body.addEventListener("mouseup", function (e) {
       return (
         (cursorCircle.style.height = "2rem"),
         (cursorCircle.style.width = "2rem"),
         (cursorPointer.style.height = "0.8rem"),
         (cursorPointer.style.width = "0.8rem")
        
       );
     });
  },[])
  return (
    <>
    <div className="App">
       <div id="cursor-circle"></div>
       <div id="cursor-pointer"></div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
          </Routes>
        </BrowserRouter>
    </div>
    
        </>
  );
}

export default App;

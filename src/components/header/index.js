import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import Button from "../button";
import Switch from "@mui/material/Switch";
import MobileDrawer from './MobileDrawer';
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Header = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  function changeMode() {
    toast.success("Theme changed");
    if (mode == true) {
      setLightMode();
    } else {
      setDarkMode();
    }
    setMode(!mode);
  }

  function setDarkMode() {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  function setLightMode() {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }

  return (
    <div>
      <div className={style.container}>
        <Link to="/">
          <h1 style={{ color: "white" }}>
            CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
          </h1>
        </Link>
        <div className={style.link}>
          <Switch checked={mode} onChange={changeMode} />
          <Link to="/">
            <p className={style.link}>Home </p>
          </Link>
          <Link to="/compare">
            <p className={style.link}>Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className={style.link}>Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <Button text="dashboard" />
          </Link>
        </div>
        <MobileDrawer/>
      </div>
    </div>
  );
};

export default Header;

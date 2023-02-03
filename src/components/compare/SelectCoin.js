import React from 'react'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

 const selectStyle = {
   height: "2.5rem",
   width:"10rem",
   color: "var(--white)",
   "& .MuiOutlinedInput-notchedOutline": {
     borderColor: "var(--white)",
   },
   "& .MuiSvgIcon-root": {
     color: "var(--white)",
   },
   "&:hover": {
     "&& fieldset": {
       borderColor: "#3a80e9",
     },
   },
 };
function SelectCoin({ days, setDays, allcoins, coinId1, coinId2,setCoinId1,setCoinId2 }) {
    console.log(days, setDays, allcoins, coinId1, coinId2,"select coin");
  const handleChange1= (e) => {
    setCoinId1(e.target.value);
  };
  const handleChange2= (e) => {
    setCoinId2(e.target.value);
  };

  const handleDayChange=(e)=>{
     setDays(e.target.value);
  }
  return (
    <div
    style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"1rem",padding:"1rem"}}
    >
      <p>Crypto 1</p>
      <Select
        style={{color:"aqua"}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={coinId1}
        label={coinId1}
        onChange={handleChange1}
        sx={selectStyle}
      >
        {allcoins
          .filter((coin) => coin.id != coinId1)
          .map((coin, index) => {
            return (
              <MenuItem style={{ width: "10rem" }} key={index} value={coin.id}>
                {coin.id}
              </MenuItem>
            );
          })}
      </Select>
      <p>Crypto2</p>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={coinId2}
        label="Age"
        onChange={handleChange2}
        sx={selectStyle}
      >
        {allcoins
          .filter((coin) => coin.id != coinId2)
          .map((coin, index) => {
            return <MenuItem key={index} value={coin.id} >{coin.id}</MenuItem>;
          })}
      </Select>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Age"
        onChange={handleDayChange}
        sx={selectStyle}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
      </Select>
    </div>
  );
}

export default SelectCoin

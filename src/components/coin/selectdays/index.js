import React from 'react'
import { Select,MenuItem } from '@mui/material';
function SelectDays({days,setDays}) {
    //  const [days, setDays] = React.useState(120);
     const handleChange = (event) => {
       setDays(event.target.value);
     };
  return (
    <div>
      <label htmlFor="">Price change in </label>
      <Select
        sx={{
          height: "2.5rem",
          margin:"1rem",
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
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleChange}
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

export default SelectDays

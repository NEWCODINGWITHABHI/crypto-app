import React from 'react'
import { ToggleButton,ToggleButtonGroup } from '@mui/material';
function SelectPrice({priceType,setPriceType}) {
    // const [priceType, setPriceType] = React.useState("prices");

    const handlePriceTypeChange = (event, newAlignment) => {
      setPriceType(event.target.value);
    };
  return (
    <div style={{display:"grid",placeItems:"center"}}>
      <ToggleButtonGroup
        color="primary"
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default SelectPrice

import React from 'react'

function settingSingleChartData(setChartData,prices,coin) {
   
  setChartData({
    labels: prices.map(
      (data) =>
        new Date(data[0]).getDate() + "/" + (new Date(data[0]).getMonth() + 1)
    ),
    datasets: [
      {
        label:coin?.name??"",
        data: prices.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.25,
        backgroundColor: prices ? "transparent" : "rgba(58, 128, 233,0.1)",
        borderColor: "#3a80e9",
        pointRadius: 0,
      },
    ],
  });
  
}

export default settingSingleChartData

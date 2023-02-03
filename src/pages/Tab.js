import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme,ThemeProvider } from '@mui/material';
import Grid from './grid-component/Grid';
import './tab.css'
import List from './list-component/List';

export default function Tabs({data}) {
    console.log(data,"watchlist data");
  const [value, setValue] = React.useState('grid');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
   
  const style={
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:'Inter',
    textTransform:"capaitalize"
  };

  const theme=createTheme({
    palette:{
        primary:{
            main:"#3a80e9",
        }
    }
  })
  return (
    <div >
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList variant='fullWidth' onChange={handleChange} >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          
          </TabList>
        </div>
        <TabPanel value="grid">
        <div className='grid-flex'>
        {
           data.map((item,i)=>(
            <Grid coin={item} key={i}delay={i%5*0.1}/>)
            )
          }
        </div>
        </TabPanel>
        <TabPanel value="list" sx={{padding:"0rem",margin:"0rem"}}>
          <table className='list-flex'>
             {
              data.map((item,i)=>(
                <List coin={item} delay={i%7*0.1} key={i}/>
              ))
             }
          </table>
        </TabPanel>
    
      </TabContext>
      </ThemeProvider>
    </div>
  );
}

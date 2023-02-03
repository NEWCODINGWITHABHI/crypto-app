import React from 'react'
import Header from '../components/header/index';
import LandingIntro from '../components/landingPage/introPage';

const Home = ({mode,changeMode}) => {
  return (
    <div>
      <Header changeMode={changeMode} mode={mode}/>
      <LandingIntro/>
    </div>
  )
}

export default Home

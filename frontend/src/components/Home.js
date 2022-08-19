import React,{ useEffect } from 'react';
import { Box,Typography,Stack,Container } from '@mui/material';
import Banner from './Banner';
import Middle from './Middle';
import MiddleTwo from './MiddleTwo';
import Bottom from './bottom';
import Footer from './Footer';
import Watchlist from './watchlist';
import ModalFCard from './ModalFCard';
import Navbar from './Navbar';
import { fetchbanner } from '../actions'
import { useDispatch } from 'react-redux'; 
import Featured from './Featured';

const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchbanner())
  },[])
 
  return (
    <Box display='flex' flexDirection='column' sx={{border:'0px solid red',height:'100%'}} bgcolor='black' alignContent='center' justifyContent='center'  alignItems='center'>
      <Navbar />
      <Box display='flex' sx={{width:'67%'}} alignItems='center' alignContent='center' flexDirection='column'>
        <Banner />
        <Middle />
        <MiddleTwo />
        <Featured />
        <Bottom />
        <Watchlist />
        <Footer />
      </Box>

    </Box>
  );
}

export default Home;

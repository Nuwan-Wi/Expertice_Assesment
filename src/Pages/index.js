import React from 'react';
import Container from '@mui/material/Container';
import '../index.css';
import { blue, grey, deepPurple, yellow } from '@mui/material/colors';
import bground from '../images/back-main-page.jpg';
import { color, margin } from '@mui/system';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SwipeToSlide from '../Components/ImageSlider/imageSlider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Home(props) {
    return (
        <div>
        <div style={{ 
            backgroundImage: `url(${bground})`,
            width: '100%', 
            height:'93vh',
            backgroundSize:'cover'
         }}>

        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            
            alignItems: 'flex-end',
            minHeight: '90vh',
            minWidth: '90vw',

            }}>
            <div style={{marginTop:'250px'}}></div>
            <h1>Travel Through the World</h1>
            <label>Select your best destination and best reservations.</label>
            <a className='bttn' >Lets Begun the Journey</a>
            <div className='imageSlider' style={{width:'650px',marginTop:'50px'}}>
            <SwipeToSlide/>
            </div>                      
        </Container>          
        </div>
        

        
        <h1>World Best Destinations</h1>        
        </div>
    );

}

export default Home;
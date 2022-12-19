import React from 'react';
import Container from '@mui/material/Container';
import '../index.css';
import { blue, grey, deepPurple, yellow } from '@mui/material/colors';
import bground from '../images/back-main-page.jpg';
import { color, margin } from '@mui/system';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

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
            justifyContent: 'center',
            alignItems: 'flex-end',
            minHeight: '90vh',
            minWidth: '90vw',
            }}>
            <h1>Travel Through the World</h1>
            <label>Select your best destination and best reservations.</label>
            <a className='bttn'>Lets Begun the Journey</a>
            
        </Container> 
        </div>

        
        <h1>Login</h1>
        </div>
    );
}

export default Home;
import React from 'react';
import Container from '@mui/material/Container';
import { Card, Divider, } from '@mui/material';
import { blue, grey, deepPurple, yellow } from '@mui/material/colors';
import Google from './../images/logo.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './signin.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function SignIn() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return (
        
        <div>
            <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            minWidth: '100vw',
            backgroundColor: blue[50],
            }}>
            <Card variant="outlined" sx={{
                maxWidth: '500px',
                p: 5,
                borderRadius: '7px',
                display: 'flex',
                
            }}>

            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Register" {...a11yProps(1)} />
                </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div id="frame">
                <h2>Welcome Back!</h2>
                <label id="p1">Login to Account</label>
                <div className='login-btn'>
                <button className='social-media-btn' itemType="button">Login with Google</button>
                <button className='social-media-btn'>Login with Facebook</button>
                </div>
                <p id="or">OR</p>

                <div className="E-mail">                
                <lable id="email">E-mail :</lable>
                <input id="Email"></input>                
                </div>

                <div className='line'></div>                
                
                <div className="pwd">
                <label id="password">Password :</label>
                <input id="Password"></input>                
                </div>

                <div className='line'></div>

                <button className='bttn' style={{width:'350px', marginTop: '20px', fontSize:'20px' }}>Login</button>
                <label className='p2'>Don't have an account.. <a className='Register' href="">Register</a></label>

            </div>  
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>      
      </Card>
            </Container>
        </div>
      );
}

export default SignIn;
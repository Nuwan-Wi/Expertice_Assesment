import React from 'react';
import Container from '@mui/material/Container';
import { Card, Divider, } from '@mui/material';
import { blue, grey, deepPurple, yellow } from '@mui/material/colors';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './signin.css';
import signinbg from '../images/signinbg.jpg';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

function SignIn() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  


    return (
        
        <div>
        
            <Container sx={{
            backgroundImage: `url(${signinbg})`,
            backgroundSize:'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '93vh',
            minWidth: '100vw',
            //backgroundColor: blue[50],
            }}>
        
            <Card variant="outlined" sx={{
                marginLeft:'50%',
                maxWidth: '500px',
                p: 5,
                borderRadius: '7px',
                display: 'flex',
                marginTop: '50px',
                height:'75vh',
                backgroundColor: blue[50],                
            }}>

            <Box sx={{ backgroundColor: blue[50], width: 500 }}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                    <div id="frame">
                    <h2>Welcome Back!</h2>
                    <label id="p1">Login to Account</label>
                    <div className='login-btn'>
                    <button className='social-media-btn' itemType="button">Login with Google</button>
                    <button className='social-media-btn'>Login with Facebook</button>
                    </div>
                    <p id="p1">OR</p>

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

                    <button className='Main_bttn'>Login</button>
                    <label className='p2'>Don't have an account..? <a className='Register' onClick= {()=>handleChange("index",1)}>Register</a></label>

                </div>  
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                    <div id="frame">
                    <h2>You are most Welcome!</h2>
                    <label id="p1">Register</label>
                    <div className='login-btn'>
                    <button className='social-media-btn' itemType="button">Register with Google</button>
                    <button className='social-media-btn'>Register with Facebook</button>
                    </div>
                    <p id="p1">OR</p>

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

                    <div className="pwd">
                    <label id="password">Confirm Password :</label>
                    <input id="Password"></input>                
                    </div>

                    <div className='line'></div>

                    <button className='Main_bttn'>Register</button>
                    <label className='p2'>Already have an account.. <a className='Register' onClick= {()=>handleChange("index",0)}>SignUp</a></label>

                </div>  
                </TabPanel>
                </SwipeableViews>
            </Box>      
        </Card>
        </Container>
        
        </div>
      );
}

export default SignIn;
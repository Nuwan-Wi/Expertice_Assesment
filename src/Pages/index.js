import React from 'react';
import Container from '@mui/material/Container';
import '../index.css';
import { blue, grey, deepPurple, yellow } from '@mui/material/colors';
import bground from '../images/back-main-page.png';
import { color, margin } from '@mui/system';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SwipeToSlide from '../Components/ImageSlider/imageSlider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Components/Footer/footer';
import hotel1im1 from "../images/Resorvations/Hotel_01_3.jpg";
import Sigiriya from "../images/sigiriya.jpg";
import StarRatingComponent from 'react-star-rating-component';
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../Components/Motion/motion"


function Home(props) {
    return (
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        >
        <div style={{ 
            backgroundImage: `url(${bground})`,
            backgroundAttachment: 'fixed',
            backgroundSize:'100% 100%',
            width: '100%',
         }}>

        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            
            alignItems: 'flex-end',
            minHeight: '90vh',
            minWidth: '90vw',
            }}>
            <div style={{marginTop:'30vh'}}></div>
            <motion.div variants={fadeIn("down", "tween", 0.5, 1.5)}>
            <h1>Travel Through the World</h1>
            <label>Select your best destination and best reservations.</label>
            </motion.div>
            <motion.a className='bttn' variants={fadeIn("left", "tween", 0.5, 1.5)} >Let's Begin the Journey</motion.a>
            <motion.div className='imageSlider' style={{width:'650px',marginTop:'50px'}} variants={fadeIn("up", "tween", 0.5, 1.3)}>
            <SwipeToSlide/>
            </motion.div>
                                  
        </Container>          
        </div>
        

        <div className='index-body'>
        <h1>WE ARE OFFERING THE HOTTEST OFFERS</h1>
        <p>looking for place to stay at the night.</p>
        <p> Here is the solution</p>

        
        <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between' }}>

        <motion.div className="box"  whileHover={{ scale: [null, 1.1, 1.1] }}  transition={{ duration: 0.3 }}>
        <div className='main_page_card'>
        <img src={hotel1im1} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Hotel Kandalama</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={4}
        />
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-120px'}}/>
        <div>
        <h2 style={{color:"#039d24",marginTop:'-1px'}}>3500Rs</h2>
        <p style={{fontSize:'12px',}}>Cost per day</p>
        </div>
        </div>
        </div>
        </motion.div>
        
        
        <motion.div className="box"  whileHover={{ scale: [null, 1.1, 1.1] }}  transition={{ duration: 0.3 }}>
        <div className='main_page_card'>
        <img src={hotel1im1} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Hotel Kandalama</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={4}
        />
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-120px'}}/>
        <div>
        <h2 style={{color:"#039d24",marginTop:'-1px'}}>3500Rs</h2>
        <p style={{fontSize:'12px',}}>Cost per day</p>
        </div>
        </div>
        </div>
        </motion.div>
        
        <motion.div className="box"  whileHover={{ scale: [null, 1.1, 1.1] }}  transition={{ duration: 0.3 }}>
        <div className='main_page_card'>
        <img src={hotel1im1} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Hotel Kandalama</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={4}
        />
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-120px'}}/>
        <div>
        <h2 style={{color:"#039d24",marginTop:'-1px'}}>3500Rs</h2>
        <p style={{fontSize:'12px',}}>Cost per day</p>
        </div>
        </div>
        </div>
        </motion.div>

        <motion.div className="box"  whileHover={{ scale: [null, 1.1, 1.1] }}  transition={{ duration: 0.3 }}>
        <div className='main_page_card'>
        <img src={hotel1im1} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Hotel Kandalama</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={4}
        />
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-120px'}}/>
        <div>
        <h2 style={{color:"#039d24",marginTop:'-1px'}}>3500Rs</h2>
        <p style={{fontSize:'12px',}}>Cost per day</p>
        </div>
        </div>
        </div>
        </motion.div>
        
        </div> 

        </div>
        
        <div className='index-body' >
        <h1>OUR FEATURED TOURS</h1>
        <p>looking for place to visit.</p>
        <p>There are plenty of destinations</p>

        <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between' }}>
        <div className='main_page_card'>
        <img src={Sigiriya} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Sigiriya, Dambulla</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <p style={{fontSize:"14px"}}>Rock climbing, Nature</p>
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-80px'}}/>
        <div>
        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/></a>
        <p style={{fontSize:'12px',}}>Location</p>
        </div>
        </div>
        </div>
        
        <div className='main_page_card'>
        <img src={Sigiriya} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Sigiriya, Dambulla</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <p style={{fontSize:"14px"}}>Rock climbing, Nature</p>
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-80px'}}/>
        <div>
        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/></a>
        <p style={{fontSize:'12px',}}>Location</p>
        </div>
        </div>
        </div>

        <div className='main_page_card'>
        <img src={Sigiriya} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Sigiriya, Dambulla</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <p style={{fontSize:"14px"}}>Rock climbing, Nature</p>
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-80px'}}/>
        <div>
        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/></a>
        <p style={{fontSize:'12px',}}>Location</p>
        </div>
        </div>
        </div>

        <div className='main_page_card'>
        <img src={Sigiriya} style={{width:'300px', height:'250px', borderRadius:'20px 20px 0px 0px'}}/>
        <h3>Sigiriya, Dambulla</h3>
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px'}}>
        <div>
        <p>Featured</p>
        <p style={{fontSize:"14px"}}>Rock climbing, Nature</p>
        </div>
        <div style={{width:'2px',backgroundColor:'#039d24',marginRight:'-80px'}}/>
        <div>
        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/></a>
        <p style={{fontSize:'12px',}}>Location</p>
        </div>
        </div>
        </div>
        
        </div> 

        </div>

        <div className='index-body' style={{background: `url(${bground})`,
        backgroundAttachment: 'fixed',
        backgroundSize:'100% 100%'}}>

        <div style={{float:'right',width:'400px',}}>
        <h1>Do you want to join with Us</h1>
        <p style={{marginTop:"10vh"}}>Join with the TravelWorld and be a part of our group. Be a world known aunterprenuor and besiness person.</p>
        <p>Change the look of the your business. Get the primium benifits from the</p>
        <p style={{fontSize:'24px', fontWeight:'bold'}}>TravelWorld.</p>
        <div className='join_button'>
        <a>JOIN</a>
        </div>
        </div>

        </div>

        <Footer/>      
        </motion.div>
    );

}

export default Home;
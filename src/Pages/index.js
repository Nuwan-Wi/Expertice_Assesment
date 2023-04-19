import React, { useState } from 'react';
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
import { fadeIn, slideIn, staggerContainer } from "../Components/Motion/motion";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


function Home(props) {
    const [isOpen, setIsOpen] = useState(null);

    const i = 0;
    const toggle = (i) =>{
        if (isOpen== i){
            return setIsOpen(null)
        }
        setIsOpen(i)
    }

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
            <h1>Travel Through the World</h1>
            <label>Select your best destination and best reservations.</label>
            <a className='bttn'>Let's Begin the Journey</a>
            <div className='imageSlider' style={{width:'650px',marginTop:'50px'}}>
            <SwipeToSlide/>
            </div>
                                  
        </Container>          
        </div>
        

        <div className='index-body'>
        <h1>WE ARE OFFERING THE HOTTEST OFFERS</h1>
        <p>looking for place to stay at the night.</p>
        <p>Here is the solution</p>

        
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


                <VerticalTimeline lineColor='rgb(40, 255, 32)'>
                    <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px',  }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
                    iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
                    icon={<MdLocationPin/>}
                    >
                    <motion.div  layout onClick={() => toggle(1)} className='main_page_card_mini'>
                    <motion.h3 layout="position">Lion Rock <br/> Dambulla, Sri Lanka</motion.h3>
                    {isOpen ==1  && (
                        <motion.div >
                        <div style={{display:'flex', justifyContent:'space-between', padding:'2px 5px'}}>
                        <div>
                        <p style={{fontSize:"16px"}}>Featured <br/>Rock climbing, Nature</p>
                        </div>
                        
                        <div>
                        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/><br/>Location</a>
                        </div>
                        </div>
                        <img src={Sigiriya} style={{width:'200px', paddingBottom:'2px'}}/>
                        </motion.div>
                        )}
                    </motion.div>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px',  }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
                    iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
                    icon={<MdLocationPin/>}
                    >
                    <motion.div  layout onClick={() => toggle(2)} className='main_page_card_mini'>
                    <motion.h3 layout="position">Lion Rock <br/> Dambulla, Sri Lanka</motion.h3>
                    {isOpen ==2  && (
                        <motion.div >
                        <div style={{display:'flex', justifyContent:'space-between', padding:'2px 5px'}}>
                        <div>
                        <p style={{fontSize:"16px"}}>Featured <br/>Rock climbing, Nature</p>
                        </div>
                        
                        <div>
                        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/><br/>Location</a>
                        </div>
                        </div>
                        <img src={Sigiriya} style={{width:'200px', paddingBottom:'2px'}}/>
                        </motion.div>
                        )}
                    </motion.div>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px',  }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
                    iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
                    icon={<MdLocationPin/>}
                    >
                    <motion.div  layout onClick={() => toggle(3)} className='main_page_card_mini'>
                    <motion.h3 layout="position">Lion Rock <br/> Dambulla, Sri Lanka</motion.h3>
                    {isOpen ==3  && (
                        <motion.div >
                        <div style={{display:'flex', justifyContent:'space-between', padding:'2px 5px'}}>
                        <div>
                        <p style={{fontSize:"16px"}}>Featured <br/>Rock climbing, Nature</p>
                        </div>
                        
                        <div>
                        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/><br/>Location</a>
                        </div>
                        </div>
                        <img src={Sigiriya} style={{width:'200px', paddingBottom:'2px'}}/>
                        </motion.div>
                        )}
                    </motion.div>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px',  }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
                    iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
                    icon={<MdLocationPin/>}
                    >
                    <motion.div  layout onClick={() => toggle(4)} className='main_page_card_mini'>
                    <motion.h3 layout="position">Lion Rock <br/> Dambulla, Sri Lanka</motion.h3>
                    {isOpen ==4  && (
                        <motion.div >
                        <div style={{display:'flex', justifyContent:'space-between', padding:'2px 5px'}}>
                        <div>
                        <p style={{fontSize:"16px"}}>Featured <br/>Rock climbing, Nature</p>
                        </div>
                        
                        <div>
                        <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon' style={{width:'40px',height:'30px'}}/><br/>Location</a>
                        </div>
                        </div>
                        <img src={Sigiriya} style={{width:'200px', paddingBottom:'2px'}}/>
                        </motion.div>
                        )}
                    </motion.div>

                    </VerticalTimelineElement>
                
                </VerticalTimeline>
        
         

        </div>

        <div className='index-body' style={{background: `url(${bground})`,
        backgroundAttachment: 'fixed',
        backgroundSize:'100% 100%',
        height:'80vh',
        }}>

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
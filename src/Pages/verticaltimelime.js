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
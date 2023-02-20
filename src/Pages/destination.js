import React, { useState } from 'react';
import "../Components/Card/card.css";
import Sigiriya from "../images/sigiriya.jpg";
import Footer from '../Components/Footer/footer';
import { MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function ReadMore({children, maxCharacterCount = 500}){
    const text = children;

    const [isTruncated, setIsTrancated] = useState(true);
    const resultingSring = isTruncated ? text.slice(0, maxCharacterCount):text;
    
    function toggleIsTruncated(){
        setIsTrancated(!isTruncated)
    }

    return(
        
        <p className='has-text-left'>
        {resultingSring}
        <span onClick={toggleIsTruncated} className='read-more-button'>{isTruncated ? " Read More.." : " Read Less"}</span> 
        </p>
    )
}


function Destination(props) { 
    return (
        <div>
        <div className='page-header'>
        
        <div class="Search_class" >
            <input className='Search_bar' placeholder="Search Here.."/>
            <a className='Search_bttn' onClick="#">Search</a>
        </div>

        <h1>World Best Destination</h1>
        <h3>Within Our Grasp</h3>
        </div>
        <VerticalTimeline lineColor='rgb(40, 255, 32)'>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
            iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
            icon={<MdLocationPin/>}
            >
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                {/*<div className='card-line'/>*/}
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the Northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon'/> Location</a><br/>
                <a className='navigate' href='https://www.sigiriyafortress.com/'><CgWebsite className='navigate-icon'/> Website</a>                  
                </div>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
            iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
            icon={<MdLocationPin/>}
            >
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                {/*<div className='card-line'/>*/}
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the Northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon'/> Location</a><br/>
                <a className='navigate' href='https://www.sigiriyafortress.com/'><CgWebsite className='navigate-icon'/> Website</a>                  
                </div>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
            iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
            icon={<MdLocationPin/>}
            >
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                {/*<div className='card-line'/>*/}
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the Northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon'/> Location</a><br/>
                <a className='navigate' href='https://www.sigiriyafortress.com/'><CgWebsite className='navigate-icon'/> Website</a>                  
                </div>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(40, 255, 32, 0.1)', borderRadius:'15px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(40, 255, 32,0.1)' }}
            iconStyle={{ background: 'rgb(40, 255, 32)', color: '#fff' }}
            icon={<MdLocationPin/>}
            >
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                {/*<div className='card-line'/>*/}
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the Northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                <a className='navigate' href='https://geohack.toolforge.org/geohack.php?pagename=Sigiriya&params=07_57_25_N_80_45_35_E_type:landmark'><MdLocationPin className='navigate-icon'/> Location</a><br/>
                <a className='navigate' href='https://www.sigiriyafortress.com/'><CgWebsite className='navigate-icon'/> Website</a>                  
                </div>
            </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
        <div style={{margin:'5vw'}}/>
            
        <Footer/>    
        </div>
    );
}

export default Destination;
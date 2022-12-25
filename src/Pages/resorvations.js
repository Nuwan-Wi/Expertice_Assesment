import React, { useState } from 'react';
import "../Components/Card/card.css";
import hotel1im1 from "../images/Resorvations/Hotel_01_1.jpg";
import hotel1im2 from "../images/Resorvations/Hotel_01_2.jpg";
import hotel1im3 from "../images/Resorvations/Hotel_01_3.jpg";
import Sigiriya from "../images/sigiriya.jpg";
import Footer from '../Components/Footer/footer';
import { MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function ReadMore({children, maxCharacterCount = 200}){
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





function Reservations(props) { 
    return (
        <div>
        <h1>Best Reservations Near the Destinations</h1>
        <section className='destination'>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                <a className='navigate' href='https://www.expedia.com/Kandalama-Hotels-Lake-Lodge-Boutique-Hotel-Kandalama.h15145269.Hotel-Information?chkin=2023-01-09&chkout=2023-01-10&destType=MARKET&destination=Kandalama%2C%20Central%20Province%2C%20Sri%20Lanka&pwaDialog=map&pwa_ts=1671999705289&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&regionId=3000423180&rfrr=HSR&rm1=a2&selectedRatePlan=207602463&selectedRoomType=201514856&semcid=US.UB.BING.DT-c-EN.HOTEL&semdtl=a1414798781.b11327111921299901.g1kwd-82945233146585%3Aaud-815274841.l1.e1c.m17f940325b64515ccc078608d0681eff7.r191537259bbda83c714c26a7da346f2ddfff8a06dcb696642605b703949d0c247.c1.j1142096.k1142096.d182944747498736.h1p.i1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&sort=RECOMMENDED&top_cur=USD&top_dp=249&useRewards=false&userIntent=&x_pwa=1'><MdLocationPin/> Location</a><br/>
                <a className='navigate' href='https://www.sigiriyafortress.com/'><CgWebsite/> Website</a>                  
                
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <div className='resturent-images'>
                    <img className='images' src={hotel1im2} style={{width:'70%',}}/>
                    <div className='featured-images'>
                        <img className='down-images' src={hotel1im1}/>
                        <img className='down-images' src={hotel1im3}/>
                    </div>
                </div>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>Hotel Kandalama</h3>
                <h4>Kandalama, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Located in Kandalama, Lake Lodge Boutique Hotel Kandalama is in the business district and on a river. Ancient City of Sigiriya and Nalanda Gedige are local landmarks, and the area's natural beauty can be seen at Popham's Arboretum and Dambulla Cave Temple. Take an opportunity to explore the area for outdoor excitement like mountain biking.
                </ReadMore>
                </div>
                </div>
            </div>
            
        </section>
            
        <Footer/>    
        </div>
    );
}

export default Reservations;
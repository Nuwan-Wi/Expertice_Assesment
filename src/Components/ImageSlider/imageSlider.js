import { WidthFull } from "@mui/icons-material";
import { width } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import imgS1 from '../../images/imgS1.jpg';
import imgS2 from '../../images/imgS2.jpg';
import imgS3 from '../../images/imgS3.jpg';
import imgS4 from '../../images/imgS4.jpg';
import imgS5 from '../../images/imgS5.jpg';
import imgS6 from '../../images/imgS6.jpg';
import imgS7 from '../../images/imgS7.jpg';
import imgS8 from '../../images/imgS8.jpg';
import imgS9 from '../../images/imgS9.jpg';
import '../../index.css'

export default class SwipeToSlide extends Component {
    render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
        return (
          <div>
            <Slider {...settings} style={{hight:'450px'}}>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS2})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS3})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS4})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS5})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS6})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS7})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS8})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${imgS9})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
            </Slider>
          </div>
        );
      }
}
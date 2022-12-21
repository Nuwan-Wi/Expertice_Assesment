import { WidthFull } from "@mui/icons-material";
import { width } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../images/navbarbg.jpg';
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
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
              <div>
              <div className="imagetag" style={{backgroundImage: `url(${img1})`, height:'150px', width:'200px', backgroundSize:'cover', margin:"4%",}}></div>
              </div>
            </Slider>
          </div>
        );
      }
}
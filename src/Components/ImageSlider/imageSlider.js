import React, { Component } from "react";
import Slider from "react-slick";
import imgS1 from '../../images/image-slider/imgS1.jpg';
import imgS2 from '../../images/image-slider/imgS2.jpg';
import imgS3 from '../../images/image-slider/imgS3.jpg';
import imgS4 from '../../images/image-slider/imgS4.jpg';
import imgS5 from '../../images/image-slider/imgS5.jpg';
import imgS6 from '../../images/image-slider/imgS6.jpg';
import imgS7 from '../../images/image-slider/imgS7.jpg';
import imgS8 from '../../images/image-slider/imgS8.jpg';
import imgS9 from '../../images/image-slider/imgS9.jpg';
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
              <img className="imagetag" src={imgS1}/>
              </div>
              <div>
              <img className="imagetag" src={imgS2}/>
              </div>
              <div>
              <img className="imagetag" src={imgS3}/>
              </div>
              <div>
              <img className="imagetag" src={imgS4}/>
              </div>
              <div>
              <img className="imagetag" src={imgS5}/>
              </div>
              <div>
              <img className="imagetag" src={imgS6}/>
              </div>
              <div>
              <img className="imagetag" src={imgS7}/>
              </div>
              <div>
              <img className="imagetag" src={imgS8}/>
              </div>
              <div>
              <img className="imagetag" src={imgS9}/>
              </div>
            </Slider>
          </div>
        );
      }
}
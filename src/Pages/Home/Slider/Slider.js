import React from 'react';
import slider1 from '../../../assets/img/slider2.jpg'
import slider2 from '../../../assets/img/slider3.jpg'
import slider3 from '../../../assets/img/slider4.jpg'
import slider4 from '../../../assets/img/slider1.avif'
import slider6 from '../../../assets/img/slider1.jpg'
import './slider.css'
const Slider = () => {
    return (
       <div>
        <h1 className='text-4xl font-bold text-center my-10'>Click Camera lens</h1>
         <div className="carousel w-full">
                <div id="slide1" className="carousel-item  relative w-full">
                    <img alt='' src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src={slider6} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src={slider3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='' src={slider4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
        </div>
       </div>
    );
};

export default Slider;
import React from 'react';
import Carousel from '../Carousel'
import Data from '../Data'
import DataMobile from '../Data/mobile'

// CSS
import "./style.css";

function Hero(props) {
    return (
        <div className="col-12 hero-container">
            <div style={{ backgroundImage: `linear-gradient(171.31deg, rgba(0, 0, 0, 0.63) 81.78%, rgba(255, 255, 255, 0) 95.16%), url(${props.background})` }} className="hero-background col-12"></div>
            <div className="col-12 hero">
                <div className="content-container mb-3">
                    <div className="col-xs-12 col-sm-7 col-md-6 col-lg-8 left-side text-light" data-page={props.appName}>
                        <div className="title-container">
                            <div className="mb-3 logo">
                                <img src={props.logo} alt={props.appName} />
                            </div>
                            <div className="">
                                <div className="mb-2 deskripsi">
                                    <h5>
                                        {props.deskripsi}
                                    </h5>
                                </div>
                                <div className="mb-2 title">
                                    <h1>
                                        {props.title1}&nbsp;{props.title2}
                                    </h1>
                                </div>
                            </div>
                            <div className="slogan">
                                <p>
                                    {props.slogan}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 right-side" data-page={props.appName}>
                        <div className="logo-title mt-5 mb-2">
                            <div className="d-flex justify-content-center mb-5">
                                <div className="logo d-flex justify-content-center col-3">
                                    <img src={props.logo} alt={props.appName} />
                                </div>
                                <div className="d-flex align-items-center deskripsi">
                                    <h2>
                                        <b>
                                            {props.title1} <br /> {props.title2}
                                        </b>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {props.children}
                    </div>

                </div>
                <div className="data-container mb-5">
                    <Data />
                    <DataMobile />
                    <Carousel />
                </div>
            </div>
        </div>
        
    );
}

export default Hero;
import React, {useContext} from 'react';

import Slider from 'react-slick'
import "./Shop.css"
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Sliders = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };

    return (
        <div className="container">
            <Slider {...settings}>


                 <div className="slider slider_1">

                <div className="slide">
                    <img src="https://autogrodno.by/images/stories/public7/Avtoidei-6-20.jpg" alt=""/>
                    <div className="description">
                        <h2 className="title">2012 Mercedes-Benz CLS 320</h2>
                        <p className="desc">
                            <span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span>
                        </p>
                        <div className="price">$ 32 200</div>
                    </div>
                </div>
            </div>
                <div className="slider slider_1">

                    <div className="slide">
                        <img src="https://images.wallpaperscraft.ru/image/single/bmw_m5_chernyj_vid_sboku_104943_1280x720.jpg" alt=""/>
                        <div className="description">
                            <h2 className="title">BMV M5</h2>
                            <p className="desc">
                                <span><strong>Miles: </strong>100,000</span><span><strong>Engine: </strong>3.0</span>
                            </p>
                            <div className="price">$ 75 000</div>
                        </div>
                    </div>
                </div>
                <div className="slider slider_1">

                    <div className="slide">
                        <img src="https://images.wallpaperscraft.ru/image/single/bugatti_chiron_bugatti_sportkar_129532_1280x720.jpg" alt=""/>
                        <div className="description">
                            <h2 className="title">2018 Bugatti chiron</h2>
                            <p className="desc">
                                <span><strong>Miles: </strong>21,000</span><span><strong>Engine: </strong>3.6</span>
                            </p>
                            <div className="price">$ 97 500</div>
                        </div>
                    </div>
                </div>
                <div className="slider slider_1">

                    <div className="slide">
                        <img src="https://images.wallpaperscraft.ru/image/single/lamborghini_aventador_lp_750_4_sv_108049_1280x720.jpg" alt=""/>
                        <div className="description">
                            <h2 className="title">2016 lamborghini aventador lp-750-4</h2>
                            <p className="desc">
                                <span><strong>Miles: </strong>10,000</span><span><strong>Engine: </strong>4.6</span>
                            </p>
                            <div className="price">$ 397 500</div>
                        </div>
                    </div>
                </div>
                <div className="slider slider_1">

                    <div className="slide">
                        <img src="https://images.wallpaperscraft.ru/image/single/bmw_e34_krasnyj_avto_vid_sboku_sportkar_96487_1280x720.jpg" alt=""/>
                        <div className="description">
                            <h2 className="title">2014 BMV e34</h2>
                            <p className="desc">
                                <span><strong>Miles: </strong>125,000</span><span><strong>Engine: </strong>2.6</span>
                            </p>
                            <div className="price">$ 6 200</div>
                        </div>
                    </div>
                </div>


            </Slider>

        </div>

    );
};

export default Sliders;

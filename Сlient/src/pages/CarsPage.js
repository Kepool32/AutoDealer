import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneCar} from "../http/CarApi";
import {observer} from "mobx-react-lite";

const CarsPage = () => {


    const [car,setCar]=useState({info:[]})
    const {id}=useParams()

    useEffect(()=>{
        fetchOneCar(id).then(data=>setCar(data))
    },[])



    return (
        <div id="content">
            <div className="content">

                <div className="main_wrapper">

                    <h1><strong>{car.name}</strong></h1>
                    <div className="cars_contentes">
                    <div className="car_image_wrapper car_group">
                        <div className="big_image">
                            <a href="images/placeholders/480x292.gif?v=1" className="car_group">

                                <img src={process.env.REACT_APP_API_URL+car.img} alt=""/>
                            </a>
                        </div>

                    </div>
                    <div className="car_characteristics">
                        <a href="#" className="print"></a>
                        <div className="price">{car.price}<span>EURO</span></div>
                        <div className="clear"></div>
                        <div className="features_table">

                            {car.info.map(info=>

                                <div key={info.id} className="line grey_area">
                                    <div className="left">{info.title}:</div>
                                    <div className="right">{info.description}</div>
                                </div>



                            )}


                        </div>
                    </div>
                    </div>
                    <div className="clear"></div>
                    <div className="info_box">
                        <div className="car_info">

                            <div className="clear"></div>
                        </div>

                    </div>
                    <div className="car_sidebar">

                        <div className="banner">
                            <a href="#"><img src="images/pics/banner_car.jpg" alt=""/></a>
                        </div>
                    </div>
                    <div className="clear"></div>

                </div>
            </div>
        </div>
    );
};

export default CarsPage;
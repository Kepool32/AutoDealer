import React from 'react';

import {CARS_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const CarsItem = ({cars}) => {

    const history=useNavigate()

    return (
        <li onClick={()=> history(CARS_ROUTE + "/" + cars.id)}>

                <a href="#" className="thumb"><img src={process.env.REACT_APP_API_URL+cars.img} alt=""/></a>
                <div className="catalog_desc">

                <div className="title_box">
                <h4><a href="#">{cars.name }</a></h4>
                <div className="price">{cars.price} EURO</div>
                </div>
                <div className="clear"></div>
                <div className="grey_area">
                </div>
                <a href="#" className="more markered">View details</a>
                </div>

        </li>
    );
};

export default CarsItem;
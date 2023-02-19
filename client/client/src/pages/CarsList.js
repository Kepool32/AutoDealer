import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import CarsItem from "./CarsItem";
import {Context} from "../index";

const CarsList = observer(() => {
    const {car}=useContext(Context)

    return (
        <ul className="catalog_table">
            {car.car.map(car=>
            <CarsItem key={car.id} cars={car}/>
            )}
        </ul>
    );
});

export default CarsList;
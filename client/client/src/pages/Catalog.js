import React, {useContext, useEffect} from 'react';
import CarsList from "./CarsList";
import {observer} from "mobx-react-lite";
import {fetchCar, fetchMark, fetchModel} from "../http/CarApi";
import {Context} from "../index";
import Pages from "../components/Pages";
import {Dropdown} from "react-bootstrap";

const Catalog = observer(() => {

    const {car}=useContext(Context)
    useEffect(()=>{
        fetchMark().then(data=>car.setMarks(data))
        fetchModel().then(data=>car.setModels(data))
        fetchCar(null,null,1,10 ).then(data=>{
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
        },[])

    useEffect(()=>{
        fetchCar(car.selectedMark.id,car.selectedModel.id,car.page,5).then(data=>{
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })

    },[car.page,car.selectedMark,car.selectedModel])

    return (
        <div id="content" data-testing="catalog-page">
            <div className="content">

                <div className="main_wrapper">

                  {/*  <h1><strong>Cars</strong> (15.345 results)</h1>*/}
                    <div className="catalog_sidebar">
                        <div className="search_auto">
                            <h3><strong>Search</strong> auto</h3>
                            <div className="categories">
                                <input type="radio" id="search_radio_1" checked="checked" name="category"/>
                                <label htmlFor="search_radio_1" className="search_radio_1"></label>

                            </div>
                            <div className="clear"></div>
                            <label><strong>Manufacturer:</strong></label>
                            <div className="select_box_1">
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{car.selectedMark.name || "Выберите тип"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {car.marks.map(mark =>
                                            <Dropdown.Item
                                                onClick={() => car.setSelectedMark(mark)}
                                                key={mark.id}
                                            >
                                                {mark.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <label><strong>Model:</strong></label>
                            <div className="select_box_1">

                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{car.selectedModel.name || "Выберите тип"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {car.models.map(model =>
                                            <Dropdown.Item
                                                onClick={() => car.setSelectedModel(model)}
                                                key={model.id}
                                            >
                                                {model.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>





                            <div className="clear"></div>
                        </div>

                    </div>
                    <div className="main_catalog">
                        <div className="top_catalog_box">


                            <div className="clear"></div>
                        </div>
                        <CarsList/>
                        <div className="bottom_catalog_box">
                            <div className="pagination">
                             <Pages/>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    );
});

export default Catalog;
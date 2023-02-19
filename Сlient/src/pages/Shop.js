import React from 'react';
import "./Shop.css"
import Sliders from "./Slider";

const Shop = () => {
    return (
        <div id="content">
            <div className="content">
                <div className="wrapper_1">
                    <div className="slider_wrapper">
                        <div className="home_slider">
                            <Sliders/>
                      {/*      <divs className="slider slider_1">

                                <div className="slide">
                                    <img src="images/placeholders/620x425.gif" alt=""/>
                                    <div className="description">
                                        <h2 className="title">2012 Mercedes-Benz CLS 320</h2>
                                        <p className="desc">
                                            <span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span>
                                        </p>
                                        <div className="price">$ 32 200</div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src="images/placeholders/620x425.gif" alt=""/>
                                    <div className="description">
                                        <h2 className="title">2010 Mercedes-Benz Sport</h2>
                                        <p className="desc">
                                            <span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span>
                                        </p>
                                        <div className="price">$ 32 200</div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src="images/placeholders/620x425.gif" alt=""/>
                                    <div className="description">
                                        <h2 className="title">2002 Subaru Impreza</h2>
                                        <p className="desc">
                                            <span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span>
                                        </p>
                                        <div className="price">$ 32 200</div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src="images/placeholders/620x425.gif" alt=""/>
                                    <div className="description">
                                        <h2 className="title">2012 Cadillac LaBaron</h2>
                                        <p className="desc">
                                            <span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span>
                                        </p>
                                        <div className="price">$ 32 200</div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <img src="images/placeholders/620x425.gif" alt=""/>
                                    <div className="description">
                                        <h2 className="title">2012 Ferrari Maranello 320</h2>
                                        <p className="desc">
                                            <span><strong>Miles: </strong>25,000</span><span><strong>Engine: </strong>2.6</span>
                                        </p>
                                        <div className="price">$ 32 200</div>
                                    </div>
                                </div>

                            </divs>*/}
                        </div>
                    </div>
                {/*    <div className="search_auto_wrapper">
                        <div className="search_auto">
                            <h3><strong>Search</strong> auto</h3>
                            <div className="categories">
                                <input type="radio" id="search_radio_1" checked="checked" name="category"/>
                                <label htmlFor="search_radio_1" className="search_radio_1"></label>

                            </div>
                            <div className="clear"></div>
                            <label><strong>Manufacturer:</strong></label>
                            <div className="select_box_1">
                                <select className="select_1">
                                    <option value="0">Any</option>
                                    <option value="1">Audi</option>
                                    <option value="2">Mercedes-Benz</option>
                                    <option value="3">BMW</option>
                                    <option value="4">Lexus</option>
                                    <option value="5">Lincoln</option>
                                    <option value="6">Ford</option>
                                    <option value="7">Fiat</option>
                                    <option value="8">Dodge</option>
                                </select>
                            </div>
                            <label><strong>Model:</strong></label>
                            <div className="select_box_1">
                                <select className="select_1">
                                    <option value="0">Any</option>
                                    <option value="1">R8</option>
                                    <option value="2">S500</option>
                                    <option value="3">540i</option>
                                    <option value="4">RX300</option>
                                    <option value="5">Navigator</option>
                                    <option value="6">Taurus</option>
                                    <option value="7">Doblo</option>
                                    <option value="8">Viper</option>
                                </select>
                            </div>
                            <label><strong>Year:</strong></label>
                            <div className="select_box_2">
                                <select className="select_2">
                                    <option value="0">From</option>
                                    <option value="1">2013</option>
                                    <option value="2">2012</option>
                                    <option value="3">2011</option>
                                    <option value="4">2010</option>
                                    <option value="5">2009</option>
                                    <option value="6">2008</option>
                                    <option value="7">2007</option>
                                    <option value="8">2006</option>
                                </select>
                                <select className="select_2">
                                    <option value="0">To</option>
                                    <option value="1">2013</option>
                                    <option value="2">2012</option>
                                    <option value="3">2011</option>
                                    <option value="4">2010</option>
                                    <option value="5">2009</option>
                                    <option value="6">2008</option>
                                    <option value="7">2007</option>
                                    <option value="8">2006</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <label><strong>Price:</strong></label>
                            <div className="select_box_2">
                                <select className="select_2">
                                    <option value="0">From</option>
                                    <option value="1">1000</option>
                                    <option value="2">2000</option>
                                    <option value="3">3000</option>
                                    <option value="4">4000</option>
                                    <option value="5">5000</option>
                                    <option value="6">6000</option>
                                    <option value="7">7000</option>
                                    <option value="8">8000</option>
                                </select>
                                <select className="select_2">
                                    <option value="0">To</option>
                                    <option value="1">1000</option>
                                    <option value="2">2000</option>
                                    <option value="3">3000</option>
                                    <option value="4">4000</option>
                                    <option value="5">5000</option>
                                    <option value="6">6000</option>
                                    <option value="7">7000</option>
                                    <option value="8">8000</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <label><strong>Mileage:</strong></label>
                            <div className="select_box_2">
                                <select className="select_2">
                                    <option value="0">From</option>
                                    <option value="1">1000</option>
                                    <option value="2">2000</option>
                                    <option value="3">3000</option>
                                    <option value="4">4000</option>
                                    <option value="5">5000</option>
                                    <option value="6">6000</option>
                                    <option value="7">7000</option>
                                    <option value="8">8000</option>
                                </select>
                                <select className="select_2">
                                    <option value="0">To</option>
                                    <option value="1">1000</option>
                                    <option value="2">2000</option>
                                    <option value="3">3000</option>
                                    <option value="4">4000</option>
                                    <option value="5">5000</option>
                                    <option value="6">6000</option>
                                    <option value="7">7000</option>
                                    <option value="8">8000</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="chb_wrapper">
                                <input type="checkbox"/>
                                <label className="check_label">Only new cars</label>
                            </div>
                            <input type="submit" value="Search" className="btn_search"/>
                            <div className="clear"></div>
                        </div>
                    </div>*/}
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
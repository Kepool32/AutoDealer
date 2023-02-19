import React from 'react';
import "./Footer.css"


const Footer = () => {
    return (
        <div id="footer">
            <div className="bg_top_footer">
                <div className="top_footer">
                    <div className="f_widget first">
                        <h3><strong>About</strong> us</h3>
                        <a href="#" className="footer_logo">AutoDealer</a>
                        <p>Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do eiusmod tempor.
                            Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eius mod tempor incididunt
                            ut.</p>
                    </div>
                    <div className="f_widget divide second">
                        <h3><strong>Open</strong> hours</h3>
                        <ul className="schedule">
                            <li>
                                <strong>Monday</strong>
                                <span>9:30 am - 6:00 pm</span>
                            </li>
                            <li>
                                <strong>Tuesday</strong>
                                <span>9:30 am - 6:00 pm</span>
                            </li>
                            <li>
                                <strong>Wednesday</strong>
                                <span>9:30 am - 6:00 pm</span>
                            </li>
                            <li>
                                <strong>Thursday</strong>
                                <span>9:30 am - 6:00 pm</span>
                            </li>
                            <li>
                                <strong>Friday</strong>
                                <span>9:30 am - 6:00 pm</span>
                            </li>
                            <li>
                                <strong>Saturday</strong>
                                <span>9:30 am - 4:00 pm</span>
                            </li>
                            <li>
                                <strong>Sunday</strong>
                                <span>closed</span>
                            </li>
                        </ul>
                    </div>
                    <div className="fwidget_separator"></div>
                    <div className="f_widget third">
                        <h3><strong>Our</strong> contacts</h3>
                        <div className="f_contact f_contact_1"><strong>Address Info:<br/></strong>Belarus,Minsk,BNTU 11 building
                        </div>
                        <div className="f_contact f_contact_2"><strong>Phone:</strong> +375(29)212-51-36 <br/>
                        </div>
                        <div className="f_contact f_contact_3"><strong>Email:</strong> <a
                            href="mailto:#">kukso.artem@mail.ru</a></div>
                    </div>
                    <div className="f_widget divide last frame_wrapper">
                      <iframe width="204" height="219"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.91493797086946!2d27.59479708728132!3d53.92341769435967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc6ce39a047%3A0xfbe1fe45b19c31cf!2z0KHRgtC-0LvQvtCy0LDRjyDQkdCd0KLQow!5e0!3m2!1sru!2sby!4v1669712416774!5m2!1sru!2sby"></iframe>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <div className="f_widget ">
                    <h3><strong>About</strong> us</h3>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Our Partners</a></li>
                        <li><a href="#">Advertising Online</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                </div>
                <div className="f_widget divide">
                    <h3><strong>Need</strong> help?</h3>
                    <ul>
                        <li><a href="#">How do I add an offer?</a></li>
                        <li><a href="#">How do I find a vehicle</a></li>
                        <li><a href="#">Price list</a></li>
                        <li><a href="#">Office for car dealers</a></li>
                    </ul>
                </div>
                <div className="fwidget_separator"></div>
                <div className="f_widget">
                    <h3><strong>User</strong> area</h3>
                    <ul>
                        <li><a href="#">Add an offer</a></li>
                        <li><a href="#">Register dealder</a></li>
                        <li><a href="#">Login Dealer</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div className="f_widget divide last">
                    <h3><strong>Find</strong> us here</h3>
                        <div className="ahen">
                        <a href="https://vk.com/id186892468"><i className="fab fa-vk"/></a>
                        <a href="https://www.instagram.com/kepoofk"><i className="fab fa-instagram"/></a>
                       <a href="https://t.me/kepoofk"><i className="fab fa-telegram"/></a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
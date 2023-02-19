import React, {useContext} from 'react';
import {Context} from "../index";
import  "./Navbar.css";
import {NavLink} from "react-router-dom";
import s from './Navbar.css';
import {ADMIN_ROUTER, CATALOG_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Navbar = observer(() => {
    const {user}=useContext(Context)

    const navigate=useNavigate()



    const logOut=()=>{

        user.setUser({})
        user.setIsAuth(false)
    }




    return (
        <div id="header">

            <div className="top_info">
                <div className="logo">
                    <a href="#">Auto<span>Dealer</span></a>
                </div>
                <div className="header_contacts">
                {/*    <div className="phone">+1 (800) 455-55-95</div>
                    <div>WinterJuice, LLC, 1875 South Grant Street, Suite 680, San Mateo, CA 94402</div>*/}



                </div>
                {user.isAuth ?

                    <div className="socials" readOnly data-testid="data-test">
                        <a href="https://vk.com/id186892468"><i className="fab fa-vk"/></a>
                        <a href="https://www.instagram.com/kepoofk"><i className="fab fa-instagram"/></a>
                        <a href="https://t.me/kepoofk"><i className="fab fa-telegram"/></a>

                        <button className='btns but' data-testid="data-test-btn" onClick={()=>navigate(ADMIN_ROUTER)} >Админ панель</button>
                        <button className='btns but' data-testid="data-test-btn1" onClick={()=>logOut()} >Выйти</button>
                    </div>
                        :
                    <div className="socials">
                        <a href="https://vk.com/id186892468"><i className="fab fa-vk"/></a>
                        <a href="https://www.instagram.com/kepoofk"><i className="fab fa-instagram"/></a>
                        <a href="https://t.me/kepoofk"><i className="fab fa-telegram"/></a>
                        <button className='btns but' data-testid="data-test-btn3" onClick={()=>navigate(LOGIN_ROUTE)}  readOnly>Авторизация</button>
                    </div>
                    }


            </div>

            <div className="bg_navigation">
                <div className="navigation_wrapper">
                    <div id="navigation">

                        <ul>
                            <li><NavLink to={SHOP_ROUTE} >Home</NavLink></li>
                            <li><NavLink to={CATALOG_ROUTE} >Сatalog</NavLink></li>
                       {/*     <li><NavLink  >About Us</NavLink></li>
                            <li><NavLink  >Contacts</NavLink></li>*/}

                        </ul>
                    </div>
                    <div id="search_form">

                    </div>
                </div>
            </div>
        </div>

    );
});

export default Navbar;
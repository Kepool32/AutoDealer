import React, {useContext, useState} from 'react';
import "./style.css"
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Cheker from "../validateValue/validateValues";



const Auth = observer(() => {
    const location=useLocation()
    const isLogin=location.pathname===LOGIN_ROUTE
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {user}=useContext(Context)
    const navigate=useNavigate()
    const [emailDirty,setemailDirty]=useState(false)
    const [passwordDirty,setPasswordDirty]=useState(false)
    const [emailEror,setemailEror]=useState("Email не может быть пустым")
    const [passwordEror,setPasswordEror]=useState("Пароль не может быть пустым")



    const click=async ()=>{
        try{
            let data;
            if(isLogin){
                data =await login(email,password);

            }
            else {
                data = await registration(email, password);


            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)

        }catch (e)
        {
            alert(e.response.data.message)

        }



    }


    const blurHandler=(e)=>{

        switch (e.target.name){
            case 'email':
                setemailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break

        }
    }


   const emailHandler=(e)=> {

        setEmail(e.target.value)
        let result=Cheker.emailCheck(e.target.value)
        if (!result){
            setemailEror('Некоректный email')
        }else{

            setemailEror("")
        }


    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length<3 || e.target.value.length>8){
            setPasswordEror("Пароль должен быть длиннее 3 и меньше 8")
            if(!e.target.value){
                setPasswordEror("Пароль не может быть пустым")
            }
        }else{
            setPasswordEror("")
        }

    }




    return (
        <div>
        <div id="login-form">
            <h1>{isLogin ?'Авторизация':"Регистрация"} </h1>
        <fieldset>
            <form action="javascript:void(0);" method="get">
                {(emailDirty && emailEror) && <div style={{color:'red'}}>{emailEror}</div>}
                <input
                        onBlur={e=>blurHandler(e)}
                        name='email'
                        type="email"
                       value={email}
                       placeholder="Введите ваш email"

                        onChange={e=>emailHandler(e)}
                        class="input js-input js-input-email"
                />
                {(passwordDirty && passwordEror) && <div style={{color:'red'}}>{passwordEror}</div>}
                    <input
                        name='password'
                        type="password"
                        value={password}
                        placeholder="Введите ваш пароль"
                        onChange={e=>passwordHandler(e)}
                        onBlur={e=>blurHandler(e)}
                    />


                        <input
                                type="submit"
                                value={isLogin ? "Войти" :"Регистрация"}
                                onClick={click}

                        />
                {isLogin ?
                    <footer className="clearfix">
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                    </footer>
                    :
                    <footer className="clearfix">
                        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </footer>
                }
                </form>
            </fieldset>
        </div>
        </div>
    );
});

export default Auth;


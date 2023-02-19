import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import Preloader from "./Loading/Preloader";
import {check} from "./http/userAPI";

const App =observer(()=> {
    const {user}=useContext(Context)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

            check().then(data=>{
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(()=>setLoading(false))


 
    },[])

    if(loading){
        return <Preloader/>
    }
  return (
        <div>

            <Navbar/>
            <AppRouter/>
            <Footer/>
        </div>
  );
})

export default App;

import React  from 'react';
import {
    ADMIN_ROUTER,
    BASKET_ROUTE,
    CARS_ROUTE,
    CATALOG_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";

import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import CarsPage from "./pages/CarsPage";
import Catalog from "./pages/Catalog";

export const authRoutes=[
    {
     path:ADMIN_ROUTER,
        element:<Admin/>



    },
    {
        path:BASKET_ROUTE,
        element:<Basket/>



    },


]

export const publicRoutes=[

    {
        path:SHOP_ROUTE,
        element:<Shop/>



    },
    {
        path:LOGIN_ROUTE,
        element:<Auth/>



    },
    {
        path:REGISTRATION_ROUTE,
        element:<Auth/>



    },
    {
        path:CARS_ROUTE + '/:id',
        element:<CarsPage/>



    },

    {
        path:CATALOG_ROUTE,
        element:<Catalog/>



    },

]
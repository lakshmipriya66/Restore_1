
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductDetails from "../features/catalog/ProductDetails";
import Aboutpage from "../features/about/AboutPage"
import ContactPage from "../features/contact/ContactPage";
import HomePage from "../features/home/HomePage";
import Catalog from "../features/catalog/Catalog";
import BasketPage from "../features/basket/BasketPage";
import App from "../layout/App";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import CheckoutPage from "../features/checkout/CheckoutPage";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/', element: <HomePage />},
            {path: '/catalog', element: <Catalog />},
            {path: "catalog/:id",element: <ProductDetails/>},
            {path: '/about', element: <Aboutpage />},
            {path: '/contact', element: <ContactPage />},
             {path: '/basket', element: <BasketPage />},
             {path: '/checkout', element: <CheckoutPage />},
            {path: '/not-found', element: <NotFound />},
            {path: '/server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />}
           
        ]

    }
])
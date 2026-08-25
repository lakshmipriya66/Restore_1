import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../features/catalog/ProductDetails";
import Aboutpage from "../features/about/AboutPage"
import ContactPage from "../features/contact/ContactPage";
import HomePage from "../features/home/HomePage";
import Catalog from "../features/catalog/Catalog";
import App from "../layout/App";
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
           
        ]

    }
])
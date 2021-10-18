import React from "react"
import AppRouter from "./router/appRouter"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
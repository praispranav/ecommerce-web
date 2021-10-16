import React from "react"
import AppRouter from "./router/appRouter"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
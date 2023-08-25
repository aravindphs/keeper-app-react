import React from "react";
import { Header } from './Header';
import { Footer } from "./Footer";
import { Note } from "./Note";
import '../style.css'

const App = ()=>{
    return <div>
        <Header />
        <Note />
        <Footer />
    </div>
}

export {App}
import React from "react";
import { Header } from './Header';
import { Footer } from "./Footer";
import { Note } from "./Note";
import '../style.css'
import notes from "../note";



const App = ()=>{
    return <div>
        <Header />
        {notes.map(noteItem => <Note 
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
        />)}
        <Footer />
    </div>
}

export {App}
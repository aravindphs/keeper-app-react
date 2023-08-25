import React from "react";

const Footer = ()=>{
    const year = new Date().getFullYear();

    return <div>
        <footer>
            <p>Copyright <span>&copy;</span> {year}</p>
        </footer>
    </div>
}

export {Footer}
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ExpandingComponent from "./components/expandingComponent/ExpandingComponent";
import "./App.css";
import AppSlider from './router/AppSlider'


function App() {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset
            let cursor = window.

                setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? "visible" : "hidden";

    return (

        /* <div className="App">
             <ExpandingComponent />
        </div>*/
        <AppSlider />
    );
}

export default App

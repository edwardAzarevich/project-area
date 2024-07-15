import React, { useState, useEffect } from "react";
import TopDrawerComponent from './components/animation/MoveComponent.jsx';
import './index.css';
import ReactPlayer from "react-player/youtube";



function App() {
    return (
        <>
            <TopDrawerComponent />
            <MyVideo />
        </>
    );
}

const MyVideo = () => {
    return (
        <ReactPlayer url='https://www.youtube.com/watch?v=zMf_xeGPn6s&ab_channel=Remix' />
    );
};

export default App

import { useState, useRef } from 'react'
import './App.css';
import TestUseRef from "./components/TestUseRef";
import TestFile from './components/TestFile';


function App() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <TestFile />
            <TestUseRef />
        </>
    );
};

export default App

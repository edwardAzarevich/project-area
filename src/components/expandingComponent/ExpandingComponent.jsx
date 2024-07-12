import React, { useState, useEffect } from 'react';
import './ExpandingComponent.css';

const ExpandingComponent = () => {
    // const [isHovered, setIsHovered] = useState(false);

    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         if (event.clientY <= 50) {
    //             setIsHovered(true);
    //         } else {
    //             setIsHovered(false);
    //         }
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <p>Наведите курсор мыши на верхнюю часть страницы, чтобы увидеть дополнительный компонент.</p>
            {isHovered && (
                <div
                    className="expanding-top-component"
                >
                    <p>Это дополнительный компонент, который появляется при наведении курсора на верхнюю часть страницы.</p>
                </div>
            )}
        </div>
    );
};

export default ExpandingComponent;
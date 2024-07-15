import React, { useState, useEffect } from 'react';

const TopDrawerComponent = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (event.clientY <= 40) {
                setShowDrawer(true);
            } else {
                setShowDrawer(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={`top-drawer-component ${showDrawer ? 'show' : ''}`}
            style={{
                position: 'fixed',
                top: showDrawer ? '0' : '-100px',
                left: '0',
                right: '0',
                backgroundColor: '#333',
                color: '#fff',

                transition: 'top 0.3s ease-in-out',
                zIndex: '100',
            }}
        >
            <h3>Это выезжающий компонент!</h3>
            <p>Наведи курсор в верхнюю часть экрана, чтобы увидеть его.</p>
        </div>
    );
};

export default TopDrawerComponent;
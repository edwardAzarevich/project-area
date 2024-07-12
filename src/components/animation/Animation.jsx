import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { Box, Typography } from '@mui/material';

const MyComponent = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const componentRef = useRef(null);

    const handleMouseMove = (event) => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            const isInTopRegion = event.clientY < rect.top + 50;
            setShowOverlay(isInTopRegion);
        }
    };

    return (
        <Box
            ref={componentRef}
            onMouseMove={handleMouseMove}
            position="relative"
            sx={{
                height: '300px',
                width: '400px',
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h4" color="white">
                Main Content
            </Typography>

            <Transition in={showOverlay} timeout={300}>
                {(state) => (
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgcolor="rgba(0, 0, 0, 0.5)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            opacity: state === 'entering' || state === 'entered' ? 1 : 0,
                            transform: state === 'entering' || state === 'entered'
                                ? 'translateY(0)'
                                : 'translateY(-20px)',
                            transition: 'opacity 300ms, transform 300ms',
                        }}
                    >
                        <Typography variant="h4" color="white">
                            Overlay Content
                        </Typography>
                    </Box>
                )}
            </Transition>
        </Box>
    );
};

export default MyComponent;
import React from 'react';

const Ground = () => {
    let position = {x:200, y:200};
    let size = {w:100, y:100};
    const groundStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${size.w}px`,
    height: `${size.y}px`,
    backgroundColor: 'green',
    };

    return <div style={groundStyle}></div>;
};

export default Ground;
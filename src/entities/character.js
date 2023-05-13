import React, { useState, useEffect } from 'react';
import Ground from './blocks';
const Character = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [movement, setMovement] = useState({ x: 0, y: 0 });
  let charSize = {w:50, h:50};
  const [charBox, setCharBox] = useState({charTopRight: {x: position.x + charSize.x/2,
                                                          y:position.y + charSize.y/2},
                                          charTopLeft: {x: position.x - charSize.x/2,
                                                          y:position.y + charSize.y/2},
                                          charBottomRight: {x: position.x + charSize.x/2,
                                                              y:position.y - charSize.y/2},
                                          charBottomLeft: {x: position.x - charSize.x/2,
                                                            y:position.y - charSize.y/2}})
  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'w':
        setMovement((prevMovement) => ({ ...prevMovement, y: -1 }));
        break;
      case  's':
        setMovement((prevMovement) => ({ ...prevMovement, y: 1 }));
        break;
      case  'a':
        setMovement((prevMovement) => ({ ...prevMovement, x: -1 }));
        break;
      case  'd':
        setMovement((prevMovement) => ({ ...prevMovement, x: 1 }));
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.key) {
      case 'w':
      case 's':
        setMovement((prevMovement) => ({ ...prevMovement, y: 0 }));
        break;
      case 'a':
      case 'd':

        setMovement((prevMovement) => ({ ...prevMovement, x: 0 }));
        break;
      default:
        break;
    }
  };
  
  function updateBox(charBox, movement) {
    setCharBox((prevCharBox) => ({
      charTopRight: {}
    }))
  }
  const checkCollision = (charBox, blockBox) => {
  


  }
  const charMovement = (charPos, charSize, movement, blockBox) =>{
 
    if(!checkCollision(charBox, blockBox)){}
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + movement.x,
        y: prevPosition.y + movement.y,
      }));
    }, 5);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [movement]);

  return (
    <div
      style={{
        position: 'relative',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${charSize.w}px`,
        height: `${charSize.h}px`,
        backgroundColor: 'red',
      }}
    ></div>
  );
};

export default Character;

import React from 'react';
import Character from './entities/character';
import Ground from './entities/blocks';
import { GameEngine } from 'react-game-engine';

const Game = () => {
  return (
    <GameEngine>
      <h1>My Game</h1>
      <Character />
      <Ground />
    </GameEngine>
      
      

  );
};

export default Game;

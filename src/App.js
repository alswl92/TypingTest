import React from 'react';
import Home from './components/Home';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  }
  const [statusGame, setStatusGame] = useState(null);
  let layout;
  switch(statusGame){
    case 'playGame':
      layout = <Game />
      break;
    default:
      layout = <Home onGame={handleChangeStatusGame} />
      break;
  }

  return (
    <>
      { layout }
    </>
  )
}

export default App;

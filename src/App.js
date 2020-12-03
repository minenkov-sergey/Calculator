import React from 'react';
import style from './App.module.css';
import GameBoard from './AppBody/GameBoard/GameBoard'


const App = (props) => {

  return (

    <div className={style.appWrapper}>
      {/* <InfoBoard /> */}
      <GameBoard />
    </div>

  );
}

export default App;

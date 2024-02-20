import React, {useState} from 'react';
import "./Game.css";
import click from '../../Assets/click_effect-86995.mp3';
import {ReactComponent as Cross} from '../../Assets/cross-svgrepo-com.svg'
import {ReactComponent as Circle} from '../../Assets/circle.svg'


function Game() {

    const [audio] = useState(new Audio(click));

    const handleClick = () => {
        audio.play();
    };

      

  return (
    <div className='container'>
        
        <h1>Tic Tac Toe</h1>

        <div className='choose'>
            <p>Choose your player</p>
            <div className='cross'><Cross /></div>
            <p>or</p>
            <div className='circle'><Circle /></div>
        </div>

        <div id="gameboard">
            <div className="square top-left" id="0" onClick={handleClick}></div>
            <div className="square top" id="1" onClick={handleClick}></div>
            <div className="square top-right" id="2" onClick={handleClick}></div>
            <div className="square left" id="3" onClick={handleClick}></div>
            <div className="square" id="4" onClick={handleClick}></div>
            <div className="square right" id="5" onClick={handleClick}></div>
            <div className="square bottom-left" id="6" onClick={handleClick}></div>
            <div className="square bottom" id="7" onClick={handleClick}></div>
            <div className="square bottom-right" id="8" onClick={handleClick}></div>
        </div>

        <div className='scorecard'>
            <p className='player1'>
                <span className='p1'>Player</span>
                <span className='p2'>Player 1</span>
                ("
                <span className='x'>
                    
                </span>
                ")
            </p>

            <p className='ties'>
                Tie
                <span className='score'></span>
            </p>

            <p className='player2'>
                <span className='p1'>Computer</span>
                <span className='p2'>Player 2</span> 
                ("
                <span className='o'>
                    
                </span>
                ")  
            </p>

            <div className='toggle'>
                {/*
                    *! Here I have to swap two svgs between single player and two players
                 */}
                <p className="p1">1P</p>
                <p className="p2">2P</p>
            </div>
        </div>

    </div>
  )
}

export default Game
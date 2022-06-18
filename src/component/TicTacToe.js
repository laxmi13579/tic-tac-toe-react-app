import React, { useState } from 'react';
import Button from '../UI/Button';
import WinnerCard from './WinnerCard';
// import './TicTacToe.css';
// import './style.css';

function TicTacToe() {
    const [turn, setTurn ] = useState('X');
    const [ cells, setCells ] = useState(Array(9).fill(''));
    const [ winner, setWinner ] = useState();

    const checkForWinner = (square) => {
        const combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal: [
                [0,4,8],
                [2,4,6],
            ]
        };
        for( let combo in combos){
            combos[combo].forEach((pattern) => {
                console.log('winner datea',winner);
                if( square[pattern[0]] === '' || square[pattern[1]] === '' || square[pattern[2]] === '' ){
                    //do something
                } else if (
                    square[pattern[0]] === square[pattern[1]]  &&
                    square[pattern[1]] ===  square[pattern[2]] ){
                        setWinner(square[pattern[0]]);
                }
            });
        }
    }

    const handleClick = ( num) => {
        let square = [...cells];

        if(square[num] !== ''){
            alert('BOX is already filled');
            return;
        }

        if(turn === 'X'){
            square[num] = 'X';
            setTurn('O');
        } else {
            square[num] = 'O';
            setTurn('X')
        }
        checkForWinner(square);
        setCells(square);
        console.log(square);
    }

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''))
    }

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)} className='text-center text-6xl border border-slate-500 h-28 w-28'>{cells[num]}</td>;
    }
  return (
    <div className='container'> 
        Turn: {turn}
        <table className='table-fixed border-separate border-spacing-2 border border-slate-500 '>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        <Button onClick={() => handleRestart()}>Play again</Button>
        {winner && (
            <>
                <WinnerCard handleRestart={handleRestart}>{winner}</WinnerCard>
            </>
        )}
    </div>
  )
}

export default TicTacToe
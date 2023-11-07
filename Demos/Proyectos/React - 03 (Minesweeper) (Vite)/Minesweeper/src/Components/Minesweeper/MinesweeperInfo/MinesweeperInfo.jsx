import { useState, useEffect } from "react"
import { CELL_VALUES } from "../MinesweeperConstants"
import * as BOARD_BEHAVIOUR from "../Engine/BoardBehavior"
import * as CELL_BEHAVIOUR from "../Engine/CellBehavior"
import * as GLOBAL_HELP from "../Engine/GlobalHelp"
import './MinesweeperInfo.css'
import React from 'react'
import {Fetch} from '../ComponentesFetch/Fetch'

export function MineInfo ({ totalFlags, gameFinished, setCells, setMines}) {
  
  const [time, setTime] = useState([0,0])
  const [nextMines, setNextMines] = useState(10)
  const [nextSize, setNextSize] = useState(10)
  const [JSONsaved, setJSONsaved] = useState(false)

  const handleIncrement = (type) => {
    if (type === 'Height') setNextSize(prevValue => Math.min(prevValue + 1, 11))
    else if (type === 'Mines') setNextMines(prevValue => prevValue + 1)
  }

  const handleDecrement = (type) => {
    if (type === 'Height') setNextSize(prevValue => Math.max(prevValue - 1, 1))
    else if (type === 'Mines') setNextMines(prevValue => Math.max(prevValue - 1, 1))
  }

  const sumar1Sec = (currentTime) => {
        var [mins, secs] = currentTime
        secs++
        if (secs >= 60) {
            secs = 0
            mins++
        }
        setTime([mins, secs])
  }

  const newGame = () => {
    var newBoard = BOARD_BEHAVIOUR.newPreparedBoard(nextSize, nextMines)
    var newCells = CELL_BEHAVIOUR.inicialiceCells(newBoard)
    setCells(newCells)
    setMines(nextMines)
    setTime([0,0])
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gameFinished == false) sumar1Sec(time)
      else {
        if (JSONsaved === false) {
          setJSONsaved(true)
          //GLOBAL_HELP.saveOnJSON(time)
        }
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [time])

  return (
    <div className="fixed z-30 top-32 left-1/2 w-4/12 h-80.3 bg-gradient-to-br from-gray-600 via-gray-400 to-gray-300 rounded-3xl border-3 border-white text-gray-200">
        <div className="h-16 text-5xl font-small-caps font-bold bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl text-center"> Game Info </div>
        <br/>
        <div className="mt-5 ml-16 w-8/12 text-2xl font-small-caps font-bold bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl">&nbsp;&nbsp;&nbsp;Time: {time[0]} mins {time[1]} sec</div>
        <div className="mt-5 ml-16 w-8/12 text-2xl font-small-caps font-bold bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl" data-testid="flags" value={totalFlags}>&nbsp;&nbsp;&nbsp;{CELL_VALUES.TAGGED} Flags Remaining: {totalFlags}</div>
        <br/><br/>
        <div className="mt-3 h-16 text-5xl font-small-caps font-bold bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl text-center cursor-pointer" onClick={newGame}> New Game </div>
        <div className="mt-5 ml-16 w-8/12 text-2xl font-small-caps font-bold bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl text-center">Size:&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDecrement('Height')}>-</button>
            <input
                className="w-2/12 mb-2"
                type="number"
                min="1"
                max="11"
                value={nextSize}
                onChange={(event) => setNextSize(Number(event.target.value))}
            />
            <button onClick={() => handleIncrement('Height')}>+</button>
        </div>
        <div className="mt-5 ml-16 w-8/12 text-2xl font-small-caps font-bold bg-gradient-to-br from-gray-800 to-gray-500 border-b-2 border-t-2 border-white rounded-3xl text-center">Mines:&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDecrement('Mines')}>-</button>
            <input
                className="w-2/12 mb-2"
                type="number"
                min="1"
                max={(nextSize * nextSize - 1) + ""}
                value={nextMines}
                onChange={(event) => setNextMines(Number(event.target.value))}
            />
            <button onClick={() => handleIncrement('Mines')}>+</button>
        </div>
    {JSONsaved && <Fetch tiempo={time} gameFinished={gameFinished}/>}
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import style from './GameBoard.module.css';
import flagImg from './../../assets/flag.png'


const GameBoard = (props) => {

  const [board, setBoard] = useState([])
  const [playerBoard, setPlayerBoard] = useState([]) //player see this board
  const [flags, setFlag] = useState()
  const [bombs, setBombs] = useState()
  const [infoBoard, setInfoBoard] = useState('')

  let boardCopy = []
  const generateboard = () => {
    let emptyArr = generateEmptyArr()
    setPlayerBoard([...emptyArr]) //clearing a playerboard view
    setBoard([])
    generateBombs() 
    generateHintsOfBombs() 
  }

  //generate number of bombs and flags. Put them on board
  const generateBombs = () => {
    let bombsCount = 0;
    for (let i = 0; i < 10; i++) {
      let newArr = []
      for (let j = 0; j < 10; j++) {
        let random = Math.random()
        if (random <= 0.10) {
          newArr = [...newArr, 'B']
          bombsCount += 1
        } else {
          newArr = [...newArr, 0]
        }
      }
      boardCopy = [...boardCopy, newArr]
    }
    setBombs(bombsCount)
    setFlag(bombsCount)
  }

  //generate numbers around bombs
  const generateHintsOfBombs = () => {
    let newboardCopy = [...boardCopy]
    for (let i = 0; i < newboardCopy.length; i++) {
      for (let j = 0; j < newboardCopy[i].length; j++) {
        if (newboardCopy[i][j] === 'B') {
          if (i === 0 && j === 0) {
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 }
          } else if (i === 0 && j === 9) {
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 }
            if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 }
            if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 }
          } else if (i === 9 && j === 0) {
            if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 }
            if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 }
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 }
          } else if (i === 9 && j === 9) {
            if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 }
            if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 }
            if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 }
          } else if (i === 0) {
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 }
            if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 }
            if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 }
          } else if (j === 9) {
            if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 }
            if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 }
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 }
            if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 }
            if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 }
          } else if (j === 0) {
            if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 }
            if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 }
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 }
          } else if (i === 9) {
            if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 }
            if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 }
            if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 }
            if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 }
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 }
          } else {
            if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 }
            if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 }
            if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 }
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 }
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 }
            if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 }
            if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 }
          }

        }
      }
    }
    setBoard([...newboardCopy])
  }
  
  
  const generateEmptyArr = () => {
    let newArr = []
    let newBigArr = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        newArr = [...newArr, '']
      }
      newBigArr = [...newBigArr, newArr]
      newArr = []
    }
    let emptyArr = [...newBigArr]
    return emptyArr
  }

// check surroundings of opened tiled
  const openTile = (event) => {
    let tileCoord = []
    tileCoord = [String(event.target.name), ...tileCoord]
    let playerBoardCopy = [...playerBoard]
    let boardCopy = [...board]
    if (boardCopy[tileCoord[0][0]][tileCoord[0][1]] === 0) {
      while (tileCoord.length > 0) {
        let i = Number(tileCoord[0][0])
        let j = Number(tileCoord[0][1])
        tileCoord.shift()
        if (i === 0 && j === 0) {
          if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !== 'C') { tileCoord = [String(i) + String(j + 1), ...tileCoord] }
          if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !== 'C') { tileCoord = [String(i + 1) + String(j), ...tileCoord] }
          if (typeof boardCopy[i][j + 1] === 'number') { if (playerBoardCopy[i][j + 1] === '') { playerBoardCopy[i][j + 1] = 'C' } }
          if (typeof boardCopy[i + 1][j] === 'number') { if (playerBoardCopy[i + 1][j] === '') { playerBoardCopy[i + 1][j] = 'C' } }
          if (boardCopy[i+1][j + 1] > 0) { if (playerBoardCopy[i+1][j + 1] === '') { playerBoardCopy[i+1][j + 1] = 'C' } }
        } else if (i === 0 && j === 9) {
          if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !== 'C') { tileCoord = [String(i) + String(j - 1), ...tileCoord] }
          if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !== 'C') { tileCoord = [String(i + 1) + String(j), ...tileCoord] }
          if (typeof boardCopy[i + 1][j] === 'number') { if (playerBoardCopy[i + 1][j] === '') { playerBoardCopy[i + 1][j] = 'C' } }
          if (typeof boardCopy[i][j - 1] === 'number') { if (playerBoardCopy[i][j - 1] === '') { playerBoardCopy[i][j - 1] = 'C' } }
          if (boardCopy[i + 1][j-1] > 0) { if (playerBoardCopy[i + 1][j-1] === '') { playerBoardCopy[i + 1][j-1] = 'C' } }
        } else if (i === 9 && j === 0) {
          if (boardCopy[i - 1][j] === 0 && playerBoardCopy[i - 1][j] !== 'C') { tileCoord = [String(i - 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !== 'C') { tileCoord = [String(i) + String(j + 1), ...tileCoord] }
          if (typeof boardCopy[i - 1][j] === 'number') { if (playerBoardCopy[i - 1][j] === '') { playerBoardCopy[i - 1][j] = 'C' } }
          if (typeof boardCopy[i][j + 1] === 'number') { if (playerBoardCopy[i][j + 1] === '') { playerBoardCopy[i][j + 1] = 'C' } }
          if (boardCopy[i-1][j+1] > 0) { if (playerBoardCopy[i-1][j+1] === '') { playerBoardCopy[i-1][j+1] = 'C' } }
        } else if (i === 9 && j === 9) {
          if (boardCopy[i - 1][j] === 0 && playerBoardCopy[i - 1][j] !== 'C') { tileCoord = [String(i - 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !== 'C') { tileCoord = [String(i) + String(j - 1), ...tileCoord] }
          if (typeof boardCopy[i][j - 1] === 'number') { if (playerBoardCopy[i][j - 1] === '') { playerBoardCopy[i][j - 1] = 'C' } }
          if (typeof boardCopy[i - 1][j] === 'number') { if (playerBoardCopy[i - 1][j] === '') { playerBoardCopy[i - 1][j] = 'C' } }
          if (boardCopy[i - 1][j-1] > 0) { if (playerBoardCopy[i - 1][j-1] === '') { playerBoardCopy[i - 1][j-1] = 'C' } }
        } else if (i === 0) {
          if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !== 'C') { tileCoord = [String(i) + String(j - 1), ...tileCoord] }
          if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !== 'C') { tileCoord = [String(i) + String(j + 1), ...tileCoord] }
          if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !== 'C') { tileCoord = [String(i + 1) + String(j), ...tileCoord] }
          if (typeof boardCopy[i][j + 1] === 'number') { if (playerBoardCopy[i][j + 1] === '') { playerBoardCopy[i][j + 1] = 'C' } }
          if (typeof boardCopy[i + 1][j] === 'number') { if (playerBoardCopy[i + 1][j] === '') { playerBoardCopy[i + 1][j] = 'C' } }
          if (typeof boardCopy[i][j - 1] === 'number') { if (playerBoardCopy[i][j - 1] === '') { playerBoardCopy[i][j - 1] = 'C' } }
          if (boardCopy[i + 1][j-1] > 0) { if (playerBoardCopy[i + 1][j-1] === '') { playerBoardCopy[i + 1][j-1] = 'C' } }
          if (boardCopy[i+1][j + 1] > 0) { if (playerBoardCopy[i+1][j + 1] === '') { playerBoardCopy[i+1][j + 1] = 'C' } }
        } else if (j === 9) {
          if (boardCopy[i - 1][j] === 0 && playerBoardCopy[i - 1][j] !== 'C') { tileCoord = [String(i - 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !== 'C') { tileCoord = [String(i) + String(j - 1), ...tileCoord] }
          if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !== 'C') { tileCoord = [String(i + 1) + String(j), ...tileCoord] }
          if (typeof boardCopy[i - 1][j] === 'number') { if (playerBoardCopy[i - 1][j] === '') { playerBoardCopy[i - 1][j] = 'C' } }
          if (typeof boardCopy[i + 1][j] === 'number') { if (playerBoardCopy[i + 1][j] === '') { playerBoardCopy[i + 1][j] = 'C' } }
          if (typeof boardCopy[i][j - 1] === 'number') { if (playerBoardCopy[i][j - 1] === '') { playerBoardCopy[i][j - 1] = 'C' } }
          if (boardCopy[i - 1][j-1] > 0) { if (playerBoardCopy[i - 1][j-1] === '') { playerBoardCopy[i - 1][j-1] = 'C' } }
          if (boardCopy[i + 1][j-1] > 0) { if (playerBoardCopy[i + 1][j-1] === '') { playerBoardCopy[i + 1][j-1] = 'C' } }
        } else if (j === 0) {
          if (boardCopy[i - 1][j] === 0 && playerBoardCopy[i - 1][j] !== 'C') { tileCoord = [String(i - 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !== 'C') { tileCoord = [String(i) + String(j + 1), ...tileCoord] }
          if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !== 'C') { tileCoord = [String(i + 1) + String(j), ...tileCoord] }
          if (typeof boardCopy[i - 1][j] === 'number') { if (playerBoardCopy[i - 1][j] === '') { playerBoardCopy[i - 1][j] = 'C' } }
          if (typeof boardCopy[i][j + 1] === 'number') { if (playerBoardCopy[i][j + 1] === '') { playerBoardCopy[i][j + 1] = 'C' } }
          if (typeof boardCopy[i + 1][j] === 'number') { if (playerBoardCopy[i + 1][j] === '') { playerBoardCopy[i + 1][j] = 'C' } }
          if (boardCopy[i-1][j+1] > 0) { if (playerBoardCopy[i-1][j+1] === '') { playerBoardCopy[i-1][j+1] = 'C' } }
          if (boardCopy[i+1][j + 1] > 0) { if (playerBoardCopy[i+1][j + 1] === '') { playerBoardCopy[i+1][j + 1] = 'C' } }
        } else if (i === 9) {
          if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !== 'C') { tileCoord = [String(i - 1) + String(j - 1), ...tileCoord] }
          if (boardCopy[i - 1][j] === 0 && playerBoardCopy[i - 1][j] !== 'C') { tileCoord = [String(i - 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !== 'C') { tileCoord = [String(i) + String(j + 1), ...tileCoord] }
          if (typeof boardCopy[i][j - 1] === 'number') { if (playerBoardCopy[i][j - 1] === '') { playerBoardCopy[i][j - 1] = 'C' } }
          if (typeof boardCopy[i - 1][j] === 'number') { if (playerBoardCopy[i - 1][j] === '') { playerBoardCopy[i - 1][j] = 'C' } }
          if (typeof boardCopy[i][j + 1] === 'number') { if (playerBoardCopy[i][j + 1] === '') { playerBoardCopy[i][j + 1] = 'C' } }
          if (boardCopy[i - 1][j-1] > 0) { if (playerBoardCopy[i - 1][j-1] === '') { playerBoardCopy[i - 1][j-1] = 'C' } }
          if (boardCopy[i-1][j+1] > 0) { if (playerBoardCopy[i-1][j+1] === '') { playerBoardCopy[i-1][j+1] = 'C' } }
        } else {
          if (boardCopy[i - 1][j] === 0 && playerBoardCopy[i - 1][j] !== 'C') { tileCoord = [String(i - 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !== 'C') { tileCoord = [String(i) + String(j + 1), ...tileCoord] }
          if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !== 'C') { tileCoord = [String(i + 1) + String(j), ...tileCoord] }
          if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !== 'C') { tileCoord = [String(i) + String(j - 1), ...tileCoord] }
          if (typeof boardCopy[i - 1][j] === 'number') { if (playerBoardCopy[i - 1][j] === '') { playerBoardCopy[i - 1][j] = 'C' } }
          if (typeof boardCopy[i][j + 1] === 'number') { if (playerBoardCopy[i][j + 1] === '') { playerBoardCopy[i][j + 1] = 'C' } }
          if (typeof boardCopy[i + 1][j] === 'number') { if (playerBoardCopy[i + 1][j] === '') { playerBoardCopy[i + 1][j] = 'C' } }
          if (typeof boardCopy[i][j - 1] === 'number') { if (playerBoardCopy[i][j - 1] === '') { playerBoardCopy[i][j - 1] = 'C' } }
          if (boardCopy[i - 1][j-1] > 0) { if (playerBoardCopy[i - 1][j-1] === '') { playerBoardCopy[i - 1][j-1] = 'C' } }
          if (boardCopy[i-1][j+1] > 0) { if (playerBoardCopy[i-1][j+1] === '') { playerBoardCopy[i-1][j+1] = 'C' } }
          if (boardCopy[i + 1][j-1] > 0) { if (playerBoardCopy[i + 1][j-1] === '') { playerBoardCopy[i + 1][j-1] = 'C' } }
          if (boardCopy[i+1][j + 1] > 0) { if (playerBoardCopy[i+1][j + 1] === '') { playerBoardCopy[i+1][j + 1] = 'C' } }
        }
        if (playerBoardCopy[i][j] !== 'F') { playerBoardCopy[i][j] = 'C' }
      }
      setPlayerBoard(playerBoardCopy)
    } else if (boardCopy[tileCoord[0][0]][tileCoord[0][1]] !== 0) {
      playerBoardCopy[tileCoord[0][0]][tileCoord[0][1]] = boardCopy[tileCoord[0][0]][tileCoord[0][1]]
      setPlayerBoard(playerBoardCopy)
    }
  }

  

  //leftMB click
  const clickTileLB = (event) => {
    let boardCopy = [...board]
    let tileCoord = event.target.name
    if (boardCopy[tileCoord[0]][tileCoord[1]] === 'B') {
      playerLose()
    } else if (boardCopy[tileCoord[0]][tileCoord[1]] !== 'B') {
      openTile(event)
    }
  }

  //rightMB click
  const clickTileRB = (event) => {
    event.preventDefault()
    let tileCoord = event.target.name
    let playerBoardCopy = [...playerBoard]
    let boardCopy = [...board]
    if (flags >= 0) {
      if (boardCopy[tileCoord[0]][tileCoord[1]] === 'B' && flags > 0) {
        boardCopy[tileCoord[0]][tileCoord[1]] = 'b'
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = 'F'
        setBombs(bombs - 1)
        setBoard(boardCopy)
        setPlayerBoard(playerBoardCopy)
        setFlag(flags - 1)
      } else if (boardCopy[tileCoord[0]][tileCoord[1]] === 'b' && flags > 0) {
        boardCopy[tileCoord[0]][tileCoord[1]] = 'B'
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = ''
        setBombs(bombs + 1)
        setBoard(boardCopy)
        setPlayerBoard(playerBoardCopy)
        setFlag(flags + 1)
      } else if (playerBoardCopy[tileCoord[0]][tileCoord[1]] === 'F' && flags >= 0) {
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = ''
        setPlayerBoard(playerBoardCopy)
        setFlag(flags + 1)
      } else if (flags > 0) {
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = 'F'
        setPlayerBoard(playerBoardCopy)
        setFlag(flags - 1)
      } else if (flags === 0) {
       setInfoBoard('You set too many flags')
        setTimeout(() => {
         setInfoBoard('')
        }, 3000)
      }
    }
  }

  const playerWin = () => {
   setInfoBoard('You Win!')
    setTimeout(() => {
      generateboard()
     setInfoBoard('')
    }, 3000)

  }

  const playerLose = () => {
   setInfoBoard('You Lose')
    setTimeout(() => {
      generateboard()
     setInfoBoard('')
    }, 3000)
  }

  //check win condition
  useEffect(() => {
    let countC = 0;
    playerBoard.forEach((i, j, row) => {
      row[j].forEach((tile, j) => { if (tile === '') { countC += 1 } })
      return true
    })
    if (bombs === 0 && countC === 0) { playerWin() }
  })

  //start game on componentDidMount
  // eslint-disable-next-line
  useEffect(() => { generateboard() }, [])

  return (
    <div className={style.calculator}>
      <div className={style.infoBoard} >
        <textarea disabled readOnly id='infoBoard' value={infoBoard}></textarea>
      </div>
      <div className={style.tiles}>
        {playerBoard.map((t, i, row) => row[i].map((tile, j) => {
          if ((playerBoard[i][j] === 'C') && (typeof board[i][j] === 'number')) { return <div className={style.checked} key={`${i}${j}`} name={`${i}${j}`} value={tile} >{board[i][j] > 0 ? board[i][j] : null}</div> }
          else if (playerBoard[i][j] === 'C') { return <div className={style.checked} key={`${i}${j}`} name={`${i}${j}`} value={tile} ></div> }
          else if (typeof playerBoard[i][j] === 'number') { return <div className={style.checked} key={`${i}${j}`} name={`${i}${j}`} value={tile}>{tile}</div> }
          else if (playerBoard[i][j] === 'F') { return <img src={flagImg} alt='flag' className={style.flag} key={`${i}${j}`} name={`${i}${j}`} value={tile} onContextMenu={clickTileRB}></img> }
          else if (playerBoard[i][j] === '') { return <button className={style.hidden} key={`${i}${j}`} name={`${i}${j}`} value={tile} onClick={clickTileLB} onContextMenu={clickTileRB}>{tile}</button> }
          return ''
        }))
        }
      </div>
    </div>
  )
}
export default GameBoard
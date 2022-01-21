export const getNSizeArray = (n) => [...Array(n).keys()];

export const isGameDraw = (history, size) => history.length === size * size;

export const countAndCheckForWinner = ({history, size}) => {
    let checkObj = {};
    history.forEach(({r, c}) => {
      checkObj[`row${r}`] = (checkObj[`row${r}`] || 0) + 1;
      checkObj[`col${c}`] = (checkObj[`col${c}`] || 0) + 1;
      if(r === c)
        checkObj.diag1 = (checkObj.diag1 || 0) + 1;
      if ( r+c === size - 1)
        checkObj.diag2 = (checkObj.diag2 || 0) + 1;
    })
    const [ winningPattern ] = Object.entries(checkObj).find(([key, value]) => value === 3) || [];
    return winningPattern;
  }
  
export const checkForWin = (history = [], size) => {
    let player1History = [];
    let player2History = [];
    for(let i = 0; i < history.length; i++) {
      if( i % 2 === 0)
        player1History.push(history[i])
      else
        player2History.push(history[i])
    }
    return (
      countAndCheckForWinner({history: player1History, size })
      ||
      countAndCheckForWinner({history: player2History, size })
    );
  }
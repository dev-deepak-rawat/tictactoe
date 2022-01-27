export const getNSizeArray = (n) => [...Array(n).keys()];

export const isGameDraw = (history, gameSize) => history.length === gameSize * gameSize;

/**
 * @param {Array} history history  [{rowIndex:0, colIndex: 0}]
 * @param {Int} gameSize gameSize of the tic tac toe game e.g. 3
 * @returns {String | undefined } winningPattern if any
 * row0 if row 0 win
 * col1 if col 1 win
 * diag1 if win by primary diagonal
 * diag2 if win by secondary diagonal
 */
const countAndCheckForWinner = ({history, gameSize}) => {
    /* Syntax
      checkObj = {
        row0: 1,
        col1: 2,
        diag1: 0,
        diag2: 3
      }
    */
    const checkObj = {};
    history.forEach(({rowIndex, colIndex}) => {
      //check for all row &  column moves in the history array and add them in checkObj
      checkObj[`row${rowIndex}`] = (checkObj[`row${rowIndex}`] || 0) + 1;
      checkObj[`col${colIndex}`] = (checkObj[`col${colIndex}`] || 0) + 1;

      //condition for primary diagonal
      if(rowIndex === colIndex)
        checkObj.diag1 = (checkObj.diag1 || 0) + 1;
      
      //condition for secondary diagonal
      if ( rowIndex+colIndex === gameSize - 1)
        checkObj.diag2 = (checkObj.diag2 || 0) + 1;
    })
    //based on gameSize and checkObj, get the winning pattern
    const [ winningPattern ] = Object.entries(checkObj).find(([key, value]) => value === gameSize) || [];
    return winningPattern;
  }

  /**
   * divide history by player1 history & player2 history
   * @param {Array} history 
   * @param {Int} gameSize 
   * @returns {String | undefined} Winning pattern if any
   */
export const checkForWin = (history = [], gameSize) => {
    let player1History = [];
    let player2History = [];
    history.forEach((historyItem, index) => {
      if( index % 2 === 0)
        player1History.push(historyItem);
      else
        player2History.push(historyItem);
    })
    return (
      countAndCheckForWinner({history: player1History, gameSize })
      ||
      countAndCheckForWinner({history: player2History, gameSize })
    );
  }

export const isEvenLengthArray = arr => arr.length % 2 === 0;

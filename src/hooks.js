import { useDispatch, useSelector } from "react-redux";
import { isEvenLengthArray } from "./components/helper";
import constants from "./constants";

export const useHistory = () => {
    const history = useSelector(store => store.history);
    const dispatch = useDispatch();
    const setHistory = newHistory => dispatch({
        type: constants.SET_HISTORY,
        payload: newHistory
    });
    const getLastPlayer = () => isEvenLengthArray(history) ? 2 : 1;
    const getNextPlayer = () => isEvenLengthArray(history) ? 1 : 2;
    
    return { 
        history,
        setHistory,
        getLastPlayer,
        getNextPlayer
    };
}

export const useWinningPattern = () => {
    const winningPattern = useSelector(store => store.winningPattern);
    const dispatch = useDispatch();
    const setWinningPattern = newWinningPattern => dispatch({
        type: constants.SET_WINNING_PATTERN,
        payload: newWinningPattern
    });
    return { winningPattern, setWinningPattern };
}

export const useGameSize = () => {
    const gameSize = useSelector(store => store.gameSize);
    const dispatch = useDispatch();
    const setGameSize = newGameSize => dispatch({
        type: constants.SET_GAME_SIZE,
        payload: newGameSize
    });
    return { gameSize, setGameSize };
}
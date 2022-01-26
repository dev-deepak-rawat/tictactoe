import { useDispatch, useSelector } from "react-redux";
import constants from "./constants";

export const useHistory = () => {
    const history = useSelector(store => store.history);
    const dispatch = useDispatch();
    const setHistory = newHistory => dispatch({
        type: constants.SET_HISTORY,
        payload: newHistory
    });
    return { history, setHistory };
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
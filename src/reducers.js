import constants from "./constants";

const initStore = {
    gameSize: null,
    history: [],
    //winning pattern can be row0, col1, diag1, diag2 etc
    winningPattern: ''
}

export default (store = initStore, action) => {
    const { type, payload } = action;
    switch(type) {
        case constants.SET_GAME_SIZE:
            return { ...store, gameSize: payload };
        case constants.SET_HISTORY:
            return { ...store, history: payload };
        case constants.SET_WINNING_PATTERN:
            return { ...store, winningPattern: payload };
        case constants.START_NEW_GAME:
            return {
                ...store,
                history: [],
                winningPattern: ''
            }
        default:
            return store;
    }
} 
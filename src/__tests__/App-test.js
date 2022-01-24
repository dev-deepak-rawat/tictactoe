import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('App integration testing', () => {

    it('on enter game size, Reset, undo, reset all button are in the screen, ', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<App />);
        expect(queryByText('Reset')).toBe(null);
        fireEvent.changeText(getByPlaceholderText('Enter Game Size'), '3');
        fireEvent.press(getByText('Enter'));
        getByText('Reset');
        getByText('Undo');
        getByText('Reset All');
    });

    it('Reset button is working', () => {
        const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(<App />);
        fireEvent.changeText(getByPlaceholderText('Enter Game Size'), '3');
        fireEvent.press(getByText('Enter'));
        getByText("Player 1's turn");
        fireEvent.press(getByTestId('cell00'));
        getByText("Player 2's turn");
        fireEvent.press(getByText('Reset'));
        getByText("Player 1's turn");
    });

    it('Reset All button is working', () => {
        const { getByPlaceholderText, getByText, getByTestId, queryByTestId } = render(<App />);
        fireEvent.changeText(getByPlaceholderText('Enter Game Size'), '3');
        fireEvent.press(getByText('Enter'));
        getByText("Player 1's turn");
        fireEvent.press(getByTestId('cell00'));
        getByText("Player 2's turn");
        fireEvent.press(getByText('Reset All'));
        expect(queryByTestId('cell00')).toBe(null);
        getByPlaceholderText('Enter Game Size');
    });

    it('undo button is working', () => {
        const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(<App />);
        fireEvent.changeText(getByPlaceholderText('Enter Game Size'), '3');
        fireEvent.press(getByText('Enter'));
        fireEvent.press(getByTestId('cell00'));
        getByText('O');
        fireEvent.press(getByTestId('undo-button'));
        expect(queryByText('O')).toBe(null);
    });

    it('player 1 won case', () => {
        const { getByPlaceholderText, getByText, getByTestId, getAllByText } = render(<App />);
        fireEvent.changeText(getByPlaceholderText('Enter Game Size'), '3');
        fireEvent.press(getByText('Enter'));
        fireEvent.press(getByTestId('cell00'));
        fireEvent.press(getByTestId('cell10'));
        fireEvent.press(getByTestId('cell01'));
        fireEvent.press(getByTestId('cell11'));
        fireEvent.press(getByTestId('cell02'));
        expect(getAllByText('O').length).toBe(3);
        expect(getAllByText('X').length).toBe(2);
        getByText('Player 1 Won');
    });

    it('Match draw case', () => {
        const { getByPlaceholderText, getByText, getByTestId, getAllByText } = render(<App />);
        fireEvent.changeText(getByPlaceholderText('Enter Game Size'), '3');
        fireEvent.press(getByText('Enter'));
        fireEvent.press(getByTestId('cell00'));
        fireEvent.press(getByTestId('cell11'));
        fireEvent.press(getByTestId('cell02'));
        fireEvent.press(getByTestId('cell01'));
        fireEvent.press(getByTestId('cell10'));
        fireEvent.press(getByTestId('cell20'));
        fireEvent.press(getByTestId('cell21'));
        fireEvent.press(getByTestId('cell12'));
        fireEvent.press(getByTestId('cell22'));
        expect(getAllByText('O').length).toBe(5);
        expect(getAllByText('X').length).toBe(4);
        getByText('Match Draw');
    });
})
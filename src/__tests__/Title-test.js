import React from 'react';
import { render } from '@testing-library/react-native';
import Title from '../components/Title';

describe('Test Game titles', () => {
    it("At first screen should show Player 1's turn", () => {
        const { getByText } = render(<Title winningPattern="" history={[]} size={3} />)
        getByText("Player 1's turn");
    })
    it("if history is equal to size * size then show Match Draw", () => {
        const { getByText } = render(<Title winningPattern="" history={[1,2,3,4,5,6,7,8,9]} size={3} />)
        getByText("Match Draw");
    })
})
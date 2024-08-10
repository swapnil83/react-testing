import { render, screen } from '@testing-library/react';
import LoadableColorList from './LoadableColorList';

test('render color using fetching logic', async () => {
    render(<LoadableColorList />);

    const elList = await screen.findAllByRole('listitem');

    expect(elList).toHaveLength(3);
});
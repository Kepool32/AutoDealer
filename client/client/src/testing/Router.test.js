import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {MemoryRouter} from "react-router-dom";
import App from "../App";


describe('TEST APP', () => {
    test('Router test', () => {
        render(

                <App/>

        );
        const mainLink = screen.getByTestId('about-link')
        const aboutLink = screen.getByTestId('page-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('page-link')).toBeInTheDocument();

    });

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asfasfafasf']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found' +
            '-page')).toBeInTheDocument();
    });
})


import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import Noregist from '../pages/Noregist';
import Ceo_Home from 'shared/Ceo_Home';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;
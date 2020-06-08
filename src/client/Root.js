import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import Noregist from '../pages/Noregist';
import Ceo_Home from 'shared/Ceo_Home';
import Ceo_regist from '../pages/Ceo_regist';
const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;
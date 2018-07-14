import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom'
import {BrowserRouter, Route } from 'react-router-dom'
import './helpers/vendor'
import HomeContainer from "./containers/HomeContainer";
import HeaderComponent from "./components/header/HeaderComponent";
import store from './Store'

render(
    <Provider store={store({})}>
        <BrowserRouter>
            <div style={{height:'100%'}}>
                <HeaderComponent/>
                <Route path='/' component={HomeContainer} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combineReducer from './reducers/index'
import {render} from 'react-dom'
import {BrowserRouter, Route } from 'react-router-dom'
import './helpers/vendor'
import HomeContainer from "./containers/HomeContainer";

const store = createStore(combineReducer);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={HomeContainer} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
module.hot.accept();

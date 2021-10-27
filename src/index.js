import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux' // makes store available for any nested components

import App from './App'
import store from './app/store';
import 'antd/dist/antd.css'
import ScrollToTop from './components/ScrollToTop'

ReactDom.render(
    <Router>
        <Provider store={store}>
            <ScrollToTop>
                <App /> 
            </ScrollToTop>
        </Provider> 
    </Router>, 
    document.getElementById('root')
);
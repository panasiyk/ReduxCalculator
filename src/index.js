import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import addNumber from './reducers/reducer1'
import Number from './components/Number'

let store = createStore(addNumber, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Number />
    </Provider>,
    document.getElementById('root')
);
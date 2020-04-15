// External imports
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Asset imports
import 'bulma/css/bulma.css'
import './styles.scss'

// Local imports
import App from './App'
import { reducer } from './reducers/index'

const store = createStore( reducer )
const rootElement = document.getElementById('root')

ReactDOM.render( <Provider store={store}><App /></Provider>, rootElement )
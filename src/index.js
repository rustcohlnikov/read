import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import AppRouter from './routes'
import initStore from './store/initStore'

import 'bulma/css/bulma.css'
import './styles/App.css'

import registerServiceWorker from './registerServiceWorker'

const store = initStore()
const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
)


ReactDOM.render(jsx, document.getElementById('root'))

registerServiceWorker()

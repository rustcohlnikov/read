import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import AppRouter from './routes'
import configureStore from 'Store/configureStore'
import {loadPosts} from 'Store/actions/posts'

import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
store.dispatch(loadPosts())

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
)


ReactDOM.render(jsx, document.getElementById('root'))

registerServiceWorker()

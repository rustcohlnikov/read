import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import postsReducer from './reducers/posts'

export default () => {
	const store = createStore(
		combineReducers({
			posts: postsReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunk)
	)

	return store
}
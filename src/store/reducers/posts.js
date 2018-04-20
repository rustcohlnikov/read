import * as actionType from '../actions/actionTypes'
import defaultState from './defaultState'

export default (state = defaultState.items, action) => {  
	switch(action.type) {
	case actionType.LOAD_POSTS_BEGIN:
		return {
			items: [],
			loading: true,
			error: false
		}
	case actionType.LOAD_POSTS_SUCCESS:
		return {
			items: action.posts,
			loading: false,
			error: false
		}
	case actionType.LOAD_POSTS_ERROR:
		return {
			error: true
		}
	default: 
		return state
	}
}
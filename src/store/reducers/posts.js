import * as actionType from '../actions/actionTypes'
import defaultState from './defaultState'

export default (state = defaultState.items, action) => {  
	switch(action.type) {
	case actionType.LOAD_POSTS_BEGIN:
		return {
			loading: true
		}
	case actionType.LOAD_POSTS_SUCCESS:
		return {
			items: action.payload.posts,
			loading: false
		}
	default: 
		return state
	}
}
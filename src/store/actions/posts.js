import client from '../../plugins/client'
import * as actionType from './actionTypes'

export const loadPosts = () => {	
	return function (dispatch) {
		dispatch(loadPostsBegin())
		client
			.get('/posts')
			.then(response => {
				dispatch(loadPostsSuccess(response.data))
			})
	}
}

export function loadPostsSuccess(posts) {
	return {
		type: actionType.LOAD_POSTS_SUCCESS, 
		posts
	}
}

export function loadPostsBegin(posts) {
	return {
		type: actionType.LOAD_POSTS_BEGIN
	}
}
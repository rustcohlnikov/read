import client from '../../plugins/client'
import * as actionType from './actionTypes'
import posts from '../../plugins/client/mock'

export const loadPosts = () => {
	return {
		type: actionType.LOAD_POSTS_SUCCESS, 
		payload: { posts }
	}
}

// TODO: handle async post request
/* export function loadPostsSuccess(posts) {  
	return {
		type: actionType.LOAD_POSTS_SUCCESS, 
		payload: { posts }
	}
} */
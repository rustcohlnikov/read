import client from 'Plugins/client'
import {normalizePosts} from 'Plugins/adapter'
import * as actionType from './actionTypes'

export const loadPosts = () => {
	return function (dispatch) {
		dispatch(loadPostsBegin())
		client
			.getEntries()
			.then(response => {
				const posts = normalizePosts(response.items)
				dispatch(loadPostsSuccess(posts))
			})
			.catch(error => {
				dispatch(loadPostsError(error))
			})
	}
}

export function loadPostsSuccess(posts) {
	return {type: actionType.LOAD_POSTS_SUCCESS, posts}
}

export function loadPostsBegin(posts) {
	return {type: actionType.LOAD_POSTS_BEGIN}
}

export function loadPostsError(posts) {
	return {type: actionType.LOAD_POSTS_ERROR}
}
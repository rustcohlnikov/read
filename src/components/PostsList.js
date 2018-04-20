import React from 'react'
import {connect} from 'react-redux'
import selectPosts from '../store/selectors/posts'

import Post from './Post'

const PostsList = (props) => (
	<div>
		<p>{props.error ? 'Error' : null}</p>
		<p>{props.loading ? 'loading...' : null}</p>
		{
			(!props.loading && !props.error && props.posts.length > 0) && props.posts.map((post) => {
				return (<Post key={post.id} {...post} />)
			})
		}
	</div>
)

export default connect(
	(state) => ({
		posts: state.posts.items,
		loading: state.posts.loading,
		error: state.posts.error
	})
)(PostsList)
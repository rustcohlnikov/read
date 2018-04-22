import React from 'react'
import {connect} from 'react-redux'
import selectPosts from '../store/selectors/posts'

import Post from './Post'
import Spinner from './Spinner'

const PostsList = (props) => (
	<div>
		<p>{props.error ? 'Error' : null}</p>
		<div className="text-center">{props.loading ? <Spinner/> : null}</div>
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
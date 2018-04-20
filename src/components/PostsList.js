import React from 'react'
import {connect} from 'react-redux'
import selectPosts from '../store/selectors/posts'

import Post from './Post'

const PostsList = (props) => (
	<div>
		{
			props.posts.length > 0 && props.posts.map((post) => {
				return (
					<Post key={post.id} {...post} />
				)
			})
		}
    
		<p>{props.loading ? 'loading' : 'loaded'}</p>
	</div>
)

const mapStateToProps = (state) => ({
	posts: state.posts.items,
	loading: state.posts.loading
})

export default connect(mapStateToProps)(PostsList)
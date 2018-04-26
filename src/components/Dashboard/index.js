import React from 'react'
import {connect} from 'react-redux'
import selectPosts from 'Store/selectors/posts'

import style from './style.scss'

import Post from 'Components/Post'
import Spinner from 'Components/Spinner'

const Dashboard = (props) => (
	<div className={style.dashboard}>
		{props.error ? <p>Error</p> : null}
		{props.loading ? <div className="text-center"><Spinner/></div> : null}
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
)(Dashboard)
import React from 'react'
import {connect} from 'react-redux'

const View = (props) => (
	<div>
		<h1>
			{  props.post && props.post.title }
		</h1>
		<p>
    View post {props.match.params.id}
		</p>
	</div>
)
export default connect(
	(state, props) => {
		const post = state.posts.items.find((item) => {
			item.id === props.match.params.id
		})
		return { post }
	})(View)
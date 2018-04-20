import React from 'react'
import {connect} from 'react-redux'

const View = (props) => (
	<div>
		<h1>
			{ props.title }
		</h1>
		<p>
			{ props.body }
		</p>
	</div>
)
export default connect(
	(state, props) => {
		//TODO: switch to === some day
		const post = state.posts.items.find(item => item.id == props.match.params.id)
		return { ...post }
	})(View)
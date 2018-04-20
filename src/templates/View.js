import React from 'react'
import {connect} from 'react-redux'

const View = (props) => (
	<div>
		<h1>
			{ props.post.title }
		</h1>
		<p>
    View post {props.match.params.id}
		</p>
	</div>
)

const mapStateToProps = (state, props) => {
	return {
		post: state.posts.items.find((post) => post.id === props.match.params.id)
	}
}

export default connect(mapStateToProps)(View)
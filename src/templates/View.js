import React from 'react'
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'

const View = (props) => (
	<div className="view">
		<div className="view__heading">
			<small class="text-muted">10/05/2018</small>
			<h2 className="view__title">
				{ props.title }
			</h2>
		</div>
		<div className="view__body">
			{renderHTML(props.body)}
		</div>
	</div>
)
export default connect(
	(state, props) => {
		//TODO: switch to === some day
		const post = state.posts.items.find(item => item.id == props.match.params.id)
		return { ...post }
	})(View)
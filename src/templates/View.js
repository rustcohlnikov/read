import React from 'react'
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'

import {Link} from 'react-router-dom'

const View = (props) => (
	<div className="view">
		<div className="view__meta row between-xs middle-xs">
			<div className="col-xs">
				<p className="view__arrow">
					<Link to="/" exact={true}>&larr;</Link>
				</p>
			</div>
			<div className="col-xs text-right">
				<small class="text-muted">10/05/2018</small>
			</div>
		</div>	
		<h2 className="view__title">
			{ props.title }
		</h2>
		<div className="view__body">      
			{ props.body }
		</div>
	</div>
)
export default connect(
	(state, props) => {
		//TODO: switch to === some day
		const post = state.posts.items.find(item => item.id == props.match.params.id)
		return { ...post }
	})(View)
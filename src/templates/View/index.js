import React from 'react'
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'
import { animateScroll as scroll } from 'react-scroll'

import {Link} from 'react-router-dom'

class View extends React.Component {  
	componentDidMount () {
		scroll.scrollToTop()
	}

	render () {
		return (
			<div className="view section">
				<div className="view__meta row between-xs middle-xs">
					<div className="col-xs">
						<p className="view__arrow">
							<Link to="/">&larr;</Link>
						</p>
					</div>
					<div className="col-xs text-right">
						<small className="text-muted">10/05/2018</small>
					</div>
				</div>	
				<h2 className="view__title">
					{ this.props.title }
				</h2>
				<div className="view__body">      
					{ this.props.body }
				</div>
			</div>
		)
	}
}

export default connect(
	(state, props) => {
		//TODO: switch to === some day
		const post = state.posts.items.find(item => item.id == props.match.params.id)
		return { ...post }
	})(View)
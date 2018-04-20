import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'

class Post extends Component {
	render () {
		return (
			<div className="post">
				<div className="post__heading">
					<small class="text-muted">10/05/2018</small>
					<h2 className="post__title">
						<Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
					</h2>
				</div>
				
				<div className="post__body">
					{ this.props.body }
				</div>
			</div>
		)
	}
}

export default Post
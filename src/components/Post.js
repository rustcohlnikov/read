import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'

class Post extends Component {
	render () {
		return (
			<div className="post">
				<h2 className="subtitle">
					{this.props.title}
				</h2>
				<div className="post__body">
					{renderHTML(this.props.content)}
				</div>
				<Link to={`/post/${this.props.id}`}>Read more</Link>
			</div>
		)
	}
}

export default Post
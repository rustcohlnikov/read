import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'

class PostItem extends Component {
	render () {
		return (
			<div className="post">
				<h2 className="subtitle">
					{this.props.post.title}
				</h2>
				<div className="post__body">
					{renderHTML(this.props.post.content)}
				</div>
			</div>
		)
	}
}

export default PostItem
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'
import './style.css'
import style from './style.css'

class Post extends Component {
	render () {
		return (
			<div className={style.post}>
				<div className={style.postHeading}>
					<small className="text-muted">10/05/2018</small>
					<h2 className={style.postTitle}>
						<Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
					</h2>
				</div>
				
				<div className={style.postBody}>
					{ this.props.body }
				</div>
			</div>
		)
	}
}

export default Post
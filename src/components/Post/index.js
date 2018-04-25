import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'

import style from './style.css'
import font from 'Styles/typography.css'

class Post extends Component {
	render () {
		return (
			<div className={style.container}>
				<div className={style.heading}>
					<small className={font.secondary}>10/05/2018</small>
					<h2 className={`${style.title} ${font.sans} ${font.large}`}>
						<Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
					</h2>
				</div>
				
				<div className={font.serif}>
					{ this.props.body }
				</div>
			</div>
		)
	}
}

export default Post
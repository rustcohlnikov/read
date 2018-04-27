import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

import style from './style.scss'

class Post extends Component {
	render () {
		return (
			<div className={style.container}>
				<div className={style.heading}>
					<small className={style.date}>10/05/2018</small>
					<h2 className={classNames(style.title, {[style.bigger]: this.props.view})}>
						<Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
					</h2>
				</div>
				
				<div className={style.body}>
					{ this.props.body }
				</div>
			</div>
		)
	}
}

export default Post
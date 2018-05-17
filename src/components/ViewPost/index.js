import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

import Post from 'Components/Post'
import style from './style.scss'

class ViewPost extends Component {
	render () {
		return (
			<div>
				<div className="row between-xs middle-xs">
					<div className="col-xs-10">
						<p className={style.arrow}>
							<Link to="/">&larr;</Link>
						</p>					
					</div>
				</div>
				<Post {...this.props} view/>
			</div>
			
		)
	}
}

export default ViewPost
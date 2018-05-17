import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

import Post from 'Components/Post'
import style from './style.scss'

class DashboardPost extends Component {
	render () {
		return (
			<div>
				<Post {...this.props} />
			</div>
			
		)
	}
}

export default DashboardPost
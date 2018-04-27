import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

import Post from 'Components/Post'

class ViewPost extends Component {
	render () {
		return (
			<Post {...this.props} view/>
		)
	}
}

export default ViewPost
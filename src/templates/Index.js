import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'

import PostsList from '../components/PostsList'
import client from '../plugins/client'

class Index extends Component {
	render () {
		return (
			<div>
				<PostsList></PostsList>
			</div>
		)
	}
}

export default Index
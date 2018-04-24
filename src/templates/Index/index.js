import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'

import Dashboard from 'Components/Dashboard'
import client from 'Plugins/client'

class Index extends Component {
	render () {
		return (
			<div>
				<Dashboard></Dashboard>
			</div>
		)
	}
}

export default Index
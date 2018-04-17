import React, { Component } from 'react'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'

import PostItem from '../components/PostItem'
import data from '../mock'
import client from '../plugins/client'

class PostContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: []
		}
	}

	componentDidMount () {
		client.getPosts().then(data => {
			const posts = data
			this.setState(() => ({ posts }))
		})
	}

	render () {
		return (
			<div>
				{this.state.posts.length > 0 && this.state.posts
					.map((post, index) => (
						<PostItem key={index} post={post}></PostItem>
					))
				}
			</div>
			
		)
	}
}

export default PostContainer
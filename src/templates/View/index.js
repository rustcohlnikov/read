import React from 'react'
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'
import { animateScroll as scroll } from 'react-scroll'

import {Link} from 'react-router-dom'


import ViewPost from 'Components/ViewPost'
import style from './style.scss'

class View extends React.Component {  
	componentDidMount () {
		scroll.scrollToTop()
	}

	render () {
		return (
			<div className={style.container}>
				<div className="row between-xs middle-xs">
					<div className="col-xs">
						<p className={style.arrow}>
							<Link to="/">&larr;</Link>
						</p>
					</div>
				</div>	
				<ViewPost {...this.props}/>
			</div>
		)
	}
}

export default connect(
	(state, props) => {
		//TODO: switch to === some day
		const post = state.posts.items.find(item => item.id == props.match.params.id)
		return { ...post }
	})(View)
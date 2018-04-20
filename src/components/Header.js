import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => (
	<header className="container">
		<nav>
			<ul>
				<li>
					<NavLink activeClassName="link is-active" to="/" exact={true}>Home</NavLink>
				</li>
			</ul>
		</nav>
	</header>
)
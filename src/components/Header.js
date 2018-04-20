import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => (
	<header className="header container">
		<div className="row center-xs">
			<div className="col-xs">
				<div className="box">
					<a className="header__item text-muted" href="#">Link</a>
					<NavLink className="logo" to="/" exact={true}>Logo</NavLink>
					<a className="header__item text-muted" href="#">Link</a>
				</div>
			</div>
		</div>
	</header>
)
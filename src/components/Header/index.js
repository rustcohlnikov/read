import React from 'react'
import style from './style.css'

import Logo from 'Components/Logo'

export default () => (
	<header className={style.nav}>
		<div className="row middle-xs between-xs">
			<div className="col-xs-2">
				<div className="row start-xs middle-xs">
					<Logo/>
				</div>
			</div>
		</div>
	</header>
)
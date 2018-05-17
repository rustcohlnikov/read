import React from 'react'
import {
	BrowserRouter, 
	Route, 
	Switch, 
	Redirect
} from 'react-router-dom'

import Header from 'Components/Header'
import Footer from 'Components/Footer'

import Index from 'Templates/Index'
import View from 'Templates/View'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<div className="container">
				<div className="row">
					<div className="col-xs-7">
						<div className="row start-xs">
							<div className="col-xs">
								
							</div>
						</div>
						<div className="row start-xs">
							<div className="col-xs">
								<Switch>
									<Route path="/" component={Index} exact={true} />
									<Route path="/post/:id" component={View} />
									<Redirect from='*' to='/' />
								</Switch>
							</div>
						</div>
						<Footer/>
					</div>
				</div>
			</div>
		</div>
	</BrowserRouter>
)

export default AppRouter
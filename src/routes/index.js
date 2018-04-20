import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Index from '../templates/Index'
import View from '../templates/View'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<div className="container">
				<div class="row center-xs">
					<div class="col-xs-8">
						<Header/>
						<div class="row start-xs">
							<div class="col-xs">
								<Switch>
									<Route path="/" component={Index} exact={true} />
									<Route path="/post/:id" component={View} />
									<Redirect from='*' to='/' />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	</BrowserRouter>
)

export default AppRouter
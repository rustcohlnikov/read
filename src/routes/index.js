import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Index from '../templates/Index'
import View from '../templates/View'

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<section className="section">
				<div className="container">
					<Switch>
						<Route path="/" component={Index} exact={true} />
						<Route path="/post/:id" component={View} />
						<Redirect from='*' to='/' />
					</Switch>
				</div>
			</section>
			<Footer/>
		</div>
	</BrowserRouter>
)

export default AppRouter
import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import PostContainer from '../components/PostContainer'
import About from '../components/About'
import Post from '../components/Post'
import NotFound from '../components/NotFound'

const Header = () => (
	<header className="container">
		<nav className="level">
			<div className="level-left">
				<p className="level-item">
					<span className="title">RL/RN</span>
				</p>
			</div>
			<div className="level-right">
				<p className="level-item">
					<NavLink activeClassName="link is-active" to="/" exact={true}>Home</NavLink>
				</p>					
				<p className="level-item">
					<NavLink activeClassName="link is-active" to="/about">About</NavLink>
				</p>
			</div>
		</nav>
	</header>
)

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="content has-text-centered">
				<p>
					Made with <strong>love</strong> in Almaty
				</p>
			</div>
		</div>
	</footer>
)

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<section className="section">
				<div className="container">
					<Switch>
						<Route path="/" component={PostContainer} exact={true} />
						<Route path="/post/:id" component={Post} />
						<Route path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</section>
		</div>
	</BrowserRouter>
)

export default AppRouter
import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Routes,Navigate,Link} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
	render() {
		return (
				<div>
					<h3>我是Home的内容</h3>
					<div>
						<ul className="nav nav-tabs">
							<li>
							<Link to="/home/news">News</Link>
							</li>
							<li>
								<MyNavLink to="/home/message">Message</MyNavLink>
							</li>
						</ul>
						{/* 注册路由 */}
						<Routes>
							<Route path="/home/news" element={<News/>}/>
							<Route path="/home/message" element={<Message/>}/>
							<Route path ="/home/" element={<Navigate   to="/home/news" />} />
						</Routes>
					</div>
				</div>
			)
	}
}

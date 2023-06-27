import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom'
import MyNavLink from '../../../components/MyNavLink'
import Detail from './Detail'

export default class Message extends Component {
	state = {
		messageArr:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'},
		]
	}
	render() {
		const {messageArr} = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									{/* 向路由组件传递params参数 */}
									<MyNavLink to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</MyNavLink>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				<Routes>
					<Route path="detail/:id/:title" element ={<Detail/>}/>
				</Routes>
				
			</div>
		)
	}
}

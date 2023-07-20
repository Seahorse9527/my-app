import React from 'react'
import {Link,Route,Routes,useNavigate} from 'react-router-dom'
import Detail from './Detail'
import { useState } from 'react';

export default function Message () {
	const navigate = useNavigate();

		
	
	const {messageArr=[
		{id:'01',title:'消息1'},
		{id:'02',title:'消息2'},
		{id:'03',title:'消息3'},
	]} = useState;
	function replaceShow (id,title){
		//replace跳转+携带params参数
		//this.props.history.replace(`/home/message/detail/${id}/${title}`)

		//replace跳转+携带search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		//replace跳转+携带state参数
		navigate(`/home/message/detail`,{state:{id,title}, replace: true})
	}

	function pushShow  (id,title){
		//push跳转+携带params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		//push跳转+携带search参数
		// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

		//push跳转+携带state参数
		navigate(`/home/message/detail`,{state:{id,title}})
		
	}

	function back (){
		navigate(-1)
	}

	function forward (){
		navigate(1)
	}

	function go (){
		navigate(2)
	}

	
		
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>

									{/* 向路由组件传递params参数 */}
									{/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

									{/* 向路由组件传递search参数 */}
									{/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

									{/* 向路由组件传递state参数 */}
									<Link  to={`/home/message/detail`} state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>
									&nbsp;<button onClick={()=> pushShow(msgObj.id,msgObj.title)}>push查看</button>
									&nbsp;<button onClick={()=> replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

				{/* search参数无需声明接收，正常注册路由即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* state参数无需声明接收，正常注册路由即可 */}
				<Routes>
				<Route path="detail" element={<Detail/>}/>
				</Routes>
				<button onClick={back}>回退</button>&nbsp;
				<button onClick={forward}>前进</button>&nbsp;
				<button onClick={go}>go</button>

			</div>
		)
	
}

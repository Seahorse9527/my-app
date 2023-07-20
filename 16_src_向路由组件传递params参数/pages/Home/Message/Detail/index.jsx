import React from 'react'
import {useLocation} from "react-router-dom";

// import qs from 'querystring'

const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default function Detail () {
	    const {state:{id,title}}= useLocation();
		
			console.log(id , title);
		
		
		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		}) ||{}
		return (
			<ul>
				<li>hello</li>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
		<li>CONTENT:{findResult.content}</li>
			</ul>
		)
	}


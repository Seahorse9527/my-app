import React from 'react'
import {useSearchParams} from "react-router-dom"
const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default function Detail () {
	
		const [searchParams] = useSearchParams();
		//console.log(searchParams?.get("id"))
		const id =  searchParams.get('id');
        const {title} =  searchParams.get("title");
		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		})
		return (
			<ul>
				<li>ID:</li>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{findResult.content}</li>
			</ul>
		)
	}


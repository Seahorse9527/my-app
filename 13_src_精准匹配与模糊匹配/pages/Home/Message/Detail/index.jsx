import React from 'react'
import {useParams} from "react-router-dom";


//const DetailData = [
//	{id:'01',content:'你好，中国'},
//	{id:'02',content:'你好，尚硅谷'},
//	{id:'03',content:'你好，未来的自己'}
	
//]


  export default function  Detail () {
	
	
	
			const params = useParams();
            const id=params.id;
			const title=params.title;

			return <h2>{id}<br />{title}</h2>
		}
       
		
	
	
	
	

//引入react核心库
import React from 'react'
//引入ReactDOM
//
import {BrowserRouter} from 'react-router-dom'
//引入App
import App from './App'

import {createRoot} from "react-dom/client";
const  container =document.getElementById("root");
const root =createRoot(container);
root.render(<BrowserRouter><App/></BrowserRouter>);
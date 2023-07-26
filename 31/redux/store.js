/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
//引入汇总之后的reducer
//引入redux-thunk，用于支持异步action
//引入redux-devtools-extension
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/index"

export default configureStore({
  reducer: counterReducer,

})
//暴露store 
//export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
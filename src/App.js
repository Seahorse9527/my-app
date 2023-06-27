//在组件内部，使用useState和useDispatch可以直接获取state数据与dispatch方法
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, asyncIncrement } from './store/features/counterSlice'; // 引入actions
function App() {
 const { count } = useSelector((state) => state.counter);
 const dispatch = useDispatch();
 return (
 <div className='App'>
 <button
 onClick={() => {
 dispatch(increment({ step:21})); // dispatch派发action
        }}
 >
        {count}
 </button>
 <hr />
 <button
 onClick={() => {
 dispatch(asyncIncrement({ step: 2 }));
        }}
 >
        {count}
 </button>
 </div>
  );
}
export default App;
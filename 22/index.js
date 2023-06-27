import React from 'react';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import CustomCounter from './add'
import mySaga from './sagas';
import {createRoot} from "react-dom/client";
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    //middleware: (getDefaultMiddleware) => 
    //getDefaultMiddleware().concat(sagaMiddleware),
  })
 sagaMiddleware.run(mySaga);
  
 
const  container =document.getElementById("root");
const root =createRoot(container);
root.render(<Provider store={store}><CustomCounter /></Provider>);

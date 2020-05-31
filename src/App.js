/*
 * @Author: your name
 * @Date: 2020-05-27 21:56:14
 * @LastEditTime: 2020-05-30 15:06:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redux-demo/src/App.js
 */ 
import React from 'react';
import store from './store'
// import Home from './pages/home'
import ComA from './pages/ComA'
import ComB from './pages/ComB'
import {Provider} from 'react-redux'
import 'antd/dist/antd'
//导入ProVide人组件,利用这个组件包裹我们的结构,从而能够达到统一维护state的效果
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA/>
        <ComB/>
      {/* <Home/> */}
      </div>
    </Provider>
  );
}

export default App;

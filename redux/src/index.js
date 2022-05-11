import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

// store 存放数据的仓库
// state 数据仓库当中存储的数据
// action 对象
// dispatch store.dispatch(action)
// reducer 函数

// 目录提取 action reduce
// import { addAction, squareAction } from './actions/index'
// import reducer from './reduces';

import store from './store';

// 容器组件
import { Provider } from 'react-redux';

import Container from './components/container';

// 展示组件和容器组件
function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

// console.log(store.getState()) // 10
// 返回的是 action
// console.log(store.dispatch(addAction(1))); 
// console.log(store.dispatch(squareAction())); 
// console.log(store.getState()) // 11

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

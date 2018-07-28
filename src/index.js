import  "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';
import reducers  from './reducer/index.js';
import Main from './pages/layout.js';
import Login from './pages/login.js';
moment.locale('zh-cn');
const store = createStore(reducers);

if(navigator.userAgent.indexOf('MSIE 9.0') !== -1){
    alert("你的浏览器版本过低,请下载最新版本,或使用谷歌浏览器体验最好的效果");
    window.location.href = 'https://www.google.cn/intl/zh-CN/chrome/';
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/main' component={Main}></Route>
                        <Redirect to='/login'></Redirect>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
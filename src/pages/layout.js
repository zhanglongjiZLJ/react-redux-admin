import React, { Component} from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { LocaleProvider, Layout, Menu, Icon } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {connect} from "react-redux";
import { logout } from "../redux/login.redux";
import User from './user.js'
import Video from "./video.js";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


@connect(
    state=>state.auth,
    { logout }
)
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            collapsed: false
        };
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        const match = this.props.match;
        const app = (
            <LocaleProvider locale={zhCN}>
                <Layout style={{ height: "100%" }}>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to={`${match.url}`}>
                                    <Icon type="user" />
                                    <span>用户管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={`${match.url}/video`}>
                                    <Icon type="video-camera" />
                                    <span>视频管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>文件上传</span>
                            </Menu.Item>
                            <SubMenu key="4" title={<span><Icon type="mail" /><span>邮箱管理</span></span>}>
                                <Menu.Item key="4-1">邮箱查询</Menu.Item>
                                <Menu.Item key="4-2">邮箱修改</Menu.Item>
                            </SubMenu>
                            <SubMenu key="5" title={<span><Icon type="appstore" /><span>界面管理</span></span>}>
                                <Menu.Item key="5-1">Option 5</Menu.Item>
                                <Menu.Item key="5-2">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="10">Option 7</Menu.Item>
                                    <Menu.Item key="11">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="6" title={<span><Icon type="setting" /><span>设置</span></span>}>
                                <Menu.Item key="6-1">Option 9</Menu.Item>
                                <Menu.Item key="6-2">Option 10</Menu.Item>
                                <Menu.Item key="6-3">Option 11</Menu.Item>
                                <Menu.Item key="6-4">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle.bind(this)}
                            />
                            <Icon type="logout" onClick={ this.props.logout } style={{ fontSize: 18,float: 'right',lineHeight: '64px',padding: '0 24px',cursor: 'pointer' }} />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Route path={`${match.url}`} exact component={User}></Route>
                            <Route path={`${match.url}/video`} exact component={Video}></Route>
                        </Content>
                    </Layout>
                </Layout>
            </LocaleProvider>
        );
        const login = <Redirect to='/login'></Redirect>;
        return this.props.isAuth?app:login;
    }
}
export default Main;
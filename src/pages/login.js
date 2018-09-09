import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox  } from 'antd';
import { login } from '../redux/login.redux';
import { Redirect } from 'react-router-dom';
import '../assets/css/login.css'
const FormItem = Form.Item;

@connect(
    state=>state.auth,
    { login }
)
class Auth extends Component{
    state = {
        loading: false,
        loadText: '登录'
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                console.log(this.props.login)
                this.setState({loading: true});
                this.setState({loadText: "登录中..."});
                setTimeout(()=>{
                    this.props.login();
                },2000);

            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrap">
                { this.props.isAuth?<Redirect to='main' />:null }
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名1' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} autoComplete="off" autoFocus placeholder="Username" />
                        )}
                    </FormItem>
                    <input type="hidden"/>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码2' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" autoComplete="off" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                            {this.state.loadText}
                        </Button>
                        <a href="">注册</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(Auth);
export default WrappedNormalLoginForm;

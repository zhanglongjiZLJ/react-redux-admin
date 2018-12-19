import React,{ Component} from 'react';
import {Button} from "antd";

class Video extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: 1
        }
    }
    click(number){
        this.setState({
            number: ++number
        })
        console.log(this.state.number)
    }
    render(){
        return(
            <div>
                视频管理页面
                <Button type="primary" className="login-form-button" onClick={this.click.bind(this,this.state.number)}>
                    点击
                </Button>
            </div>
        )
    }
}
export default Video;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { addFun, subFun } from "../redux/counter.redux";

@connect(
    state=>({num:state.counter}),
    { addFun, subFun }
)
class counter extends Component {
    render() {
        return (
            <div>
                <Button.Group size="large">
                    <Button type="primary" onClick={this.props.addFun}>
                        加
                    </Button>
                    <Button type="primary" onClick={this.props.subFun}>
                        减
                    </Button>
                </Button.Group>
                <h1>当前数值{this.props.num}</h1>
            </div>
        );
    }
}

export default counter;

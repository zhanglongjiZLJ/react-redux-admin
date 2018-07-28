import React,{ Component} from 'react';
import Counter from '../components/counter.js';

class User extends Component{
    render(){
        return(
            <div>
                用户管理页面
                <Counter />
            </div>
        )
    }
}
export default User;
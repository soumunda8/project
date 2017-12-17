import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import './Login.css';

class Login extends React.Component {
    
    constructor(){
    super();
        
    this.state = {
        username : '',
        userpass : ''
        }
        
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserPass = this.handleUserPass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUserName(e){
//        console.log(e.target.value)
        this.setState({ username : e.target.value });
    }
    
    handleUserPass(e){
//        console.log(e.target.value)
        this.setState({ userpass : e.target.value });
    }
    
    handleSubmit(){
        axios.post('http://localhost:4000/login', {
            username : this.state.username, 
            userpass : this.state.userpass })
        .then((response)=>{
//            console.log(response.data);
            let { success, error } = response.data;
            let { history } = this.props;
            
            if (success === 1 ) {
//                this.props.history.push('/company');
                history.push('/company');
                // push를 사용한 이유는 뒤로가기를 하기 위해서
            } else if ( success === 2 ) {
//                this.props.history.push('/register');
                history.push('/register');
            } else if ( error === -1 ) {
                return;
            }
        });
    }
    
    render(){
        return(
            <div className="login-bg">
                <div className="login">
                    <Form>
                        <Form.Field>
                            <label>User Name</label>
                            <input type="text" placeholder='User Name' onChange={this.handleUserName} />
                        </Form.Field>
                        <Form.Field>
                            <label>User Password</label>
                            <input type='password' placeholder='User Password' onChange={this.handleUserPass} />
                        </Form.Field>
                        <Button onClick={this.handleSubmit} >Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;
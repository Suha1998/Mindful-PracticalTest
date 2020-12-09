import React, { Component } from 'react';
import {login} from './UserFunctions.Component';
import '../../css/Register.css';
import { Link } from 'react-router-dom';


class Login extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/popular')
            }
        })
    }
     

    render() {
        return (
            <div className = "container">
                <br/><br/>
                  <div class = "signup-form">
                <form onSubmit={this.onSubmit} action= "/examples/action/confirmation.php" method="post">
                  <h2>Sign In</h2>
		          <p>Please fill in this form to Log in </p>
		          <hr/>

                  <div class="form-group">
			        <div class="input-group">
				      <div class="input-group-prepend">
					    <span class="input-group-text">
						 <i class="fa fa-paper-plane"></i>
					    </span>                    
				      </div>
                   <input type="email" class="form-control" name="email" placeholder="Email Address" 
                   value = {this.state.email} 
                   onChange = {this.onChange} 
                   required="required"/>
			       </div>
                  </div>

                  <div class="form-group">
			        <div class="input-group">
				      <div class="input-group-prepend">
					  <span class="input-group-text">
						<i class="fa fa-lock"></i>
					  </span>                    
				      </div>
                      <input type="password" class="form-control" name="password" placeholder="Password" 
                      value={this.state.password}
                      onChange={this.onChange}
                      required="required"/>
			        </div>
                  </div>

		          <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Sign In
                    </button>
                  </div>
                </form>
                <div class="text-center">Haven't any account? 
                <Link to='/register'>Create an account</Link>
                </div>

            </div>
                
               
            </div>




        )
    }
}

export default Login;
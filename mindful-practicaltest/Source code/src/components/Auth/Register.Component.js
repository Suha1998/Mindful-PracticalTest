import React, { Component } from 'react';
import {register} from './UserFunctions.Component';
import { Link } from 'react-router-dom';
import '../../css/Register.css';


class Register extends Component {

    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }
        
        
        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
    }
     

    render() {
        return (
            <div className = "container">
                <br/><br/>
                 <div class = "signup-form">
                <form onSubmit={this.onSubmit} action= "/examples/action/confirmation.php" method="post">
                  <h2>Sign Up</h2>
		          <p>Please fill in this form to create an account!</p>
		          <hr/>

                  <div class="form-group">
			        <div class="input-group">
				      <div class="input-group-prepend">
					    <span class="input-group-text">
						  <span class="fa fa-user"></span>
					    </span>                    
				      </div>
                      <input type="text" class="form-control" name="first_name" placeholder="First Name" 
                      value = {this.state.first_name}
                      onChange = {this.onChange}
                      required="required"/>
			       </div>
                  </div>

                  <div class="form-group">
			        <div class="input-group">
				      <div class="input-group-prepend">
					    <span class="input-group-text">
						  <span class="fa fa-user"></span>
					    </span>                    
				      </div>
                      <input type="text" class="form-control" name="last_name" placeholder="Last Name" 
                      value = {this.state.last_name}
                      onChange = {this.onChange}
                      required="required"/>
			       </div>
                  </div>
                  
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
                      value = {this.state.password}
                      onChange = {this.onChange}
                      required="required"/>
			        </div>
                  </div>

		          <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Sign Up
                    </button>
                  </div>
                </form>
                <div class="text-center">Already have an account? 
                <Link to='/login'>Login here</Link>
                </div>

            </div>
                
            </div>
        )
    }
}

export default Register;
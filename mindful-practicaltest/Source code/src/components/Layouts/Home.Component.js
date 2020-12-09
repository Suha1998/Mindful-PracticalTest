import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Home extends Component{
    render(){
        return(
              <div className="container">
              <div class="p-5 rounded mt-3">
                 <h1>Welcome</h1>
                 <p class="lead">To view the events page, You need to login first.</p>
                 <button class="btn btn-dark">
                 <Link to='/login'>
                      Login
                 </Link>
                </button>
              </div>
             </div>
           
        )
    }
}

export default Home;
import React from 'react'
import { Link , withRouter } from 'react-router-dom'


const isActive = (history, path) =>{
  
    if(history.location.pathname===path){
      return {color: '#1E8449'};
    }
    else{
      return {color: '#2E4053'};
    }
  }

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link style={isActive(props.history, '/signup')} class="nav-link" to='/signup'>Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={isActive(props.history, '/signin')} class="nav-link" to="/signin">Connexion</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default withRouter(Navbar)
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../assets/styles/navbar.css';

class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                <Link className="Navbar__brand" to="/home">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>
                </div>
            </div>
        );
    }
}

export default Navbar
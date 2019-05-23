import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';

import "./jumbo.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'



class Jumbo extends Component {

    render() {
        return (
            <div className='fu'>
                <Jumbotron>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className='webName'><FontAwesomeIcon icon={['fa', 'camera-retro']} /> iiMage</h1>
                    <p>
                        Each photo you take represents a split-second in time that can never be recaptured. That photo has the potential to shape memories for generations to come.
                    </p>
                    <br />
                    <p>
                        <Link to="/SignUp">
                        <MDBBtn ><span className="loginbutton">Sign Up</span></MDBBtn>
                        </Link>
                        <Link to="/Login">
                        <MDBBtn ><span className="loginbutton">Log In</span></MDBBtn>
                        </Link>

                    </p>
                    <br />
                    <br />
                    <br />
                </Jumbotron>;
            </div>
        );
    };
};

export default Jumbo;
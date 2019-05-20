import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "./SignUp.css"

class SignUp extends Component {

  render() {
    return (
      <div>
        <MDBContainer className="LogForm">
          <MDBRow>
            <MDBCol className="ActForm" md="6">
              <form>
                <p className="h5 text-center mb-4">Sign Up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your name"
                    icon="user-alt"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <Link to="/Creator">
                    <MDBBtn >Done</MDBBtn>
                  </Link>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {/* <Footer /> */}
      </div>);
  }
}

export default SignUp;

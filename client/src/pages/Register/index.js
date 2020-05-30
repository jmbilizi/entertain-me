import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { Container, Row, Col } from "react-materialize";
import './style.css'

class Create extends Component {
  constructor() {
    super();
    this.state = {
      register: false,
      fname: "",
      lname: "",
      username: "",
      password: "",
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { fname, lname, username, password } = this.state;

    axios
      .post("/api/auth/register", { fname, lname, username, password })
      .then((result) => {
        this.setState({ register: true });
      });
  };

  render() {
    const { fname, lname, username, password, register } = this.state;
    if (register === true) return <Redirect to={"/login"} />;
    return (
      <Container>
        <Row></Row>
        <Row>
          <Col s={3}>
            <>
              <img className='login-images fade' alt='rebel without a cause' src='https://image.tmdb.org/t/p/w500/1sogXKywDaMH2PZ5NQwW9pfwq2F.jpg' />

              <img className='login-images fade' alt='the godfather' src='https://image.tmdb.org/t/p/w500/ejdD20cdHNFAYAN2DlqPToXKyzx.jpg' />

              <img className='login-images fade' alt='titanic' src='https://image.tmdb.org/t/p/w500/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg' />

              <img className='login-images fade' alt='stranger things' src='https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg' />
            </>
          </Col>

          <Col s={3}>
            <>
              <img className='login-images fade2 ' alt='casablanca' src='https://image.tmdb.org/t/p/w500/wOfzdzC0QZyhUIlyjeMuUYSb8Ax.jpg' />

              <img className='login-images fade2' alt='space force' src='https://image.tmdb.org/t/p/w500/AnaVA0X9bFaboGnfnQDyfilUl7i.jpg' />

              <img className='login-images fade2' alt='the mandalorian' src='https://image.tmdb.org/t/p/w500/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg' />

              <img className='login-images fade2' alt='ozark' src='https://image.tmdb.org/t/p/w500/hNaBXLiLTxMhtj7IFjOdJngXxxr.jpg' />
            </>
          </Col>
          <Col s={3}>

            <>
              <img className='login-images fade3' alt='its always sunny in philadelphia' src='https://image.tmdb.org/t/p/w500/uqTCaYBoSLT9MAdyQ9tU6QyCZ3A.jpg' />

              <img className='login-images fade3 ' alt='the notebook' src='https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg' />

              <img className='login-images fade3' alt='dead to me' src='https://image.tmdb.org/t/p/w500/j4TXQ7OJsLx1Ba6z8XA7is0DcRZ.jpg' />

              <img className='login-images fade3' alt='forrest gump' src='https://image.tmdb.org/t/p/w500/7c9UVPPiTPltouxRVY6N9uugaVA.jpg' />
            </>
          </Col>
          <Col s={3}>
            <>
              <img className='login-images fade4 ' alt='white lines' src='https://image.tmdb.org/t/p/w500/63Z7wWSky36NtD9x9XjpPD7UkUt.jpg' />

              <img className='login-images fade4' alt='spongebob squarepants' src='https://image.tmdb.org/t/p/w500/maFEWU41jdUOzDfRVkojq7fluIm.jpg' />

              <img className='login-images fade4' alt='jumaji: the next level' src='https://image.tmdb.org/t/p/w500/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg' />

              <img className='login-images fade4' alt='the bachelor' src='https://image.tmdb.org/t/p/w500/oAWB9LiRWI1dOJ00YcLlQZZNgn3.jpg' />
            </>
          </Col>
        </Row>

        <Row>
          <Col>

            <div className="auth-wrapper m-auto register">
              <div className="auth-inner">
                <form class="form-signin" onSubmit={this.onSubmit}>
                  <h3>Register</h3>

                  <div className="form-group">
                    <label>First name</label>
                    <input
                      name="fname"
                      value={fname}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Last name</label>
                    <input
                      name="lname"
                      value={lname}
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      name="username"
                      value={username}
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      name="password"
                      value={password}
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Sign Up
                        </button>
                  <p className="forgot-password text-right">
                    Already registered?<a href="/login"> Sign in.</a>
                  </p>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Create;
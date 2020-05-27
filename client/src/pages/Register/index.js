import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import LoginSideContent from "../../components/LoginSideContent";
import { Row, Col } from "react-materialize";
import { RegisterPageWrapper } from "../../assets/styles";

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
        <RegisterPageWrapper>
          <Row></Row>
          <Row>
            <Col s={6}>
              {/* <LoginSideContent /> */}
            </Col>
            <Col s={6}></Col>

            <Col s={6}>
              <Col s={12} m={6}>
                <Col s={12} m={6}>
                  <div className="auth-wrapper m-auto">
                    <div className="auth-inner">
                      <form class="form-signin" onSubmit={this.onSubmit}>
                        <h3>Sign Up</h3>

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
                            type="text"
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
                            type="text"
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
              </Col>
            </Col>
            <Col s={6}></Col>
          </Row>
        </RegisterPageWrapper>
    );
  }
}

export default Create;
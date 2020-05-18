import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import LeftSideContent from "./LeftSideContent";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Checkbox } from "react-materialize";
import { ContainerWrapper } from "../../assets/styles";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      login: false,
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios
      .post("/api/auth/login", { username, password })
      .then((result) => {
        localStorage.setItem("jwtToken", result.data.token);
        this.props.setToken(result.data.token);
        this.setState({ message: "" });
        this.setState({ login: true });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({
            message: "Login failed. Username or password not match",
          });
        }
      });
  };

  render() {
    const { username, password, message, login } = this.state;
    if (login === true) return <Redirect to={"/home"} />;
    return (
      <ContainerWrapper>
        <Container>
          <Row></Row>
          <Row>
            <Col s={6}>
              <LeftSideContent />
            </Col>
            <Col s={6}></Col>

            <Col s={6}>
              <Col s={12} m={6}>
                <Col s={12} m={6}>
                  <div className="auth-wrapper m-auto">
                    <div className="auth-inner">
                      <form class="form-signin" onSubmit={this.onSubmit}>
                        {message !== "" && (
                          <div
                            class="alert alert-warning alert-dismissible"
                            role="alert"
                          >
                            {message}
                          </div>
                        )}
                        <h3>Sign In</h3>

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

                        <div className="form-group">
                          <Checkbox
                            id="Checkbox_3"
                            label="Remember Me"
                            value="remember"
                          />
                        </div>
                        <br></br>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit
                        </button>
                        <Row>
                          <Col s={5}></Col>
                          <Col s={7}>
                            <p className="forgot-password text-left">
                              <a href="#">Forgot password?</a>
                            </p>

                            <p className="forgot-password text-right">
                              Not registered? <a href="/register">Sign up.</a>
                            </p>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                </Col>
              </Col>
            </Col>
            <Col s={6}></Col>
          </Row>
        </Container>
      </ContainerWrapper>
    );
  }
}

export default Login;

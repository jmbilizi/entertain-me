import React, { Component } from "react";
import axios from "axios";
// import LoginSideContent from "../../components/LoginSideContent";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Checkbox } from "react-materialize";
import { user } from "../../utils/helpers";
import "./style.css";


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
        console.log("console of this.props: ", this.props)
        const { setFavorites } = this.props
        const { setCelebrities } = this.props
        const { setCommunityCelebrities } = this.props

        axios
            .post("/api/auth/login", { username, password })
            .then((result) => {
                localStorage.setItem("jwtToken", result.data.token);
                this.props.setToken(result.data.token);
                console.log(result.data.token);
                this.setState({ message: "" });
                this.setState({ login: true });

                const givenId = user()._id;

                axios
                    .get(`/api/favorites/${givenId}`)
                    .then((response) => {
                        console.log('Login response data: ', response.data);
                        setFavorites(response.data);

                        axios
                            .get(`/api/celebrities/${givenId}`)
                            .then((response) => {
                                console.log('Login celeb response data: ', response.data);
                                setCelebrities(response.data);

                                axios
                                    .get('/api/celebrities')
                                    .then((response) => {
                                        console.log("Login getCommunityCelebrities response data: ", response.data);
                                        setCommunityCelebrities(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })


                            })
                            .catch((error) => {
                                console.log(error);
                            })

                    })
                    .catch((error) => {
                        console.log(error);
                    })

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
        if (login === true) return <Redirect to={"/"} />;
        return (
            <Container classname='login-background'>
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
                    <Col s={6}>
                        <>
                            <img className='login-images fade3' alt='its always sunny in philadelphia' src='https://image.tmdb.org/t/p/w500/uqTCaYBoSLT9MAdyQ9tU6QyCZ3A.jpg' />

                            <img className='login-images fade4 ' alt='the notebook' src='https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg' />

                            <img className='login-images fade3' alt='dead to me' src='https://image.tmdb.org/t/p/w500/j4TXQ7OJsLx1Ba6z8XA7is0DcRZ.jpg' />

                            <img className='login-images fade4' alt='forrest gump' src='https://image.tmdb.org/t/p/w500/7c9UVPPiTPltouxRVY6N9uugaVA.jpg' />

                            <img className='login-images fade3 ' alt='white lines' src='https://image.tmdb.org/t/p/w500/63Z7wWSky36NtD9x9XjpPD7UkUt.jpg' />

                            <img className='login-images fade4' alt='spongebob squarepants' src='https://image.tmdb.org/t/p/w500/maFEWU41jdUOzDfRVkojq7fluIm.jpg' />

                            <img className='login-images fade3' alt='jumaji: the next level' src='https://image.tmdb.org/t/p/w500/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg' />

                            <img className='login-images fade4' alt='the bachelor' src='https://image.tmdb.org/t/p/w500/oAWB9LiRWI1dOJ00YcLlQZZNgn3.jpg' />

                            <div className="auth-wrapper m-auto sign-in">
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
                                            <label>E-mail Address</label>
                                            <input
                                                name="username"
                                                value={username}
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter e-mail"
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

                                        <div className="form-group">
                                            <Checkbox
                                                id="Checkbox_3"
                                                label="Remember Me"
                                                value="remember"
                                            />
                                        </div>
                                        <br></br>
                                        <button type="submit" className="btn btn-primary btn-block">
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
                        </>
                    </Col>
                    {/* <Col s={3} className='green'>
                        <>
                            <img className='login-images' alt='rebel without a cause' src='https://image.tmdb.org/t/p/w500/1sogXKywDaMH2PZ5NQwW9pfwq2F.jpg' />

                            <img className='login-images' alt='spongebob squarepants' src='https://image.tmdb.org/t/p/w500/maFEWU41jdUOzDfRVkojq7fluIm.jpg' />

                            <img className='login-images' alt='titanic' src='https://image.tmdb.org/t/p/w500/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg' />

                            <img className='login-images' alt='stranger things' src='https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg' />
                        </>
                    </Col> */}
                    {/* <Col s={12} m={6}>
                            <>
                                <br></br><br></br><br></br><br></br>
                                <div className="auth-wrapper m-auto test">
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
                                                <label>E-mail Address</label>
                                                <input
                                                    name="username"
                                                    value={username}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter e-mail"
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

                                            <div className="form-group">
                                                <Checkbox
                                                    id="Checkbox_3"
                                                    label="Remember Me"
                                                    value="remember"
                                                />
                                            </div>
                                            <br></br>
                                            <button type="submit" className="btn btn-primary btn-block">
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
                            </>
                        </Col> */}
                    {/* </Col> */}

                </Row>
            </Container >
        );
    }
}

export default Login;


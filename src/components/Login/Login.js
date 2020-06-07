import React, { Component } from 'react';
import './Login.css';
import { Input, Button, Div, H1, Modal } from '../Common/Common';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { isEmpty, isVaild } from '../Validator/Validator';
import { Redirect } from "react-router-dom";

const initialState = {
    email: "",
    password: "",
    showError: false,
    showModal: false,
    modalMsg: "",
};

class Login extends Component {
    state = initialState;

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onCheckChange = (e) => {
        this.setState({ [e.target.id]: e.target.checked });
    }

    submit(e) {
        e.preventDefault();
        this.setState({ showError: true });
        if (this.isValid()) {
            this.props.loginUser(this.state.email, this.state.password);
            this.setState({ showError: false });
        }
    }

    isValid() {
        return isEmpty(this.state.email) && isVaild("email", this.state.email) && isEmpty(this.state.password);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.loginError !== nextProps.loginError && nextProps.loginError) {
            this.setState({ showModal: true, modalMsg: "Failed to login", isSuccess: false });
        }
    }

    closeModal = () => {
        this.setState(initialState);
    }

    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
            return (
                <Div cName="center-div login-div">
                    {this.state.showModal && !this.props.loading && (<Modal width="300px" height="160px" closeModal={this.closeModal} title={this.state.modalMsg} isSuccess={this.state.isSuccess} />)}
                    <H1 cName="text-center login-heading">Login</H1>
                    <form onSubmit={(e) => this.submit(e)} className="login-form">
                        <Input type="text" iType="email" label="Email Address" colName="login-label" id="email" value={this.state.email} required={true} onChange={this.onChange} showError={this.state.showError} autoFocus={true} />
                        <Input type="password" label="Password" id="password" colName="login-label" value={this.state.password} required={true} onChange={this.onChange} showError={this.state.showError} />
                        <Div cName="row buttons">
                            <Div cName="col-12 text-center">
                                <Button type="submit" title="Login" />
                            </Div>
                        </Div>
                    </form>
                </Div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}
  
export default connect(mapStateToProps, actions)(Login);

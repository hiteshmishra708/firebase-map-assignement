import React, { Component } from 'react';
import './Register.css';
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

class Register extends Component {
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
            this.props.register(this.state.email, this.state.password);
            this.setState({ showError: false });
        }
    }

    isValid() {
        return isEmpty(this.state.email) && isVaild("email", this.state.email) && isEmpty(this.state.password);
    }
    
    componentWillReceiveProps(nextProps) {
        const nState = this.state;
        if (this.props.registerError !== nextProps.registerError && nextProps.registerError) {
            nState.showModal = true;
            nState.modalMsg = "Failed to register";
            nState.isSuccess = false;
        } else if (this.props.registerSuccess !== nextProps.registerSuccess && nextProps.registerSuccess) {
            nState.showModal = true;
            nState.modalMsg = "Register success";
            nState.isSuccess = true;
        }
        this.setState(nState);
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
                <Div cName="center-div register-div">
                    {this.state.showModal && !this.props.loading && (<Modal width="300px" height="180px" closeModal={this.closeModal} title={this.state.modalMsg} isSuccess={this.state.isSuccess} />)}
                    <H1 cName="text-center register-heading">Register</H1>
                    <form onSubmit={(e) => this.submit(e)} className="register-form">
                        <Input type="text" iType="email" label="Email Address" colName="register-label" id="email" value={this.state.email} required={true} onChange={this.onChange} showError={this.state.showError} autoFocus={true} />
                        <Input type="password" label="Password" id="password" colName="register-label" value={this.state.password} required={true} onChange={this.onChange} showError={this.state.showError} />
                        <Div cName="row buttons text-center">
                            <Div cName="col-12 text-center">
                                <Button type="submit" title="Register" />
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
        registerError: state.auth.registerError,
        registerSuccess: state.auth.registerSuccess,
        isAuthenticated: state.auth.isAuthenticated
    };
}
  
export default connect(mapStateToProps, actions)(Register);

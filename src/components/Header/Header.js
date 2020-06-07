import React, { Component } from 'react';
import './Header.css';
import { Link, UL, Img, Div } from '../Common/Common';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class Header extends Component {

    render() {
        return (
            <Div cName="header">
                <Div cName="row">
                    <Div cName="right">
                        {this.props.isAuthenticated ? (
                            <UL>
                                <Link to="/">
                                    <Img src="ava.png" alt="View Profile" cName="profile-img" />
                                </Link>
                                <Link to="/login" cName="logout" onClick={() => this.props.logoutUser()}>Logout</Link>
                            </UL>
                        ) : (
                                <Div cName="header-list">
                                    <UL>
                                        <Link to="/register" title="Register" cName="header-title" />
                                        <Link to="/login" title="Login" cName="header-title" />
                                    </UL>
                                </Div>
                            )}
                    </Div>
                </Div>
            </Div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}
  
export default connect(mapStateToProps, actions)(Header);
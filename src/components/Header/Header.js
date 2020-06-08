import React, { Component } from 'react';
import './Header.css';
import { Link, UL, Div } from '../Common/Common';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class Header extends Component {

    render() {
        return (
            <Div cName="header">
                <Div cName="row">
                    <Div cName="right">
                        <Div cName="header-list">
                            {this.props.isAuthenticated ? (
                                <UL>
                                    <Link to="/" title="Home" cName="header-title" />
                                    <Link to="/map" title="Map" cName="header-title" />
                                    <Link to="/login" cName="logout header-title" onClick={() => this.props.logoutUser()}>Logout</Link>
                                </UL>
                            ) : (
                                    <UL>
                                        <Link to="/register" title="Register" cName="header-title" />
                                        <Link to="/login" title="Login" cName="header-title" />
                                    </UL>
                                )}
                        </Div>
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
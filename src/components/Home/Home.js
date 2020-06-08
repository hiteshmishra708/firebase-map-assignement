import React, { Component } from 'react';
import './Home.css';
import { Div, Label, Span, Link } from '../Common/Common';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const initialState = {
    showModal: false,
    isSuccess: false,
    modalMsg: "",
};

class Home extends Component {
    state = initialState;

    componentDidMount() {
        this.props.getLocations();
    }

    closeModal = () => {
        this.setState(initialState);
    }

    render() {
        return (
            <Div cName="main-container">
                <Div cName="center-div projects container">
                    <Div cName="project-list row">
                        {this.props.locations.map((value, idx) => {
                            return (
                                <Div key={idx} cName="card col-lg-4 col-md-4 col-sm-12">
                                    <Link to={"/map/" + value.id}>
                                        <Div cName="card-body">
                                            <Label cName="card-title">{ value.name }</Label>
                                            <Span cName="card-subtitle">Location: { value.name + " " + value.city}</Span>
                                            <Div cName="card-details row">
                                                <Div cName="col-6">
                                                    <Span>Area: {value.name}</Span>
                                                    <Span>Lat: {value.state}</Span>
                                                    <Span>Lat: {value.lat}</Span>
                                                </Div>
                                                <Div cName="col-6">
                                                    <Span>State: {value.city}</Span>
                                                    <Span>Lat: {value.country}</Span>
                                                    <Span>Lng: {value.lng}</Span>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Link>
                                </Div>
                            )
                        })}
                    </Div>
                </Div>
            </Div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        locations: state.auth.locations && state.auth.locations.length? state.auth.locations: []
    };
}
  
export default connect(mapStateToProps, actions)(Home);
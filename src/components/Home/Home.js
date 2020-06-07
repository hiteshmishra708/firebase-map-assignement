import React, { Component } from 'react';
import './Home.css';
import { Div, Label, Span } from '../Common/Common';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const initialState = {
    data: [{
        locationName: "Test 1",
        locationLat: 32.8,
        locationLng: 42.87,
    }],
    showModal: false,
    isSuccess: false,
    modalMsg: "",
};

class Home extends Component {
    state = initialState;

    closeModal = () => {
        this.setState(initialState);
    }

    render() {
        return (
            <Div cName="main-container">
                <Div cName="center-div projects container">
                    <Div cName="project-list row">
                        {this.state.data.map((value, idx) => {
                            return (
                                <Div key={idx} cName="card col-4">
                                    <Div cName="card-body" onClick={() => this.onClick(value)}>
                                        <Label cName="card-title">{ value.locationName }</Label>
                                        <Span cName="card-subtitle">Location: {value.locationName}</Span>
                                        <Div cName="card-details row">
                                            <Div cName="col-6">
                                                <Span>Lat: {value.locationLat}</Span>
                                            </Div>
                                            <Div cName="col-6">
                                                <Span>Lng: {value.locationLat}</Span>
                                            </Div>
                                        </Div>
                                    </Div>
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
        isAuthenticated: state.auth.isAuthenticated
    };
}
  
export default connect(mapStateToProps, actions)(Home);
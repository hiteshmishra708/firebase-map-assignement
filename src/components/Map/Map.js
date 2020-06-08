import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

// examples:
import GoogleMap from './GoogleMap';

const getInfoWindowString = place => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.city}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.state}
      </div>
      <div style="font-size: 14px; color: green;">
        ${place.country}
      </div>
    </div>`;

// Refer to https://github.com/google-map-react/google-map-react#use-google-maps-api
const handleApiLoaded = (map, maps, places) => {
  const markers = [];
  const infowindows = [];

  places.forEach((place) => {
    markers.push(new maps.Marker({
      position: {
        lat: place.lat,
        lng: place.lng,
      },
      map,
    }));

    infowindows.push(new maps.InfoWindow({
      content: getInfoWindowString(place),
    }));
  });

  markers.forEach((marker, i) => {
    marker.addListener('click', () => {
      infowindows[i].open(map, marker);
    });
  });
};

class Map extends Component {
  state = {
    places: [],
  };

  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    let { places } = this.props;
    if (this.props.match.params.id) {
      places = places.filter(e => e.id === this.props.match.params.id)
    }

    return (
      <Fragment>
        {places && places.length && (
          <GoogleMap
            defaultZoom={10}
            defaultCenter={[19.0760, 72.8777]}
            bootstrapURLKeys={{ key: "AIzaSyAet8Mk1nPvOn_AebLE5ZxXoGejOD8tPzA" }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
          />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
      isAuthenticated: state.auth.isAuthenticated,
      places: state.auth.locations
  };
}

export default connect(mapStateToProps, actions)(Map);
import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const GoogleMap = () => {
    let defaultProps = {
        center: {  
          lat: 17.453911083520403,
          lng: 78.37020776931183
        },
        zoom: 11
      };
      return (
        <div style={{ height: '100vh', width: '100%' ,color:"red"}}>
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={17.453911083520403}
              lng={78.37020776931183}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );

}
export default GoogleMap;
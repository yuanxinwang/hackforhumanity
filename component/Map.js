import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
    constructor(){
        super();
        this.state={
            latitude:null,
            longitude:null,
            loaded:false,
        }
    }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  componentDidMount(){
      let curPos={
          latitude:null,
          longitude:null,
      }
    if (navigator.geolocation) {
        console.log("here");
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("good");
            console.log(position.coords.latitude);
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
                loaded:true,
            });
        });
      } else {
        this.setState({
            latitude:36.974117,
            longitude:-122.030792,
            loaded:true,
        });
      }
      
  }
  render() {
      if(this.state.loaded===false){
          return <div> </div>
      }
      let curPos={
        lat:this.state.latitude,
        lng:this.state.longitude,
      };
      console.log("zoom: ", this.props.zoom);
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2p1XFwQKFw2J9sr6eiruVQu8XYCp5QoA' }}
          defaultCenter={curPos}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals={true}
        >

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
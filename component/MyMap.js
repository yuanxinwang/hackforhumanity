import Head from 'next/head'

import SignIn from '../component/SignIn'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


      
class MyMap extends React.Component{
  constructor(){
    super();
    this.state={
        latitude:null,
        longitude:null,
        loaded:false,
    }
  }
  componentDidMount(){
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



getData() {
    const xhr = new XMLHttpRequest();
    const url = 'https://hackforhumanity.appspot.com/marker/';
   
    xhr.open('GET', url);
    xhr.send();
  }

  render(){
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    if(this.state.loaded===false){
        return <div></div>
    }
    this.getData();
    return(
    <div className="container">
    <Head>
      <title>HackForHumanity</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>


    <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: this.state.latitude, lng: this.state.longitude}}
      >
        </Map>
    </main>
  </div>);
  }
}

    
export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2p1XFwQKFw2J9sr6eiruVQu8XYCp5QoA'
})(MyMap);
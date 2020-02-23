import Head from 'next/head'
import AddDialog from '../component/AddDialog'
import DisplayDialog from '../component/DisplayDialog'
import SignIn from '../component/SignIn'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Button } from '@material-ui/core';


      
class MyMap extends React.Component{
  constructor(){
    super();
    this.state={
        latitude:null,
        longitude:null,
        loaded:false,
        data: [],
        editEnable: false,
        curSelect:null,
        addDialog:false,
        displayDialog:false,
        info:null,
        curSelectPos:null,
    }
  }

  diaLogEnd(){
      this.setState({
          addDialog: false,
          displayDialog: false,
          info:null,
      })
  }

  postUpdate(){
    fetch(
        'https://hackforhumanity.appspot.com/marker/',
        {method: 'GET'}
    ).then(
        res =>res.json()
    ).then(
        (data)=>{
            console.log("data added: ", data);
            let toReturn = [];
            data.forEach(
                (pos)=>{
                    const posi={
                        lat: pos.lat,
                        lng: pos.long,
                    }
                    toReturn.push(
                        <Marker data={pos}
                         onClick={()=>{
                            console.log("click already exist");  
                            this.setState(
                                {displayDialog: true,
                                info:pos}
                            ); 
                        }
                    }
                    
                        >

                        </Marker>
                    );
                }
            );
            this.setState({
                data: toReturn,
                addDialog: false,
                displayDialog: false,
                info: null
            });
        }
    );
    
  }

  componentDidMount(){
    fetch(
        'https://hackforhumanity.appspot.com/marker/',
        {method: 'GET'}
    ).then(
        res =>res.json()
    ).then(
        (data)=>{
            let toReturn = [];
            data.forEach(
                (pos)=>{
                    const posi={
                        lat: pos.lat,
                        lng: pos.long,
                    }
                    toReturn.push(

                        <Marker data={pos}
                        onClick={()=>{
                            console.log("click already exist");
                            this.setState(
                                {displayDialog: true,
                                info:pos,
                                }
                            );}
                        }
                        
                            
                        >

                        </Marker>
                    );
                }
            );
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position)=>{
                    this.setState({
                        latitude:position.coords.latitude,
                        longitude:position.coords.longitude,
                        loaded:true,
                        data: toReturn,
                    });
                });
              } else {
                this.setState({
                    latitude:36.974117,
                    longitude:-122.030792,
                    loaded:true,
                    data: toReturn,
                });
              }
        }
    )
}

    mapClicked(mapProps, map, clickEvent){
        const curLat = clickEvent.latLng.lat();
        const curLng = clickEvent.latLng.lng();
        const curPos={
            lat:curLat,
            lng:curLng,
        }
        let temp = (
            <Marker position={curPos}
            onClick={()=>{
                this.setState(
                    {addDialog: true}
                );
            }}
            >
                </Marker>
        );
        this.setState({
            curSelect:temp,
            curSelectPos:curPos,
        })
    }


  render(){
      const p = this.postUpdate.bind(this);
      const c = this.diaLogEnd.bind(this);
      let helper = this.mapClicked.bind(this);
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    if(this.state.loaded===false){
        return <div></div>
    }
    
     
    
    return(
    <div className="container">
    <Head>
      <title>HackForHumanity</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        {this.state.addDialog?(<AddDialog op={this.state.addDialog} Close={c} pos={this.state.curSelectPos}
        postUpdate={p}>
        </AddDialog>):null}

        {this.state.displayDialog?(<DisplayDialog info={this.state.info} op={this.state.displayDialog} Close={c} pos={this.state.curSelectPos}
        >
        </DisplayDialog>):null}
    <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: this.state.latitude, lng: this.state.longitude}}
        onClick={ helper}
      >
          <Marker position={
              {lat: 12,
                lng:15}
          }>  </Marker>
          {this.state.data}
          {this.state.curSelect}
        </Map>
    </main>
    <Button />
  </div>);
  }
}

    
export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2p1XFwQKFw2J9sr6eiruVQu8XYCp5QoA'
})(MyMap);
import Head from 'next/head'
import MyMap from '../component/MyMap'
import SignIn from '../component/SignIn'
import { Map} from 'google-maps-react';

      
class Home extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
    <MyMap>

    </MyMap>  );

  };
}

    
export default Home;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import Movies from './components/movies.component';
import Rating from './components/common/rating.component';

class App extends Component {
  state = {  } 
  render() { 
    return (
        <>
            <Navbar />
            <hr/>
            <Movies />
            <Rating israted={false}/>

        

        </>
    );
  }
}
 
export default App;
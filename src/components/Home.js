import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
    <div>
      <h2>Welcome to the Pet Shoppe</h2>
      <Link to='/stores'>View our stores!</Link>
      
      {/*<Route path='stores' component={Stores}/>*/}
    </div>
);

export default Home;

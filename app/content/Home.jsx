
import React from 'react';
import LikeButton from '../components/LikeButton';


class Home extends React.Component {
  render() {

    return (
      <div>
        <LikeButton />
        <h1 className="h1">Hello, World with Routing</h1>
      </div>
    );
  }
}

export default Home;
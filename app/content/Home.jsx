
import React from 'react';
import LikeButton from '../components/LikeButton';


class Home extends React.Component {
  render() {

    return (
      <div className="pure-g">
        <div className="pure-u-1-2">
            <h2> Home</h2>
        </div>
        <div className="pure-u-1-2">
            <LikeButton />
        </div>
      </div>
    );
  }
}

export default Home;
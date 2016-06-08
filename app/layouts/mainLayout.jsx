import React from 'react';
import { Link } from 'react-router'

class MainLayout extends React.Component {
  render() {

    return (
      <div className="container">
        <h1>React Static Site</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        {this.props.children}
      </div>

    )
  }
}

export default MainLayout;
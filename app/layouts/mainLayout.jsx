import React from 'react';
import { Link } from 'react-router'
import ajax from 'superagent'

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lawrence',
      commits: []
    };
  }
  componentWillMount() {
    ajax.get('https://api.github.com/repos/facebook/react/commits')
        .end((error, response) => {
            if (!error && response) {
                console.log(response.body)
                this.setState({ commits: response.body });
            } else {
                console.log('There was an error fetching from GitHub', error);
            }
        }
    );
  }
  render() {

    return (
      <div className="container">
        <h1>React Static Site</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
          {this.state.commits.map((commit, index) => (
            <p key={index}>
              <strong>{commit.author.login}</strong>:
              <a href={commit.html_url}>{commit.commit.message}</a>.</p>
          ))}
        </div>
        {this.props.children}
      </div>

    )
  }
}

export default MainLayout;
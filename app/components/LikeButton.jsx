import React from 'react';
const cx = require('classnames');


class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    let classes = cx({
        'pure-button': true,
        'pure-button-active': this.state.liked
    })
    return (
      <div className={classes} onClick={this.handleClick}>
        Like
      </div>
    );
  }
}

export default LikeButton;
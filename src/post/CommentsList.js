/* jshint ignore:start */
import React, { Component } from 'react';



class CommentsList extends Component {
  state = {
    comments: []
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json
        });
      })
  }

  render() {
    return (

        <div>
          {this.state.on && (
              <button onClick={this.toggle}>Hello</button>
          )}
        </div>
      
    );
  }
}

export default CommentsList;



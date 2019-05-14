/* jshint ignore:start */
import React, { Component } from 'react';



class PostList extends Component {
  state = {
    posts: [],
    selectedPost: null,
    comments: []
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json
        });
      })

    }
  toggleComments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.json())
    .then(json => {
      json.map(comments => <li>{json}</li>)
      this.setState({
        comments: json
      });
    })
    // (<li>${this.comments}</li>);
    console.log(this.state.comments);
    
    
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => (
            <div key={post.id}>
              <h1>ID: {post.id}</h1> 
              <li>
                <span>Title:</span>
                <br/>
                {post.title}
                <br/>
                <br/>
                <br/>
              </li>
              <button onClick={() => this.toggleComments(post.id)}>Show Comments</button>
              <div className="commentList"></div>
              <br/>
              <br/>
              <br/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
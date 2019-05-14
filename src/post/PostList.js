/* jshint ignore:start */
import React, { Component } from 'react';



class PostList extends Component {
  state = {
    posts: [],
    selectedPost: null,
    comments: []
  }

  componentDidMount() {
    
    // Fetch post from api
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
      this.setState({
        comments: json,
        selectedPost: id
      });
    })
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
              <button onClick={() => this.toggleComments(post.id)}><p>Show Comments</p></button>
              <br/>
              {this.state.selectedPost === post.id ? this.state.comments.map(comment => (
                <div key={comment.name}>
                    <h2>Name:<br/>{comment.name}</h2>
                    <h2>Email:<br/>{comment.email}</h2>
                    <h2>Body:<br/>{comment.body}</h2>
                    <h2>-------------------------------------------------------</h2>
                </div>
              )) : null}
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
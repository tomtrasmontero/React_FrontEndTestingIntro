import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: ''};
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: ''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="data-comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
          {/*  button will submit when the button is clicked */}
        <div>
          <button action="submit" >Submit Comment</button>
        </div>
      </form>
    );
  }
}

// passing entire actions creater and bind it to CommentBox
export default connect(null, actions )(CommentBox);

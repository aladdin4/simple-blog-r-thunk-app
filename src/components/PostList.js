import React from "react";
import { connect } from "react-redux";
import { fetchPost, fetchPostsAndUsers } from "../actions/index";
import UserHead from "./UserHead";

//class-based component, the class needs connect() and actionCreators() to be able to receive state and update and render with the events it sends
class PostList extends React.Component {
  componentDidMount() {
    //calling the action creator, the initiation of the whole cycle
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.Posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>

              <UserHead userID={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { Posts: state.Posts };
};

//connect will update the <PostList /> with the appropriate props, that it will uses as data containers and functions to be called when in callback-scenario, to update state, then receive the new state through connect() as well
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);

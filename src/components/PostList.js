import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";

//class-based component, the class needs connect() and actionCreators() to be able to receive state and update and render with the events it sends
class PostList extends React.Component {
  componentDidMount() {
    //calling the action creator, the initiation of the whole cycle
    this.props.fetchPost();
  }
  render() {
    return <div>hello from within the PostList componnet</div>;
  }
}

//connect will update the <PostList /> with the appropriate props, that it will uses as data containers and functions to be called when in callback-scenario, to update state, then receive the new state through connect() as well
export default connect(null, { fetchPost })(PostList);

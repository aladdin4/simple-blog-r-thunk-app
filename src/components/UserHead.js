import React from "react";
import { connect } from "react-redux";

class UserHead extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading ...</div>;
    }
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.Users.find((user) => {
    return user.id === ownProps.userID;
  });
  return { user };
};

export default connect(mapStateToProps)(UserHead);

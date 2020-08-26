import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/Spacex/spacexActions";

function SpaceXData({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2> Loading</h2>
  ) : (
    <div>
      {userData.users.map((eachUser) => (
        <div key={eachUser.id}>
          <span>{eachUser.title}</span>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceXData);

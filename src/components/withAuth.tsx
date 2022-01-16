import React from "react";
import useAuthContext from "../contexts/AuthContext";

function withAuth(Component) {
  return function (props) {
    const {loggedInUser, setLoggedInUser} = useAuthContext();
    return (
      <Component
        {...props}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
    );
  };
}

export default withAuth;

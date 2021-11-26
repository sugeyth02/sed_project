import React, { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, role, ...rest }) {
  const { token, user } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token && user) {
      setIsLoading(false);
    }
  }, [token, user]);

  if (isLoading) return <h1 className="loading">loading...</h1>;

  return (
    <Route
      {...rest}
      render={() => {
        if (token && user.role === role) return children;
        else if (user?.role) {
          return (
            <Redirect to={`${user.role === "admin" ? "/Admin" : "/Landing"}`} />
          );
        } else return <Redirect to="/Login" />;
      }}
    ></Route>
  );
}

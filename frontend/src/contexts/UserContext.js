import React, { useState, useEffect, useMemo, useCallback } from "react";
import services from "../services/services";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();

//consumidor
export const useUserContext = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext() must be inside of UserProvider");
  }

  return context;
};

//proveedor
export const UserProvider = (props) => {
  const history = useHistory();

  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(undefined);

  const setTokenAll = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const getToken = () => localStorage.getItem("token");

  console.log(user);

  useEffect(() => {
    const verifyTokenAsync = async () => {
      const lsToken = getToken();

      if (lsToken) {
        try {
          const { role, email, name } = await services.verifyToken(lsToken);
          if (name && role && email) {
            setUser({ name, email, role });
            setTokenAll(lsToken);
          }
        } catch (e) {
          console.log(e);
          logout();
          history.push("/Login");
        }
      }
    };

    verifyTokenAsync();
  }, [token]);

  const login = useCallback((email, password) => {
    const loginAsync = async () => {
      let role;
      try {
        const { token: tokenRes, role: _role } = await services.login(
          email,
          password
        );

        if (tokenRes) {
          role = _role;
          setTokenAll(tokenRes);
        }
      } catch (error) {
        console.error(error);
        console.error("Error in login");
      } finally {
        return role;
      }
    };

    return loginAsync();
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
    setTokenAll(undefined);
    localStorage.clear();
  }, []);

  const value = useMemo(
    () => ({
      token: token,
      user: user,
      login: login,
      logout: logout,
    }),
    [token, user, login, logout]
  );

  return <UserContext.Provider value={value} {...props} />;
};

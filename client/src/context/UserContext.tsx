import React from "react";

const context = React.createContext({
  isAuthorized: false,
  userId: "",
  userName: "",
  setUser: (isAuthorized: boolean, userId: string, userName: string) => {},
});

export default context;

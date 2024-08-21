import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

function ContextWrapper({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const values = {
    loggedIn,
    setLoggedIn,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextWrapper };

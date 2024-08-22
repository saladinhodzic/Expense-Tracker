import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppContext = createContext();

function ContextWrapper({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const values = {
    loggedIn,
    setLoggedIn,
    navigate,
    location,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextWrapper };

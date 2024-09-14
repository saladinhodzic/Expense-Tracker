import { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/ContextWrapper";

export default function Header() {
  const { loggedIn, setLoggedIn, navigate, location } = useContext(AppContext);

  const handleRemoveUser = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/");
  };

  let list = (
    <ul className="list">
      <li
        className={
          location.pathname === "/home/profile"
            ? "active-input"
            : "inActive-input"
        }
      >
        Profile
      </li>
      <li>Your Savings</li>
      <li>Your expenses</li>
      <button onClick={handleRemoveUser}>Logout</button>
    </ul>
  );

  let loginButton =
    location.pathname === "/auth" ? (
      <li>Login</li>
    ) : (
      <button onClick={() => navigate("/auth")}>Login</button>
    );

  if (!loggedIn) {
    list = <ul className="list">{loginButton}</ul>;
  }

  return (
    <header>
      <div className="header-wrapper">
        <h1>Expense Tracker</h1>
        {list}
      </div>
    </header>
  );
}

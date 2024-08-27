import { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/ContextWrapper";

export default function Header() {
  const { checkUser, loggedIn, navigate, location } = useContext(AppContext);

  let list = (
    <ul className="list">
      <li>Profile</li>
      <li>Your Savings</li>
      <li>Your expenses</li>
      <button>Logout</button>
    </ul>
  );

  let loginButton =
    location.pathname === "/auth" ? (
      <p>Login</p>
    ) : (
      <button onClick={() => navigate("/auth")}>Login</button>
    );

  if (!loggedIn && !checkUser) {
    list = <ul className="list">{loginButton}</ul>;
    navigate("/auth");
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

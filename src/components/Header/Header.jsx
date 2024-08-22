import { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/ContextWrapper";

export default function Header() {
  const { loggedIn, navigate, location } = useContext(AppContext);

  let list = (
    <ul className="list">
      <li>Profile</li>
      <li>Your Savings</li>
      <li>Your expenses</li>
    </ul>
  );
  console.log(location);
  let loginButton =
    location.pathname === "/login" ? (
      <li>Login</li>
    ) : (
      <button onClick={() => navigate("/login")}>Login</button>
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

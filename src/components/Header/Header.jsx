import { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/ContextWrapper";

export default function Header() {
  const { checkUser, setLoggedIn, loggedIn, navigate, location } =
    useContext(AppContext);

  const handleRemoveUser = () => {
    setLoggedIn((prev) => !prev);
    localStorage.removeItem("user");
  };

  let list = (
    <ul className="list">
      <li>Profile</li>
      <li>Your Savings</li>
      <li>Your expenses</li>
      <button onClick={handleRemoveUser}>Logout</button>
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

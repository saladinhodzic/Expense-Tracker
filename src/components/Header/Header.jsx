import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <h1>Expense Tracker</h1>
        <ul className="list">
          <li>Profile</li>
          <li>Your Savings</li>
          <li>Your expenses</li>
        </ul>
      </div>
    </header>
  );
}

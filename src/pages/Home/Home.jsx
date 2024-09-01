import "./Home.css";
export default function Home() {
  const username = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-page-wrapper">
      <section className="welcome-section">
        <h1>Welcome to the Expense Tracker, {username.username}.</h1>
      </section>
      <section className="enter-info-section"></section>
    </div>
  );
}

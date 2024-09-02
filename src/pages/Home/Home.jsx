import "./Home.css";
export default function Home() {
  const username = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-page-wrapper">
      <section className="welcome-section">
        <h1>Welcome to Expense Tracker, {username.username}.</h1>
        <h3>With us you can find out how much you earn, save and spend.</h3>
      </section>
      <section className="enter-info-section"></section>
    </div>
  );
}

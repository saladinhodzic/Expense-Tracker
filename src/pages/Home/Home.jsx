import "./Home.css";
export default function Home() {
  const username = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-page-wrapper">
      <section className="welcome-section">
        <h1>Welcome to Expense Tracker, {username.username}.</h1>
        <p>With us you can find out how much you earn, save and spend.</p>
        <div className="enter-info">
          <label>Enter your salary:</label>
          <input type="number" />
          <button>Submit</button>
        </div>
      </section>
    </div>
  );
}

import { useContext, useState } from "react";
import "./Home.css";
import { AppContext } from "../../context/ContextWrapper";
export default function Home() {
  const [inputNumber, setInputNumber] = useState(0);

  const username = JSON.parse(localStorage.getItem("user"));
  const { navigate } = useContext(AppContext);

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (inputNumber > 0) {
      navigate("/home/profile");
    }
  };

  return (
    <div className="home-page-wrapper">
      <section className="welcome-section">
        <h1>Welcome to Expense Tracker, {username.username}.</h1>
        <p>With us you can find out how much you earn, save and spend.</p>
        <div className="enter-info">
          <label>Enter your salary:</label>
          <input type="number" value={inputNumber} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </section>
    </div>
  );
}

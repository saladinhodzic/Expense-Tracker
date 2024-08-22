import { useContext } from "react";
import "./LandingPage.css";
import { AppContext } from "../../context/ContextWrapper";
export default function LandingPage() {
  const { navigate } = useContext(AppContext);
  return (
    <div className="landing-page">
      <div className="landing-page-wrapper">
        <h1 className="landing-page-title">
          Find how much you can save in a month.
        </h1>
        <span className="landing-page-text">
          <p>
            Using our app you can calculate your daily expenses and savings.
          </p>
          <button onClick={() => navigate("/login")}>Try it now</button>
        </span>
      </div>
    </div>
  );
}

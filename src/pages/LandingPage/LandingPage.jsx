import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-wrapper">
        <h1 className="landing-page-title">
          Find how much you can save in a month.
        </h1>
        <p>
          Using our app you can calculate your daily expenses and savings{" "}
          <button>Try it now</button>
        </p>
      </div>
    </div>
  );
}

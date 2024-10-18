import videoHomepage from "../../assets/BackgroundHome.mp4";
import "./home.scss";
const Home = (props) => {
  return (
    <div className="homepage-container">
      <video className="videoHome" autoPlay loop muted>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="Homepage-content">
        <div className="title-1"> Get up to 3.5x more data about them</div>
        <div className="title-2">
          When your forms break the norm, more people fill them out. Think
          branded designs, video content, and relevant follow-up questions.
        </div>
        <div className="title-3">
          <button className="btn-sign-up">Sign up</button>
        </div>
      </div>
    </div>
  );
};
export default Home;

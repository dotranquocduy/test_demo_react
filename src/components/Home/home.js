import videoHomepage from "../../assets/BackgroundHome.mp4";
import "./home.scss";
const Home = (props) => {
  return (
    <div className="homepage-container">
      <video className="videoHome" autoPlay loop muted>
        <source src={videoHomepage} type="video/mp4" />
      </video>
    </div>
  );
};
export default Home;

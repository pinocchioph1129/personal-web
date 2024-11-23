import "./Home.css";
import PhotoChanger from "../../utilities/photochange/photochanger.js";
import CircleText from "../../utilities/circletext/CircleText";
import PhotoA from "../../assets/pfp/100p.png";
import PhotoB from "../../assets/pfp/75p.png";
import PhotoC from "../../assets/pfp/50p.png";
import PhotoD from "../../assets/pfp/25p.png";
import PhotoE from "../../assets/pfp/8p.png";
import PhotoF from "../../assets/pfp/1p.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <div className="intro-info">
          <h1>Hey, I am Kervi!</h1>
          <p>
            I am a software developer passionate about building open-source
            projects and sharing my journey through writing notes.
          </p>
          <p>
            On this site, you'll find a collection of research papers that I
            have read, personal notes that dive into my thoughts and experiences
            and a bit about background and interests. Whether you're here to
            learn, explore, or get to know me better, I hope you find something
            valuable.
          </p>
        </div>
        <div className="image-first">
          <PhotoChanger
            images={[PhotoA, PhotoB, PhotoC, PhotoD, PhotoE, PhotoF]}
            intervalTime={200}
          />
          <span className="image-first-title">fig. 1 picture of me</span>
        </div>
      </div>
      <div className="circle">
        <div className="circle-shape"></div>
        <CircleText text="Hover over photos to reveal " radius={45} />
      </div>
    </div>
  );
}

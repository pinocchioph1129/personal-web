import "./About.css";
import PhotoChanger from "../../utilities/photochange/photochanger.js";
import PhotoA from "../../assets/about/pfp/100p-p.png";
import PhotoB from "../../assets/about/pfp/75p-p.png";
import PhotoC from "../../assets/about/pfp/50p-p.png";
import PhotoD from "../../assets/about/pfp/25p-p.png";
import PhotoE from "../../assets/about/pfp/8p-p.png";
import PhotoF from "../../assets/about/pfp/1p-p.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="intro">
        <div className="intro-info">
          <h1>About Me</h1>
          <div className="intro-image">
            <PhotoChanger
              images={[PhotoA, PhotoB, PhotoC, PhotoD, PhotoE, PhotoF]}
              intervalTime={200}
            />
            <span className="intro-image-title">
              fig. 2 picture of me at a pumpkin patch
            </span>
          </div>
          <p>
            My name is Kervi Jay Javonillo. Currently, I am a senior at the
            University of Illinois - Urbana-Champaign and studying Computer
            Science and Philosophy. I specialize in networking, distributed
            systems, and security, as well as front-end design and developing. I
            like working out, crocheting, climbing, reading books, and taking a
            walk after I pass all the test cases.
          </p>
          <p>
            Welcome to my little corner of the internet! Here, you will find a
            mix of writing, projects, art, and anything else I feel like
            sharing. You can explore personal reflections and dive into the
            technical articles I've written over the years. Don't forget to
            check out the projects page for a showcase of my open-source
            contributions.
          </p>
          <p>
            This website exists as a space for self-expression and to share what
            I've learned with world. My hope is to inspire others to carve out
            their own creative spaces online, standing firm against growing
            enshittification of the web.
          </p>
        </div>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact-info"></div>
      </div>
    </div>
  );
}

import "./About.css";
import PhotoChanger from "../../utilities/photochange/photochanger.js";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
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
            sharing. You can explore personal{" "}
            <Link to="/Notes" className="intro-link">
              reflections
            </Link>{" "}
            and dive into the{" "}
            <Link to="/Articles" className="intro-link">
              technical articles
            </Link>{" "}
            I've read over the years. Don't forget to check out the{" "}
            <Link to="/Projects" className="intro-link">
              projects
            </Link>{" "}
            page for a showcase of my open-source contributions.
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
        <hr />
        <div className="contact-info-preview">
          <div className="contact-info-card">
            <div className="contact-info-card-logo">
              <a
                href="https://www.linkedin.com/in/kervi-j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="devicon:linkedin" width="25" height="25" />{" "}
              </a>
            </div>
            <div className="contact-info-card-note">
              <a
                href="https://www.linkedin.com/in/kervi-j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>LinkedIn</h3>
              </a>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-logo">
              <a
                href="https://github.com/pinocchioph1129"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Icon icon="skill-icons:github-light" width="25" height="25" />{" "}
              </a>
            </div>
            <div className="contact-info-card-note">
              <a
                href="https://github.com/pinocchioph1129"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <h3>Github</h3>
              </a>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-logo">
              <a
                href="mailto:kjavo2@illinois.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Icon icon="unjs:fs-memo" width="25" height="25" />{" "}
              </a>
            </div>
            <div className="contact-info-card-note">
              <a
                href="mailto:kjavo2@illinois.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <h3>Email</h3>
              </a>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card-logo">
              <a
                href="https://www.instagram.com/thatpinkball/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Icon icon="skill-icons:instagram" width="25" height="25" />{" "}
              </a>
            </div>
            <div className="contact-info-card-note">
              <a
                href="https://www.instagram.com/thatpinkball/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <h3>Instagram</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

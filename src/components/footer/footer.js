import React from "react";
import { Icon } from "@iconify/react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-content">
          <p>
            Made with{" "}
            <Icon icon="twemoji:beating-heart" width="15" height="15" /> by
            Kervi Jay
          </p>
        </div>
      </div>
    </div>
  );
}

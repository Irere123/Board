import React from "react";
import { ChevronRight, GitHub } from "@mui/icons-material";

import "../styles/About.css";

export const About: React.FC = () => {
  return (
    <div className="aboutpage__layout">
      <div className="aboutpage__layoutCreatorSection">
        <div className="aboutpage__layoutCreatorSection__intro">
          <h1>Creator of BOARD</h1>
          <p>
            <strong>Hi, I'am Irere Emmanuel the creator of BOARD.</strong>I 'am
            14 years old, a Programmer, student and a Typescript and React.js
            Fan BOYYY. In fact this website is built with React.js and
            Typescript. I mainly specializes in web development but also I
            develop Mobile Apps and Desktop Apps. To Know more about me click
            the know more link....
          </p>
          <a
            href="https://irere.vercel.app"
            className="aboutCreator__knowMore"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Know More</h3>
            <span className="chevronIcon">
              <ChevronRight />
            </span>
          </a>
        </div>
        <div className="aboutpage__layoutCreatorSection_projects">
          <h1 className="aboutPage__logo">BOARD</h1>
          <h3>CEO and Founder of NEOX</h3>
        </div>
      </div>
      <div className="aboutPage__aboutProject">
        <div className="aboutPage__aboutProjectText">
          <h1>About BOARD</h1>

          <p>
            Board is a place for you to have free speech and enjoy the
            community. In Board you can post what's on your mind, know what to
            trending on social media, make announcements to the community of
            Board and get daily tips for your day and There there isn't any
            authentication in all that.{" "}
            <strong>HERE AT BOARD WE LIVE IN AUTHENTICATION LESS WORLD</strong>{" "}
            and also BOARD is an open source project.
            <strong>This means you can see the source code on Github</strong>
          </p>
        </div>
        <div className="aboutPage__aboutProjectGithub">
          <a
            href="https://github.com/irere123/Board"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="githubIcon" />
          </a>
          <h4>Open Source Project</h4>
        </div>
      </div>
    </div>
  );
};

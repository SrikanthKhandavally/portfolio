import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/sri.jpeg"
                alt="sriknath"
              />
            </div>
            <div className="banner-text">
              <h1>Full Stack Blockchain Developer</h1>
              <hr />
              <p>
                MERN (Mongo, Express, React, Node) Stack, React Native, Python Django, Django Rest Framework, Ethereum, Hyperledger, Smart Contracts, Spring, Spring Boot, Microservices, Chain code, Docker, AWS, Kubernetes
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://twitter.com/TheBlockDev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://github.com/SrikanthKhandavally/
                  "
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/srikanth-khandavally-0a32811b0"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;

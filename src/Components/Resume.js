import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import sri_professional from './images/Sri-professional.jpeg'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={sri_professional}
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Srikanth Khandavally</h2>
            <h4 style={{ color: "grey" }}>Full Stack Blockchain Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p>
            Full stack Developer with 3+ years of experience in object-oriented design, implementation, deployment and 
            maintenance of MERN(Mongo Express React Node) Stack applications using software development life cycle, agile and 
            scrum methodologies.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1100 W Corral Ave APT #168</p>
            <p>Kingsville TX 78363</p>
            <h5>Phone</h5>
            <p>+1(214) 308-8703</p>
            <h5>Email</h5>
            <p>srikanthk.khandavally@gmail.com</p>
            <h5>GitHub</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://github.com/SrikanthKhandavally/"
            >
              My GitHub Profile
            </a>
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1lv3sZQL0KI2VzApsUw13avOHF-VQ8GER/view?usp=sharing"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2017}
              schoolName={"Jawaharlal Nehru Technological University - Hyderabad"}
              degreeName={"Bachelor of Technology in Electronics and Instrumentation Engineering"}
            />
            <Education
              startYear={2017}
              endYear={2020}
              schoolName={"Texas A&M Univeristy - Kingsville"}
              degreeName={"Master of Science in Computer Science"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"July 2019"}
              endYear={"September 2020"}
              jobName={"Full Stack Blockchain Developer"}
              jobDesc={"Design, Implement, Test and Deploy Smart Contracts on \
               Ethereum and Hyperledger Platforms and Develop Backend Rest API's using Node.js and Python Django \
               and Django Rest Framework "}
            />
            <Experience
              startYear={"July 2018"}
              endYear={"July 2019"}
              jobName={"Software Development Engineer"}
              jobDesc={
                "Write React and React Native components accroding to the requirements of Stakeholders and Develop the backend Rest API's\
                using Node.js and Express.js and Querying the API's using GraphQL."
              }
            />
            <Experience
              startYear={"December 2016"}
              endYear={"June 2018"}
              jobName={"Software Engineer"}
              jobDesc={
                "Develop Rest API's and Frontend React Components and creating and deploying the Docker containers to AWS"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"Node.js"} progress={70} />
            <Skills skill={"ReactJS & Redux"} progress={80} />
            <Skills skill={"React Native"} progress={85} />
            <Skills skill={"Blockchain, Solidity & Hyperledger Fabric"} progress={93} />
            <Skills skill={"MongoDB, MYSQL"} progress={85} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments & Certifications</h2>
            <h6>Promoted as president from volunteer in Vignana Vahini foundation where students are taught practical and real world applications
                of Science & Technology</h6>
            <h6>Oracle Certified Java Professional</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

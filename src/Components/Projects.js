import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

import ecommerce from './images/ecommerce.jpeg'
import texas from './images/texas.jpg'
import port from './images/port.jpeg'
import election from './images/decentralized.jpeg'
import ico from './images/ERC-20.png'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.aboutTexas = () => {
      window.location.assign(
        "https://github.com/SrikanthKhandavally/about-texas"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/ismail5g/my-portfolio");
    };
    this.portfoliolive = () => {
      window.location.assign("https://devismail.netlify.app/");
    };
    this.ecommerce = () => {
      window.location.assign("https://github.com/SrikanthKhandavally/Farm-Front-End/");
    };
    this.Cryptocurrency = () => {
      window.location.assign("https://github.com/SrikanthKhandavally/token_sale");
    };
    this.election = () => {
      window.location.assign(
        "https://github.com/SrikanthKhandavally/Election"
      );
    };

    this.toggleCategories = () => {
      if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* E - Commerce */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: `url(${ecommerce}) center / cover`,
                }}
              >
                E - Commerce
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a E-Commerce application where users can buy and sell goods.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.ecommerce.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>





            {/* About  - Texas*/}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: `url(${texas}) center / cover`,
                }}
              >
                About - Texas
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a sample application built out of love towards Texas state
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.aboutTexas.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>



            {/* Portfolio */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: `url(${port}) center / cover`,
                }}
              >
                Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This portfolio designed by REACT JS
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.portfolio.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } 
      
      
      else {
        return (
          <div className="projects-grid">            
            {/* Decentralized Election */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: `url(${election}) center / cover`,
                }}
              >
                Decentralized Election
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a application where user can vote to the contestents in the election 
                the results will be stored on the blockchain so that there is no tampering.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.election.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Ecom-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: `url(${ico}) center / cover`,
                }}
              >
                Initial Coin Offering
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is an application where a company can initiate their ICO and users can buy the coins built on top of Ethereum ERC-20 Standard
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.Cryptocurrency.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Blockchain</Tab>
          <Tab>React JS</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

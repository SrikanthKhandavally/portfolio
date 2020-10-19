import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>SRIKANTH KHANDAVALLY</h2>
            <img style={{height: '250px'}} src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              An Engineer by profession <br/>
              A Programmer by passion <br/>
              Blockchain Dev <br/>
              AI Enthusiast <br/>
    
              I have been very passionate about how technology can connect people,
              solve problems in an unexpected ways. I am much more interested in building technology that enables trust 
              among the parties involved that is why computers and programming Blockchain since
              my university life. I dream to be an expert software engineer so
              that I can build professional and useful software that has
              business value.
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                  
              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+1(214) 308-8703</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden='true'></i>srikanthk.khandavally@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

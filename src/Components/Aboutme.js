import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Srikanth Khandavally</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
          I am an Engineer by Profession,
          <br />
          <br />
          A Progrmmer by passion,
          <br />
          <br />
          Blockchain Developer & Crypto currency investor and enthusiast
          <br />
          <br />
          i have 3+ years of work experience as a Software Engineer writing clean and efficient code. I have experience developing frontend applications with React.js and Redux and mobile applications with React Native. i am well experienced with building backend REST API's using Node.js, GraphQL, Python Django and Flask and writing unit tests using Mocha and chai and also developing frontend using React and Redux. I also have experience dockerizing web applications and deploying the Docker containers to Amazon Web Services.

          i have 2+ years of experience of writing and testing smart contracts in solidity and deploying them on to Ethereum network, and also integrating the contracts with the applications. 

          <br />
          I am sure given a chance i will never disappoint you.

        </p>
      </div>
    );
  }
}

export default Aboutme;

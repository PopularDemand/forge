import React from 'react';
import { Formio } from 'react-formio';
import './homepage.scss';

function Homepage() {
  return (
    <div className="homepage">
      <div className="jumbotron hero">
        <h1 className="hero-text">
          Begin your journey
        </h1>
        <button className="btn btn-lg primary cta-btn disabled">Under Construction</button>

        <div className="form-wrapper">
          <h3 className="form-header">Claim your name</h3>
          <p>While you're here, claim your personal nickname!</p>
          <Formio src="https://exrrohbiimmsewq.form.io/mailing"></Formio>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

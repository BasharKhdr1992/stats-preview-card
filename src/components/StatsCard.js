import React from 'react';
import './StatsCard.css';
import bg from '../assets/image-header-desktop.jpg';

const StatsCard = () => {
  return (
    <div className="stats-card">
      <div className="stats-card-img-container">
        <img src={bg} alt="Poeple in the office" />
        <div className="img-overlay"></div>
      </div>
      <div className="stats-card-desc">
        <h1 className="header">
          Get&nbsp;<span className="accent">insights</span>&nbsp;that help your
          business grow.
        </h1>
        <p className="main-para">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats-row">
          <div className="stats-col">
            <h2>10k+</h2>
            <p>companies</p>
          </div>
          <div className="stats-col">
            <h2>314</h2>
            <p>templates</p>
          </div>
          <div className="stats-col">
            <h2>12M+</h2>
            <p>queries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

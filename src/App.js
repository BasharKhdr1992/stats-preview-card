import React from 'react';
import './App.css';
import StatsCard from './components/StatsCard';
import Appendix from './components/Appendix';

const App = () => {
  return (
    <div className="wrapper">
      <StatsCard />
      <Appendix />
    </div>
  );
};

export default App;

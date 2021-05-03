import React, { useState } from 'react';
import executiveData from '../data/executiveData'
import Executive from './Executive'

const Executives = () => {
  const [exec, setExec] = useState(executiveData)

  return (
    <div>
      <h1 className="m-5">EXECUTIVE TEAM</h1>
      <h6 className="m-5">At your service!</h6>
      <p className="m-5">Meet the Exec Team! Each academic year, there would be an election for the Permika members to vote for the next President and VPs</p>
      <Executive exec={exec}/>
    </div>
  );
};

export default Executives;

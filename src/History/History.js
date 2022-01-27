import React from 'react';
import './History.css'

const History = (props) => {
  const renderlist =props.list.map((e,i)=>{
      return <div className='list2' key={i}>
                <div className="l1">{e.text}</div>
                <div className="l2">${e.amount}</div>
            </div>
  })
    
  
  return <div className='historycomp'>
      <h1>History</h1>
      <hr className='hist' />
      <ul>
          {renderlist}
      </ul>
  </div>;
};

export default History;

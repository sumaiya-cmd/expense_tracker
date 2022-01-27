import React from 'react';
import './Show.css'

const Show = (props) => {
  return <div className='showcomp'>
      <h2>YOUR BALANCE <br /> ${props.income + props.expense }</h2> <br />
      <div className="showexp">
          <h3> <span >INCOME</span> <br /> <span className='incomemoney'>${props.income}</span></h3> <hr />
          <h3 className='showexp2'> <span  >EXPENSE</span> <br /> <span className='expensemoney'>${props.expense}</span></h3>
      </div>

  </div>;
};

export default Show;

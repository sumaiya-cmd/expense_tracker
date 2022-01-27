
import React,{useState} from 'react';
import './Transaction.css'

const Transaction = (props) => {
  const [bal, setbal] = useState({
    text:"",
    amount:""
  });
  
  const changehandler =(e)=>{
    setbal({...bal,[e.target.name]:e.target.value})
  }

  const addtrans = () => {
    props.add({text:bal.text ,amount:+(bal.amount)})
  }

  return <div className='transactioncomp'>
      <h1>Add new transaction </h1>
      <hr />
      <br />
      <h4>Text</h4>
      <input type="text" value={bal.text} onChange={changehandler} placeholder='Enter text...' name='text'/>
      <br /> <br />
      <h4>Amount <br />(negative-expense ,positive-income)</h4>
      <input type="text" value={bal.amount} onChange={changehandler} placeholder='Enter Amount...' name='amount'/> 
      <button onClick={addtrans}>Add </button>
  </div>;
};

export default Transaction;

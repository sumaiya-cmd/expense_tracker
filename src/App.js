import React,{useState} from 'react';
import Show from "./Show/Show";
import History from "./History/History.js";
import Transaction from "./Transaction/Transaction";
import './App.css'

const App = () => {

  const [bal, setbal] = useState({
    income:"",
    expense:""
  });

  const [list, setlist] = useState([
    {text:"Book" , amount:+200},
    {text:"Camera" , amount:-500},
    {text:"brochure" , amount:-200},
    {text:"laptop" , amount:+4500},
  ]);

  const income = ()=>{
    let i =0;
    list.forEach(e => {
      if(e.amount>0){
        i+=e.amount
      }
    });
    return i;
  }

  const expense = ()=>{
    let i =0;
    list.forEach(e => {
      if(e.amount<0){
        i+=e.amount
      }
    });
    return i;
  }

  const addlist =(data)=>{
    let copylist = [...list]
    copylist.push(data)
    setlist(copylist)
  }

  return <div className='appcomp'>
    <h1>Expense Tracker</h1>
    <Show income={income()} expense ={expense()} />
    <History list={list} />
    <Transaction add={addlist}  />
  </div>;
};

export default App;

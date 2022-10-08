import './App.css';
import Header from "./MyComponents/Header";
import { Schs } from "./MyComponents/Schs";
import { Footer } from "./MyComponents/Footer";
import { AddSch } from "./MyComponents/AddSch";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initSch;
  if (localStorage.getItem("schs") === null) {
    initSch = [];
  }
  else {
    initSch = JSON.parse(localStorage.getItem("schs"));
  }


  const onDelete = (sch) => {
    setSchs(schs.filter((e) => {
      return e !== sch;
    }));
    localStorage.setItem("schs", JSON.stringify(schs));
  }

  const addSch = (title, desc) => {
    let sno;
    if (schs.length === 0) {
      sno = 0;
    }
    else {
      sno = schs[schs.length - 1].sno + 1;
    }
    const mySch = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setSchs([...schs, mySch]);
    console.log(mySch);
  }

  const [schs, setSchs] = useState(initSch);
  useEffect(() => {
    localStorage.setItem("schs", JSON.stringify(schs));
  }, [schs])

  return ( 
    <> 
    <Router>
      <Header title="Daily Schedule"/> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <section className='container1'>
            <AddSch addSch={addSch} />
            <Schs schs={schs} onDelete={onDelete} /> 
            </section>)
          }}> 
          </Route>
          <Route exact path="/about">
            <section className='container2'><About /></section>
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
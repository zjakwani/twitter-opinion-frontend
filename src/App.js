import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => {
    axios
      .get("http://twitter-opinion.herokuapp.com/")
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://twitter-opinion.herokuapp.com/", {
        keyword: "Obama",
        count: 2,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>zain</p>
        <div>
          {getMessage.status === 200 ? (
            <h3>{getMessage.data.message}</h3>
          ) : (
            <h3>LOADING</h3>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

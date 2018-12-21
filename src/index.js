import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import shuffle from './shuffle.js'
import Header from './header'
import getIcons from './api.js'
import Main from './main'

import "./styles.css";
import "tachyons";

function App() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    getIcons().then((newIcons) => setEmojis(shuffle(newIcons)))
  }, []);

  return (
    <div className="dt w-100 border-box pa3 ph5-ns">
      <Header />
      <Main emojis={emojis} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

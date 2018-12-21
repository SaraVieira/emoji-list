import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import shuffle from './shuffle.js'

import "./styles.css";
import "tachyons";

const emojiName = emoji => emoji.split("emoji_u")[1].split(".svg")[0];
function App() {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/googlei18n/noto-emoji/git/trees/8fc03b77c937cc3f639bff6e9e1dd9e6d66583cf"
    )
      .then(rsp => rsp.json())
      .then(d => {
        const newIcons = d.tree
          .filter(t => t.path.includes("svg"))
          .map(e => {
            const unicode = emojiName(e.path);
            return {
              unicode,
              path: e.path,
            };
          });

        setEmojis(shuffle(newIcons));
      });
  }, []);

  const BASE =
    "https://rawcdn.githack.com/googlei18n/noto-emoji/07ad7f0f4dc1bfb03221c2004c7cc60c6b79b25e/svg";

  const download = e => window.open(`${BASE}/${e.path}`, "_blank");
  return (
    <Fragment>
      <nav class="dt w-100 border-box pa3 ph5-ns">
          <span role="img" aria-label="logo">🎉</span>
          <div class="dtc v-mid w-75 tr">
          <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="https://github.com/googlei18n/noto-emoji" title="NotoEmoji">NotoEmoji</a>
            <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Github">Github</a>
            <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
          </div>
</nav>

      <h1>Download all googles emojis</h1>
      <ul className="flex flex-wrap pa0 justify-center items-center">
        {emojis.map(emoji => (
          <li className="pa1 list f7" key={emoji.path}>
            <button onClick={() => download(emoji)}>
            {JSON.stringify(emoji.name)}
              {String.fromCodePoint(parseInt(emoji.unicode, 16))}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

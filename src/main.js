import React from "react";



const BASE =
  "https://rawcdn.githack.com/googlei18n/noto-emoji/07ad7f0f4dc1bfb03221c2004c7cc60c6b79b25e/svg";

const download = e => window.open(`${BASE}/${e.path}`, "_blank");

export default ({ emojis }) => (
  <main>
    <h1 className="tc">Download all emoji svg's</h1>
    <p className="tc">Click on an icon to get you through their svg</p>
    <ul className="emojis pa0 mt4">
      {emojis.length > 0 ? (
        emojis.map(emoji => (
          <li className="pa1 list f7" key={emoji.path}>
            <button onClick={() => download(emoji)}>
              {String.fromCodePoint(parseInt(emoji.unicode, 16))}
            </button>
          </li>
        ))
      ) : (
        <div class="lds-css ng-scope"><div style={{width:'100%',height:'100%'}} class="lds-ball"><div></div></div></div>
      )}
    </ul>
  </main>
);

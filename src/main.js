import React, { useState, useEffect } from "react";
import LazyLoad, { forceCheck } from 'react-lazyload';

const BASE =
  "https://rawcdn.githack.com/googlei18n/noto-emoji/07ad7f0f4dc1bfb03221c2004c7cc60c6b79b25e/svg";

const download = e => window.open(`${BASE}/${e.path}`, "_blank");

export default ({ emojis }) => {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  const searchEmojis = e => {
    const value = e.target.value;

    if(value === '') {
      console.log(emojis)
      return reset()
    }
    setFilteredEmojis(
      filteredEmojis.filter(
        e => value.includes(String.fromCodePoint(parseInt(e.unicode, 16)))
      )
    );
  };

  const reset = () => setFilteredEmojis(emojis);

  useEffect(
    () => {
      reset()
    },
    [emojis]
  );

  useEffect(() => forceCheck(), [filteredEmojis])

  return (
    <main>
      <h1 className="tc">Download all emoji svg's</h1>
      <p className="tc">Click on an icon to get you through their svg</p>
      <input
        type="search"
        className="pa2 w-100"
        placeholder="Please only search with the emoji you want"
        onChange={e => searchEmojis(e)}
      />
      <ul className="emojis pa0 mt4">
        {emojis.length > 0 ? (
          filteredEmojis.map(emoji => (
            <li className="pa1 list f7" key={emoji.path}>
              <button onClick={() => download(emoji)}>
                <LazyLoad height={26} offset={200}>
                  <img src={`${BASE}/${emoji.path}`} alt={emoji.unicode} />
                </LazyLoad>
              </button>
            </li>
          ))
        ) : (
          <div class="lds-css ng-scope">
            <div style={{ width: "100vw", height: "100vh" }} class="lds-ball">
              <div />
            </div>
          </div>
        )}
      </ul>
    </main>
  );
};

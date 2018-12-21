import React from 'react'


const BASE =
    "https://rawcdn.githack.com/googlei18n/noto-emoji/07ad7f0f4dc1bfb03221c2004c7cc60c6b79b25e/svg";

const download = e => window.open(`${BASE}/${e.path}`, "_blank");



export default ({emojis}) => (
    <main>
        <h1>Download all googles emojis</h1>
        <ul className="flex flex-wrap pa0 justify-center items-center">
            {emojis.map(emoji => (
                <li className="pa1 list f7" key={emoji.path}>
                    <button onClick={() => download(emoji)}>
                        {String.fromCodePoint(parseInt(emoji.unicode, 16))}
                    </button>
                </li>
            ))}
        </ul>
    </main>
)
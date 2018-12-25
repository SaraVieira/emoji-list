const emojiName = emoji => emoji.split("emoji_u")[1].split(".svg")[0];

export const google = () =>
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
            path: e.path
          };
        });

      return newIcons;
    });


export const openMoji = () =>
  fetch(
    "https://api.github.com/repos/hfg-gmuend/openmoji/git/trees/0d9eb666aa51d73c15c3b499721c0411d34d6501"
  )
    .then(rsp => rsp.json())
    .then(d => {
      const newIcons = d.tree
        .filter(t => t.path.includes("svg"))
        .map(e => {
          const unicode = e.path.split(".svg")[0].split('-').join('_');
          return {
            unicode,
            path: e.path
          };
        });

      return newIcons;
    });

export const apple = () =>
  fetch(
    "https://api.github.com/repos/iamcal/emoji-data/git/trees/811d3db59e9c9ae0b3df4a10b0ed5c8362f58aa6"
  )
    .then(rsp => rsp.json())
    .then(d => {
      console.log(d)
      const newIcons = d.tree
        .filter(t => t.path.includes("png"))
        .map(e => {
          const unicode = e.path.split(".png")[0].split('-').join('_');
          return {
            unicode,
            path: e.path
          };
        });

      return newIcons;
    });

apple()
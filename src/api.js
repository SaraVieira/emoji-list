const emojiName = emoji => emoji.split("emoji_u")[1].split(".svg")[0];

export default () =>
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

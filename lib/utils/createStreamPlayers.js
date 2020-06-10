/* eslint-disable no-undef */
/* eslint-disable no-new */

export const createStreamPlayers = (streams, { initialHeight = 200 }) => {
  for (const stream of streams) {
    new Twitch.Player(stream.channel, stream);
  }
  document.querySelectorAll('iframe').forEach(iframe => {
    iframe.height = initialHeight;
  });
};

import shaka from "shaka-player";

let player;
let videoElement;

export const state = {
  playingState: false,
};

const init = async (element) => {
  shaka.polyfill.installAll(); // polyfilling for devices that need it.

  videoElement = element;

  if (!videoElement) {
    videoElement = document.createElement("video");

    videoElement.style.cssText =
      "position: absolute; top: 0; left: 0; z-index: -1";

    videoElement.width = window.innerWidth;
    videoElement.height = window.innerHeight;

    player = new shaka.Player();
    await player.attach(videoElement);

    videoElement.autoplay = false;

    player.addEventListener("error", (err) => {
      console.error(err);
    });
    document.body.insertBefore(videoElement, document.body.firstChild);
  }
};
/**
 * Loads the player.
 * @param {Object} config - The player configuration.
 * @returns {Promise<void>}
 */
const load = async (config) => {
  if (!player || !videoElement) {
    throw "Player not initialized yet";
  }

  await player.load(config.streamUrl);
};

const play = () => {
  videoElement.play().then(() => {
    state.playingState = true;
  });
};

const pause = () => {
  videoElement.pause();
  state.playingState = false;
};

const destroy = async () => {
  await player.destroy();

  player = null;
  videoElement.remove();
  videoElement = null;
};

const getCurrentTime = () => {
  return videoElement.currentTime;
};

const getVideoDuration = () => {
  return videoElement.duration;
};

const getTimeFormat = () => {
  let secondsToMmSs = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(14, 5);
  return `${secondsToMmSs(videoElement.currentTime)} : ${secondsToMmSs(
    Math.floor(videoElement.duration)
  )}`;
};

export default {
  init,
  load,
  play,
  pause,
  getCurrentTime,
  getVideoDuration,
  getTimeFormat,
  state,
  destroy,
};
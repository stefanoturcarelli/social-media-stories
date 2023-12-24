"use strict";

const mediaContainer = document.querySelector(".media-container");

// Unsplash API
const URL = "https://source.unsplash.com/random/";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  mode: "cors",
};

// Async Function to get media
async function getMedia() {
  try {
    const result = await fetch(URL, options);
    if (!result.ok) {
      throw new Error(`${result.statusText} (${result.status})`);
    }

    const media = result.url;

    // Use the url in the result with the setMedia() function
    setMedia(media);
  } catch (error) {
    console.error(error.message);
  }
}

function setMedia(media) {
  mediaContainer.style.background = `url(${media}) no-repeat center center / cover fixed`;
}

// Fetch and display users on page load
getMedia();

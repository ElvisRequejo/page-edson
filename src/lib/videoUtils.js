export function loadVideo(url) {
    const iframe = document.getElementById("videoFrame");
    iframe.src = `https://www.youtube.com/embed/${url}`;
  }

  function handleImageClick(video) {
    loadVideo(video.urlVideo);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".video-thumbnail");
    images.forEach((image) => {
      image.addEventListener("click", () => {
        handleImageClick(video);
      });
    });
  });
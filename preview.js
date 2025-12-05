function playPreview(id) {
  const audio = document.getElementById(id);

  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 30000);
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

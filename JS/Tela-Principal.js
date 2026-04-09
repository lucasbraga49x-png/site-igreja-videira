  const track = document.querySelector(".carousel-track");
  const cardWidth = 220;
  let position = 0;

  document.querySelector(".right").addEventListener("click", () => {
    position -= cardWidth;
    track.style.transform = `translateX(${position}px)`;
  });

  document.querySelector(".left").addEventListener("click", () => {
    position += cardWidth;
    track.style.transform = `translateX(${position}px)`;
  });


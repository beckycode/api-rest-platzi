const url = "https://api.thecatapi.com/v1/images/search?limit=5";

loadImage();

async function loadImage() {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let index = 0; index < 5; index++) {
        const img = document.querySelector(`.image${index + 1}`);
        img.src = data[index].url;
      }
    });
}

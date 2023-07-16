FetchPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(res => {
          DrawHTML(res.slice(0, 100));
      })
      .catch(err => console.error(err));
};

FetchPhotos();

DrawHTML = (photos) => {
  const section = document.createElement("section");
  section.classList.add("images");

  if (photos.length > 0) {
      for (let i = 0; i < photos.length; i++) {
          const img = document.createElement("img");
          img.src = photos[i].thumbnailUrl;
          section.appendChild(img);

          img.addEventListener("click", function () {
              if (img.src === photos[i].thumbnailUrl) {
                  DrawPopup(photos[i].url);
              }
          });
      };
      document.body.appendChild(section);
  };
};

DrawPopup = (url) => {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const imageHolder = document.createElement("div");
  imageHolder.classList.add("image-holder");

  const button = document.createElement("button");
  button.innerHTML = "X";

  button.addEventListener("click", function() {
      popup.remove();
  });

  const img = document.createElement("img");
  img.src = url;

  imageHolder.appendChild(button);
  imageHolder.appendChild(img);
  popup.appendChild(imageHolder);
  document.body.appendChild(popup);
};
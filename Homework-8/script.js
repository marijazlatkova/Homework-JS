fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(response => {
    let photos = response.slice(0, 100);

    photos.forEach(photo => {
      let img = document.createElement('img');
      document.body.appendChild(img);
      img.src = photo.thumbnailUrl;
      img.style.width = '9em';
      img.style.height = '9em';
      img.style.margin = '.9em';
      img.style.borderRadius = '.5em';
      img.style.cursor = 'pointer';
      img.style.transition = 'transform 0.7ms ease';

      img.addEventListener('pointerenter', () => {
        img.src = photo.url;
        img.style.transform = 'scale(1.2)';
      });

      img.addEventListener('pointerleave', () => {
        img.src = photo.thumbnailUrl;
        img.style.transform = 'scale(1)';
      });
    });
  })
  .catch(error => console.log(error));
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgGallery = document.querySelector('.gallery');
console.log(imgGallery);

const contentStyle = document.querySelectorAll('li');
for (const image of images) {
  imgGallery.insertAdjacentHTML(
    `afterbegin`,
    `<li><img src = ${image.url} alt = '${image.alt}' width='100%' height='100%' ></li>`
  );
}

imgGallery.style.listStyle = 'none';
imgGallery.style.display = 'flex';
imgGallery.style.justifyContent = 'center';
imgGallery.style.padding = '0';
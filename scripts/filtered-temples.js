document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
    templeName: "Los Angeles California",
    location: "Los Angeles, California, United States",
    dedicated: "1956, March, 11",
        area: 190614,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
    },
    {
    templeName: "Redlands California",
    location: "Redlands, California, United States",
    dedicated: "2003, September, 14",
        area: 17300,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-37504-main.jpg"
    },
    {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    }
];

createTempleCard(temples);

const homelink = document.querySelector("#homelink");
const newlink = document.querySelector("#newlink");
const oldlink = document.querySelector("#oldlink");
const largelink = document.querySelector("#largelink");
const smalllink = document.querySelector("#smalllink");

homelink.addEventListener('click', () => {
    clearContainer();
    createTempleCard(temples);
});

newlink.addEventListener('click', () => {
    clearContainer();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) > 2000));
});

oldlink.addEventListener('click', () => {
    clearContainer();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) < 1900));
});

largelink.addEventListener('click', () => {
    clearContainer();
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smalllink.addEventListener('click', () => {
    clearContainer();
    createTempleCard(temples.filter(temple => temple.area < 10000));
});




function createTempleCard(filteredTemples) {
    filteredTemples.forEach((temple) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector('div.container').appendChild(card);
    });
}

function clearContainer() {
    const container = document.querySelector('div.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

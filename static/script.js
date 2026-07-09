const base =
    window.location.pathname === "/"
        ? "static/images/"
        : "../static/images/";

const photos = [
    base + "photo1.jpeg",
    base + "photo2.jpeg",
    base + "photo3.jpeg",
    base + "photo4.jpeg",
    base + "photo5.jpeg",
    base + "photo6.JPG",
    base + "photo7.jpeg",
    base + "photo8.JPG",
    base + "photo9.JPG",
    base + "photo10.JPG",
    base + "photo11.JPG",
];

let current = 0;

const image = document.getElementById("carousel-image");

function updateImage() {
    image.src = photos[current];
}

document.querySelector(".next").onclick = () => {
    current = (current + 1) % photos.length;
    updateImage();
};

document.querySelector(".prev").onclick = () => {
    current = (current - 1 + photos.length) % photos.length;
    updateImage();
};
const card =
document.querySelector(".business-card");

card.addEventListener("mousemove", e => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    ((x / rect.width) - 0.5) * 10;

    const rotateX =
    ((y / rect.height) - 0.5) * -10;

    card.style.transform =
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
    "rotateY(0deg) rotateX(0deg)";

});
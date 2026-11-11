const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const successMessage = document.getElementById("successMessage");

// Make the NO button run away
// function moveNoButton() {

//     const cardRect = card.getBoundingClientRect();
//     const buttonRect = noBtn.getBoundingClientRect();

//     const maxX = cardRect.width - buttonRect.width - 20;
//     const maxY = cardRect.height - buttonRect.height - 20;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     noBtn.style.position = "absolute";
//     noBtn.style.left = randomX + "px";
//     noBtn.style.top = randomY + "px";
// }
function moveNoButton() {

    const cardRect = card.getBoundingClientRect();

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = card.clientWidth - buttonWidth - 20;
    const maxY = card.clientHeight - buttonHeight - 20;

    const randomX = 10 + Math.random() * (maxX - 10);
    const randomY = 150 + Math.random() * (maxY - 150);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
// Mouse interaction
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile interaction
noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});

// YES button
yesBtn.addEventListener("click", () => {

    successMessage.innerHTML =
        "YAYYYY! ❤️🌹 See you soon!";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️", "💕", "💗", "🌸"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);
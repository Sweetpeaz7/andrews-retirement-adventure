const retirementDate = new Date("2027-07-27T00:00:00");

const photos = [];
for(let i=1;i<=25;i++){
    photos.push(`images/photo${i}.jpg`);
}

const quotes = [
    "☕ One less coffee until retirement.",
    "🎣 The fish don't know it's Tuesday.",
    "🏕️ The camper is waiting.",
    "🛶 Kayak adventures loading.",
    "🚴 Retirement means riding whenever you want.",
    "📚 Reading backlog detected.",
    "🎬 Sci‑Fi marathon loading.",
    "🌏 National Geographic mode activated.",
    "🍕 Midweek pizza is called retirement.",
    "🥞 Retirement weekends are every day.",
    "🦘 Adventure can start with a walk.",
    "🎨 Creativity never retires."
];

let currentPhoto = 0;

function rotatePhotos() {
    document.body.style.backgroundImage =
        `url('${photos[currentPhoto]}')`;

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }
}



function updateCountdown() {

    const now = new Date();

    const diff = retirementDate - now;

    if(diff <= 0){

        document.body.style.backgroundImage =
            "url('images/burning-work-clothes.jpg')";

        document.querySelector(".overlay").innerHTML = `
            <h1>🎂 HAPPY 60TH BIRTHDAY DAD!</h1>
            <h2>⏰ Time To Clock Off For Good!</h2>
            <h3>🏕️ Adventure Begins Now</h3>
        `;

        return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="count-grid">

            <div class="count-box">
                <strong>${days}</strong>
                Days
            </div>

            <div class="count-box">
                <strong>${hours}</strong>
                Hours
            </div>

            <div class="count-box">
                <strong>${minutes}</strong>
                Minutes
            </div>

            <div class="count-box">
                <strong>${seconds}</strong>
                Seconds
            </div>

        </div>
    `;

    document.getElementById("quote").innerText =
        quotes[new Date().getDate() % quotes.length];

    document.getElementById("percent").innerText =
        "Retirement Adventure Loading...";
}

window.addEventListener("load", function () {

    rotatePhotos();
    updateCountdown();

    setInterval(rotatePhotos, 20000);
    setInterval(updateCountdown, 1000);

});

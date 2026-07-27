const retirementDate = new Date("2027-07-27T00:00:00");

const photos = [];
for (let i = 1; i <= 25; i++) {
    photos.push(`images/photo${i}.jpg`);
}

const quotes = [
    "☕ One less coffee until retirement.",
    "🎣 The fish don't know it's Tuesday.",
    "🏕️ The camper is waiting.",
    "🛶 Kayak adventures loading.",
    "🚶 Bushwalking adventures await.",
    "🚴 Retirement means riding whenever you want.",
    "📚 Reading backlog detected.",
    "📖 Manga collection awaiting deployment.",
    "🎬 Sci‑Fi marathon loading.",
    "🌏 National Geographic mode activated.",
    "🍕 Midweek pizza is called retirement.",
    "🥞 Retirement weekends are every day.",
    "🐨 More time to notice the little things.",
    "🦘 Adventure can start with a walk.",
    "🛠️ Side projects unlocked.",
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

function getMilestone(days) {

    if (days <= 1)
        return "🥳 ONE MORE SLEEP";

    if (days <= 7)
        return "🚐 ADVENTURE MODE LOADING...";

    if (days <= 30)
        return "☕ RETIREMENT PRACTICE MODE";

    if (days <= 50)
        return "📺 COUCH SITTING LEVEL: BEGINNER";

    if (days <= 100)
        return "🏊 MORE POOL DAYS ARE COMING";

    if (days <= 183)
        return "🎉 HALF WAY THERE";

    if (days <= 274)
        return "🏕️ FINAL QUARTER";

    return "🚙 THE CAMPER IS WAITING";
}

function updateCountdown() {

    const now = new Date();

    const diff = retirementDate - now;

    if (diff <= 0) {

        document.body.style.backgroundImage =
            "url('images/burning-work-clothes.jpg')";

        document.querySelector(".overlay").innerHTML = `
            <h1>🎂 HAPPY 60TH BIRTHDAY DAD!</h1>

            <h2>⏰ Time To Clock Off For Good!</h2>

            <h3>🔥 Work Gear Retired</h3>

            <p>
            ☕ Coffee<br>
            🎣 Fishing<br>
            🛶 Kayaking<br>
            🚶 Bushwalking<br>
            🚴 Cycling<br>
            🏍️ Motorbike Rides<br>
            🎨 Art<br>
            📚 Books<br>
            📖 Comics & Manga<br>
            🎬 Sci‑Fi Movies<br>
            🌏 Learning<br>
            🏕️ Camping<br>
            🚙 Road Trips
            </p>

            <h2>🏕️ Adventure Begins Now</h2>
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

    document.getElementById("milestone").innerText =
        getMilestone(days);

    const totalDays = 365;
    const progress =
        ((totalDays - days) / totalDays) * 100;

    document.getElementById("bar").style.width =
        progress + "%";

    document.getElementById("percent").innerText =
        progress.toFixed(1) + "% Complete";
}

window.addEventListener("load", function () {

    rotatePhotos();
    updateCountdown();

    setInterval(rotatePhotos, 20000);
    setInterval(updateCountdown, 1000);

});

const retirementDate = new Date("2027-07-27T00:00:00");
const startDate = new Date("2026-07-27T00:00:00");

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg",
    "images/photo13.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg",
    "images/photo16.jpg",
    "images/photo17.jpg",
    "images/photo18.jpg",
    "images/photo19.jpg",
    "images/photo20.jpg",
    "images/photo21.jpg",
    "images/photo22.jpg",
    "images/photo23.jpg",
    "images/photo24.jpg",
    "images/photo25.jpg"
];

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

rotatePhotos();
setInterval(rotatePhotos, 20000);

function getMilestone(daysRemaining) {

    if (daysRemaining <= 1) {
        return "🥳 ONE MORE SLEEP";
    }

    if (daysRemaining <= 7) {
        return "🚐 ADVENTURE MODE LOADING...";
    }

    if (daysRemaining <= 30) {
        return "☕ RETIREMENT PRACTICE MODE";
    }

    if (daysRemaining <= 50) {
        return "📺 COUCH SITTING LEVEL: BEGINNER";
    }

    if (daysRemaining <= 100) {
        return "🏊 MORE POOL DAYS ARE COMING";
    }

    if (daysRemaining <= 183) {
        return "🎉 HALF WAY THERE";
    }

    if (daysRemaining <= 274) {
        return "🏕️ FINAL QUARTER";
    }

    return "🚙 THE CAMPER IS PACKED AND WAITING";
}

function updateCountdown() {

    const now = new Date();

    if (now >= retirementDate) {

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

        startConfetti();
        return;
    }

    const diff = retirementDate - now;

    const totalDays =
        Math.floor(
            (retirementDate - startDate) /
            (1000 * 60 * 60 * 24)
        );

    const remainingDays =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );

    const progress =
        ((totalDays - remainingDays) /
        totalDays) * 100;

    document.getElementById("bar").style.width =
        progress + "%";

    document.getElementById("percent").innerText =
        progress.toFixed(1) + "% Complete";

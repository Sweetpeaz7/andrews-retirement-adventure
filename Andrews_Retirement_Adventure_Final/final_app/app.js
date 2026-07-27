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
    if (photos.length > 0) {
        document.body.style.backgroundImage =
            `url('${photos[currentPhoto]}')`;

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }
    }
}

rotatePhotos();
setInterval(rotatePhotos, 20000);

function getMilestone(days) {

    if (days <= 1)
        return "🥳 One More Sleep";

    if (days <= 7)
        return "🚐 Adventure Mode Loading...";

    if (days <= 30)
        return "☕ Retirement Practice Mode";

    if (days <= 50)
        return "📺 Retirement Training: Couch Sitting Level Beginner";

    if (days <= 100)
        return "🏊 More pool days are coming";

    if (days <= 183)
        return "🎉 HALF WAY THERE";

    if (days <= 274)
        return "🏕️ Final Quarter";

    return "🚙 The camper is packed and waiting";
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
            📖 Manga<br>
            🎬 Sci‑Fi Movies<br>
            🏕️ Camping<br>
            🚙 Road Trips
            </p>

            <h2>🏕️ Adventure Begins Now</h2>
        `;

        startConfetti();
        return;
    }

    const diff = retirementDate - now;

    const totalDays = Math.floor(
        (retirementDate - startDate) /
        (1000 * 60 * 60 * 24)
    );

    const remainingDays = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const progress =
        ((totalDays - remainingDays) / totalDays) * 100;

    document.getElementById("bar").style.width =
        progress + "%";

    document.getElementById("percent").innerText =
        progress.toFixed(1) + "% Complete";

    let seconds = Math.floor(diff / 1000);

    const years = Math.floor(seconds / 31536000);
    seconds %= 31536000;

    const months = Math.floor(seconds / 2628000);
    seconds %= 2628000;

    const weeks = Math.floor(seconds / 604800);
    seconds %= 604800;

    const days = Math.floor(seconds / 86400);
    seconds %= 86400;

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    document.getElementById("countdown").innerHTML = `
        <div class="count-grid">

            <div class="count-box">
                <strong>${years}</strong>
                Years
            </div>

            <div class="count-box">
                <strong>${months}</strong>
                Months
            </div>

            <div class="count-box">
                <strong>${weeks}</strong>
                Weeks
            </div>

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
                <strong>${secs}</strong>
                Seconds
            </div>

        </div>
    `;

    document.getElementById("quote").innerText =
        quotes[new Date().getDate() % quotes.length];

    document.getElementById("milestone").innerText =
        getMilestone(remainingDays);
}

updateCountdown();
setInterval(updateCountdown, 1000);

function startConfetti() {

    const canvas =
        document.getElementById("confetti");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 5 + 1
        });
    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        pieces.forEach(p => {

            ctx.fillStyle =
                `hsl(${Math.random() * 360},100%,50%)`;

            ctx.fillRect(
                p.x,
                p.y,
                p.size,
                p.size
            );

            p.y += p.speed;

            if (p.y > canvas.height) {
                p.y = -20;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

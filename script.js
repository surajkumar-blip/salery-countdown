function updateCountdown() {

    const now = new Date();

    const salaryDate = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1,
        0,
        0,
        0
    );

    const monthStart = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
    );

    const difference = salaryDate - now;

    const days =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");


    // Salary date
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("salaryDate").innerText =
        "💰 Next Salary: " +
        salaryDate.toLocaleDateString("en-IN", options);


    // Monthly progress
    const totalMonthTime =
        salaryDate - monthStart;

    const completed =
        now - monthStart;

    let progress =
        (completed / totalMonthTime) * 100;

    progress = Math.min(progress, 100);

    document.getElementById("progressBar").style.width =
        progress + "%";

    document.getElementById("progressText").innerText =
        "Month Progress: " +
        progress.toFixed(1) +
        "%";
}

updateCountdown();

setInterval(updateCountdown, 1000);
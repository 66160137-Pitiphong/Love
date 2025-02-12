document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript โหลดสำเร็จ!");

    // 📆 ตั้งค่าวันที่เริ่มคบกัน
    const startDate = new Date("2023-10-03T00:00:00");

    function updateDaysTogether() {
        const now = new Date();
        const timeDiff = now - startDate; // ⏳ เวลาที่ผ่านไป (มิลลิวินาที)

        // คำนวณวัน ชั่วโมง นาที วินาที
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // ✅ ตรวจสอบและอัปเดตค่าใน HTML
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.textContent = days;
            hoursEl.textContent = hours.toString().padStart(2, "0");
            minutesEl.textContent = minutes.toString().padStart(2, "0");
            secondsEl.textContent = seconds.toString().padStart(2, "0");
        }
    }

    // ✅ เรียกใช้งานครั้งแรก
    updateDaysTogether();

    // ⏳ อัปเดตทุกวินาที
    setInterval(updateDaysTogether, 1000);

    // 🎁 ปุ่มเซอร์ไพรส์
    const surpriseBtn = document.getElementById("surpriseBtn");
    const surpriseContainer = document.getElementById("surpriseContainer");

    if (surpriseBtn && surpriseContainer) {
        surpriseBtn.addEventListener("click", function () {
            // ✅ ใช้ classList.toggle() เพื่อให้เปิด/ปิดได้
            surpriseContainer.classList.toggle("show");

            // ✅ เพิ่มเอฟเฟกต์ fade-in นุ่มนวล
            if (surpriseContainer.classList.contains("show")) {
                surpriseContainer.style.opacity = "0";
                surpriseContainer.style.display = "block";

                requestAnimationFrame(() => {
                    surpriseContainer.style.opacity = "1";
                });
            } else {
                surpriseContainer.style.opacity = "0";
                setTimeout(() => {
                    surpriseContainer.style.display = "none";
                }, 300); // ซ่อนหลังจาก fade-out
            }
        });
    } else {
        console.error("❌ ไม่พบปุ่มหรือที่แสดงเซอร์ไพรส์");
    }
    const anniversary = new Date("2025-10-03T00:00:00"); // ตั้งวันครบรอบ

function updateCountdown() {
    const now = new Date();
    const timeDiff = anniversary - now;

    // คำนวณวัน ชั่วโมง นาที วินาที
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    document.getElementById("countdown").textContent = days;
    document.getElementById("countdown-time").textContent = 
        `${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

// ✅ อัปเดตทุกวินาที
updateCountdown();
setInterval(updateCountdown, 1000);
});

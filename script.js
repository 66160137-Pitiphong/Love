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
// ✅ ตั้งค่า Swiper (ตัวเลื่อนภาพ)
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// ✅ ทำให้รูปขยายใหญ่เมื่อคลิก
document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('popupImg').src = this.src;
        document.getElementById('imagePopup').style.display = 'flex';
    });
});

// ✅ คลิกที่ Pop-up เพื่อปิด
document.getElementById('imagePopup').addEventListener('click', function() {
    this.style.display = 'none';
});
// ปรับให้หัวใจลอยเร็วขึ้น
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 1.5 + 1.5 + "s"; // (2s แทน 3s)
    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
setInterval(createHeart, 300); // เร็วขึ้นจาก 500ms → 400ms

// ปรับให้เปลี่ยนรูปเร็วขึ้น
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.style.opacity = 0;

    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1;
    }, 200); // เปลี่ยนเร็วขึ้นจาก 500ms → 300ms
}
setInterval(changeImage, 1000); // เปลี่ยนรูปเร็วขึ้น (จาก 3s → 2s)

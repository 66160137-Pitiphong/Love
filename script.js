document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript โหลดสำเร็จ!");

    // 📆 ตั้งค่าวันที่เริ่มคบกัน (เปลี่ยนตามวันที่จริง)
    const startDate = new Date("2023-10-03T00:00:00");

    function updateDaysTogether() {
        const now = new Date();
        const timeDiff = now - startDate; // ⏳ เวลาที่ผ่านไป (มิลลิวินาที)

        // คำนวณวัน ชั่วโมง นาที วินาที
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // ✅ ตรวจสอบว่ามี element ใน HTML ก่อนที่จะอัปเดตค่า
        if (document.getElementById("days")) {
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
        }
    }

    // ✅ เรียกใช้งานครั้งแรก
    updateDaysTogether();

    // ⏳ อัปเดตทุกวินาที
    setInterval(updateDaysTogether, 1000);
    const surpriseBtn = document.getElementById("surpriseBtn");
    const surpriseContainer = document.getElementById("surpriseContainer");

    if (surpriseBtn && surpriseContainer) {
        surpriseBtn.addEventListener("click", function () {
            surpriseContainer.style.display = "block"; // แสดงข้อความและรูปภาพ
            surpriseContainer.classList.add("show"); // เพิ่มเอฟเฟกต์ให้รูปขยายขึ้น
        });
    } else {
        console.error("❌ ไม่พบปุ่มหรือที่แสดงเซอร์ไพรส์");
    }
});

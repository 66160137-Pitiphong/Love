document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript โหลดแล้ว!"); // ตรวจสอบว่าโค้ดทำงานหรือไม่

    // ตั้งค่าวันที่เริ่มคบกัน (แก้ไขเป็นวันจริงของคุณ)
    const startDate = new Date("2023-01-01T00:00:00"); // 📆 เปลี่ยนเป็นวันของคุณ

    function updateDaysTogether() {
        const now = new Date();
        const timeDiff = now - startDate; // คำนวณเวลาที่ผ่านไป

        // แปลงค่าเวลาที่ต่างกัน
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        console.log(`⏳ คบกันมาแล้ว: ${days} วัน ${hours}:${minutes}:${seconds}`); // เช็คค่าที่ได้

        // ตรวจสอบว่ามี Element ใน HTML หรือไม่
        if (document.getElementById("days")) {
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
        } else {
            console.error("❌ ไม่พบ Element ที่ต้องการใน HTML!");
        }
    }

    // อัปเดตตัวเลขทุกวินาที
    updateDaysTogether();
    setInterval(updateDaysTogether, 1000);
});

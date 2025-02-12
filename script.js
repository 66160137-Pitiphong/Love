document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript โหลดสำเร็จ!");

    // 📆 ตั้งค่าวันที่เริ่มคบกัน (เปลี่ยนตามวันที่จริง)
    const startDate = new Date("2024-02-07T00:00:00");

    function updateDaysTogether() {
        const now = new Date();
        const timeDiff = now - startDate; // ⏳ เวลาที่ผ่านไป (มิลลิวินาที)

        // คำนวณ วัน ชั่วโมง นาที วินาที
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        console.log(`💖 คบกันมาแล้ว: ${days} วัน ${hours}:${minutes}:${seconds}`);

        // ✅ อัปเดตค่าใน HTML
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    // 🕒 เรียกใช้งานครั้งแรก
    updateDaysTogether();

    // ✅ อัปเดตทุกวินาที
    setInterval(updateDaysTogether, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const surpriseBtn = document.getElementById("surpriseBtn");
    const surpriseText = document.getElementById("surpriseText");

    if (surpriseBtn) {
        surpriseBtn.addEventListener("click", function () {
            surpriseText.style.display = "block";
            surpriseBtn.style.display = "none";
        });
    }
});

//MESAJ GÖNDERNE KISMINDAKİ SCROLL AYARLAMA
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector("#textarea")
    textarea.addEventListener("input", () => {
        textarea.style.height = "auto"
        textarea.style.height = Math.min(textarea.style.height, 100);
        if (textarea.scrollHeight > 100) {
            textarea.style.overflowY = "scroll"
            textarea.style.height = "100px"
        } else {
            textarea.style.overflowY = "hidden"
        }
    })
})
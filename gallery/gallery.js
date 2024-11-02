
const uploadButton = document.getElementById('uploadButton')
const fileInput = document.getElementById('fileInput');
const photos = document.getElementsByClassName('photos')[0]
uploadButton.addEventListener("click", () => {
    document.getElementById('fileInput').click();
})
fileInput.addEventListener("change", () => {
    // Seçilen dosyaları al
    const files = fileInput.files;
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            const div = document.createElement('div');
            img.src = e.target.result;// okunan  dosyanın içerğini src yükledik 
            div.className = 'gallery';
            div.appendChild(img);
            photos.appendChild(div);
        };

        reader.readAsDataURL(file);
    }
})

//GERİ DİĞER SAYFAYA GİTMEK
const goBackDiv = document.querySelector(".go-back-div")
goBackDiv.addEventListener("click", () => {
    window.location.href = "    http://127.0.0.1:5501/index.html"
})
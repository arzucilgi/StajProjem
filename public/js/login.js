// const registerButton = document.querySelector(".register-link a")
const logInButton = document.querySelector("#button2")
const tapbarDivv = document.querySelector("#tapbar")
const homePage22 = document.querySelector(".home-page-2")
const homePageDefinitionn = document.querySelector(".home-page-definition")





// registerButton.addEventListener("click", (e) => {
//     e.preventDefault()
// })
logInButton.addEventListener("click", findUserFromStorage)


function findUserFromStorage(e) {
    e.preventDefault()
    const mail = document.querySelector("#email2").value
    const password = document.querySelector("#password2").value
    const logInObject = { mail, password };
    checkStorage(logInObject)
}

function checkStorage(logInObject) {
    if (localStorage.getItem("formDataYeni") === null) {
        Array = []
    } else {
        Array = JSON.parse(localStorage.getItem("formDataYeni"));
        if (Array.some(user => user.mail === logInObject.mail && user.password === logInObject.password)) {
            localStorage.setItem("loggedUser", JSON.stringify(logInObject))
            // window.location.href = 'http://127.0.0.1:5501/index.html';
            if (homePage22) homePage22.style.display = 'none'
            if (tapbarDivv) tapbarDivv.style.display = 'flex'
            if (homePageDefinitionn) homePageDefinitionn.style.display = 'flex'

            profile.style.display = 'inline'
            logOut.style.display = 'inline'

            navbarIcons.forEach(icon => {
                icon.style.display = 'inline'
            })
            chooseTheme.style.display = 'flex'

        }
        else {
            alert("GEÇERLİ BİR KULLANICI ADI GİRİNİZ!")
        }
    }
}




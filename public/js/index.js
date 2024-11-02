    const logIn = document.querySelector("#login")
    const signIn = document.querySelector("#signin")
    const logOut = document.querySelector("#logout")
    const profile = document.querySelector(".profile-photos")
    const profileList = document.querySelector(".profile-list ")
    const navbarIcons = document.querySelectorAll(".navbar-icons")
    const homePageDefinition = document.querySelector(".home-page-definition")
    const tapbarDiv = document.querySelector("#tapbar")
    const homePage2 = document.querySelector(".home-page-2")
    const loggedInUserProfile = document.querySelector(".logged-in-user-profile")
    const chooseThemeBox = document.querySelector(".theme-selection-box")
    object = {};

    logOut.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("loggedUser");
        // logIn.style.display = 'none'
        homePage2.style.display = 'flex'
        homePageDefinition.style.display = 'none'
        tapbarDiv.style.display = 'none'
        profile.style.display = 'none'
        logOut.style.display = 'none'
        chooseThemeBox.style.display = 'none'
        loggedInUserProfile.style.display = 'none'
        navbarIcons.forEach(icon => {
            icon.style.display = 'none'
        })
    })
    document.addEventListener("DOMContentLoaded", () => {
        object = localStorage.getItem("loggedUser")
        if (object !== null) {
            homePageDefinition.style.display = 'flex'
            // logIn.style.display = 'none'
            homePage2.style.display = 'none'
            profile.style.display = 'inline'
            logOut.style.display = 'inline'
            navbarIcons.forEach(icon => {
                icon.style.display = 'inline'
            })
        } else {

            chooseThemeBox.style.display = 'none'
            homePageDefinition.style.display = 'none'
            homePage2.style.display = 'flex'
            tapbarDiv.style.display = 'none'
            logIn.style.display = 'inline'
            profile.style.display = 'none'
            logOut.style.display = 'none'
            navbarIcons.forEach(icon => {
                icon.style.display = 'none'
            })
        }
    })


    //MESAJ KUTUSUNA GİTME

    const goMessagePage = document.querySelectorAll(".navbar-icons")[0]
    goMessagePage.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "http://127.0.0.1:5501/newMassage/pages/massage.html"
    })


    //TODO LİSTESİNE GİTME 
    const goTodoPage = document.querySelectorAll(".navbar-icons")[2]
    goTodoPage.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "http://127.0.0.1:5501/todoList/todo.html"
    })

    // GALERİYE GİT

    const goGalleryPage = document.querySelectorAll(".tapbar-left a")[1]
    goGalleryPage.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "http://127.0.0.1:5501/gallery/gallery.html"
    })
    // profil fotoya giriş yapan kullanıcı baş harfini koy 
    const profileContent = document.querySelector(".profile-photos a")
    const profileContentDiv = document.querySelector(".profile-pp a")
    const loggedUserAbout = document.querySelectorAll(".logged-user-about  a")
    const ppNameSurname = document.querySelector(".pp-name-surname ")
    userName = JSON.parse(localStorage.getItem("loggedUser"))
    userList = JSON.parse(localStorage.getItem("formDataYeni"))


    document.addEventListener("DOMContentLoaded", () => {
        for (let user of userList) {
            if (user.mail === userName.mail && user.password == userName.password) {
                let char = user.name[0].toUpperCase()
                let nm = user.name
                let srnm = user.surname
                profileContent.textContent = char
                profileContentDiv.textContent = char
                ppNameSurname.textContent = `${nm} ${srnm}`

                const div1 = document.createElement("div")
                const div2 = document.createElement("div")
                const div3 = document.createElement("div")

                div1.className = "logged-user-about-element"
                div2.className = "logged-user-about-element"
                div3.className = "logged-user-about-element"

                div1.textContent = JSON.parse(localStorage.getItem("userList")).length
                div2.textContent = JSON.parse(localStorage.getItem("noteArray")).length
                div3.textContent = JSON.parse(localStorage.getItem("todoArray")).length
                loggedUserAbout[0].appendChild(div1)
                loggedUserAbout[1].appendChild(div2)
                loggedUserAbout[2].appendChild(div3)
            }
        }
    })

    //profilin açılıp  kapanması 
    const openProfile = document.querySelector(".profile-photos")

    openProfile.addEventListener("click", (e) => {
        e.preventDefault()
        loggedInUserProfile.style.display = "flex"
        homePageDefinition.style.display = "none"
        chooseThemeBox.style.display = 'none'
    })

    const closeButtonUsered = document.querySelector(".close-button2")
    closeButtonUsered.addEventListener("click", () => {
        loggedInUserProfile.style.display = "none"
        homePageDefinition.style.display = "flex"
        chooseThemeBox.style.display = 'flex'
    })
    // TEMA SEÇMEK İÇİN ÇEVRELEYEN DİVİN AÇILIP KAPANMASI


    const themeBox = document.querySelector(".theme-icons-div")
    const chooseTheme = document.querySelector(".to-choose-theme")

    chooseTheme.addEventListener("click", (e) => {

        themeBox.style.display = 'flex'
        themeBox.classList.toggle('open');
        e.stopPropagation();
    })
    document.addEventListener("click", () => {
        themeBox.style.display = 'none'
    })
    //EMOJİYE TIKLANDIĞINDA ARKA PLANI DEĞİŞTİREN KOD

    const themeIcons = document.querySelectorAll(".theme-icons img")
    const homePage = document.querySelector(".home-page-definition")
    for (let icon of themeIcons) {
        icon.addEventListener("click", () => {
            console.log(icon)
            homePage.style.backgroundImage = `url(${icon.src})`
        })
    }











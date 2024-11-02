const goUsersButton = document.querySelectorAll(".icons")[1]
const usersBox = document.querySelector(".users-box")
const messageBox = document.querySelector(".massage-box")
const goMessageBoxButton = document.querySelector(".go-back-message-box").children[0]

goUsersButton.addEventListener("click", () => {
    messageBox.style.display = "none"
    usersBox.style.display = "flex"
})
goMessageBoxButton.addEventListener("click", () => {
    messageBox.style.display = "flex"
    usersBox.style.display = "none"
})




// kişi ekleme divinin açılması
const addUserButton = document.querySelector(".add-new-user")
const addUserForm = document.querySelector(".message-area-add-user")
const registerButton = document.querySelector(".register-button")
const closeButton = document.querySelector(".close")
const addUserDiv = document.querySelector(".add-user-div")
const home = document.querySelector(".message-area-home")
const home2 = document.querySelector(".massage-area")


addUserButton.addEventListener("click", () => {
    addUserDiv.style.display = "flex"
    home.style.display = "none"
    home2.style.display = "none"

})
closeButton.addEventListener("click", () => {
    addUserDiv.style.display = "none"
    home.style.display = "flex"
})


//KİŞİYİ HEM KAYITLI ARKADAŞLARA HEM DE STORAGE EKLEME  VE MANUEL OLARAK YENİ ARKADAŞ KAYIT ETME 
registerButton.addEventListener("click", () => {
    const nm = document.querySelector("#isim").value
    const surname = document.querySelector("#soyad").value
    let userListObje = { nm, surname }
    if (nm === "" || surname === "") {
        alert("Lütfen boş alanları doldurunuz...");
    }
    else {
        if (!checkUserListFromStorage(userListObje)) {
            userList.push(userListObje)
            localStorage.setItem("userList", JSON.stringify(userList))
            alert("Kişi başarıyla eklendi")
        }
    }

})
function checkUserListFromStorage(userListObje) {
    if (localStorage.getItem("userList") === null) {
        userList = []
    } else {
        userList = JSON.parse(localStorage.getItem("userList"))
        for (let user of userList) {
            if (user.nm === userListObje.nm && user.surname === userListObje.surname) {
                alert("Böyle bir kişi zaten var")
                return true
            }
        }
    }
    return false
}

let currentUser = " "
let hacer = [];
const textarea = document.querySelector("#textarea")
const button = document.querySelector("#paper-plane")
const newMassageArea = document.querySelector(".new-massage-area")

button.addEventListener("click", addIUButton)
document.addEventListener("keydown", addIUEnter)
document.addEventListener("DOMContentLoaded", pageLoad)

function pageLoad() {// kayıtlı kullanıcıları arayüze ekler
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    for (let user of userList) {
        addUserIU(user);
        if (localStorage.getItem(`${user.surname}`)) {//daha önce mesajı olan kullanıcıları dm kutusuna getirdi
            const msjArea = document.querySelector(".massage-box")
            const msjContent = document.createElement("div")
            const msjProfile = document.createElement("div")
            const msjData = document.createElement("div")

            msjContent.className = "massage-content"
            msjProfile.className = "message-profile"
            msjData.className = "message-data"
            msjData.textContent = user.surname

            msjContent.appendChild(msjProfile)
            msjContent.appendChild(msjData)
            msjArea.appendChild(msjContent)

            msjContent.addEventListener("click", () => {//TIKLANILAN KULLANICININ MESAJLARINI ARA YÜZE GETİRMEK 
                messageArea.style.display = "flex"
                messageAreaHome.style.display = "none"
                const newUser = document.querySelector(".user-profile")
                newUser.innerHTML = '';
                const userProfileImg = document.createElement("img")
                const userProfileP = document.createElement("p")
                newUser.appendChild(userProfileImg)
                newUser.appendChild(userProfileP)
                userProfileP.textContent = user.surname

                // Tıklanılan kullanıcı bilgilerini kişi profiilinde gösterme
                const profileContentDiv = document.querySelector(".profile-pp a")
                const ppNameSurname = document.querySelector(".pp-name-surname ")
                const userList=JSON.parse(localStorage.getItem("userList"))
              

                profileContentDiv.textContent = newUser.textContent[0].toUpperCase()
                for(let user of userList ){
                    if( user.surname===newUser.textContent){
                        ppNameSurname.textContent=`${user.nm} ${user.surname}`
                    }
                }
              
               


                //DAHA ÖNCE MESAJ KUTUSUNDA BULUNAN MESAJLARI TEMİZLEDİ
                const newMassageArea = document.querySelector(".new-massage-area")
                newMassageArea.innerHTML = "";

                const personMessage = JSON.parse(localStorage.getItem(user.surname))
                for (let mss of personMessage) {
                    if (mss !== "") {
                        const div = document.createElement("div")
                        div.className = "new-massage"
                        div.textContent = mss
                        newMassageArea.appendChild(div)
                    }
                }
            })
            const messages = document.querySelectorAll(".massage-box .massage-content ");
            console.log(messages)

            for (let dmBox of messages) {
                dmBox.addEventListener("click", () => {
                    checkStorage()
                    currentUser = dmBox.textContent
                    messageArea.style.display = "flex"
                    messageAreaHome.style.display = "none"
                })
            }
            filterFun(messages)

        }
    }
}
//KULLANICI BİLGİLERİNİN OLDUĞU DİVİN AÇILMASI
const personInformation=document.querySelector(".person-information")
const goPersonInformation=document.querySelectorAll(".navbar-list-2")[0]

goPersonInformation.addEventListener("click",()=>{
     personInformation.style.display="flex"
})


//Kullanıcı bilgileirini olduğu divin kapatılması
const closeUser=document.querySelector(".close-button")
closeUser.addEventListener("click",()=>{
    personInformation.style.display="none"
})

function addIUEnter(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        const massage = textarea.textContent.trim()
        if (massage !== "") {
            const div = document.createElement("div")
            div.className = "new-massage"
            div.textContent = massage
            newMassageArea.appendChild(div)
            textarea.textContent = ""
            addStorageMessage(massage)
            newMassageArea.scrollTop = newMassageArea.scrollHeight
        }
    }
}

function addIUButton() {
    const massage = textarea.textContent.trim()
    if (massage !== "") {
        const div = document.createElement("div")
        div.className = "new-massage"
        div.textContent = massage
        newMassageArea.appendChild(div)
        textarea.textContent = ""
        addStorageMessage(massage)
        newMassageArea.scrollTop = newMassageArea.scrollHeight
    }
}

function addStorageMessage(message) {
    if (message !== "") {
        hacer.push(message)
        localStorage.setItem(currentUser, JSON.stringify(hacer))
    }
}

function checkStorage() {
    if (localStorage.getItem(currentUser) === null) {
        hacer = []
    } else {
        hacer = JSON.parse(localStorage.getItem(currentUser))
    }
}

function addUserIU(userListObje) {
    const msjArea = document.querySelector(".users-box-div")
    const msjContent = document.createElement("div")
    const msjProfile = document.createElement("div")
    const msjData = document.createElement("div")

    msjContent.className = "massage-content"
    msjProfile.className = "message-profile"
    msjData.className = "message-data"
    msjData.textContent = userListObje.surname

    msjContent.appendChild(msjProfile)
    msjContent.appendChild(msjData)
    msjArea.appendChild(msjContent)
    // usersBox.appendChild(msjArea)

    msjContent.addEventListener("click", () => {
        addUserDiv.style.display = "none"
        usersBox.style.display = "none"
        messageBox.style.display = "flex"
        alert(`Kişi: ${userListObje.nm} ${userListObje.surname}`)

        currentUser = userListObje.surname

        const newMsjArea = document.querySelector(".massage-area")
        const msjAreaHome = document.querySelector(".message-area-home")
        const newMsjContent = document.querySelector(".new-massage-area")
        newMsjArea.style.display = "flex"
        msjAreaHome.style.display = "none"
        newMsjContent.innerHTML = "";



        checkStorage();
        hacer.forEach(function (mss) {
            if (mss !== "") {
                const div = document.createElement("div")
                div.className = "new-massage"
                div.textContent = mss
                newMsjContent.appendChild(div)
            }
        });

        newMsjArea.scrollTop = newMsjArea.scrollHeight;

        const newUser = document.querySelector(".user-profile")
        console.log(newUser)
        //   .children[1]  bu html kısmında yorum satırı yaptığım için oldu
        newUser.textContent = userListObje.surname



    });
}



//KAYITLI KİŞİLERİ FİLTRELEME İŞLEMİ 

const personFilter2 = document.querySelectorAll(".filter-box")[1].children[0]
const guide = document.querySelector(".users-box-div").children
console.log(guide)

personFilter2.addEventListener("input", (e) => {
    const searchedPerson = e.target.value.trim().toUpperCase()
    if (guide.length > 0) {
        for (let find of guide) {
            if (find.children[1].textContent.trim().toUpperCase().includes(searchedPerson)) {
                find.style.display = "flex"
            }
            else {
                find.style.display = "none"
                // const  usersBoxDiv =document.querySelector(".users-box-div")
                // const warningDiv=document.createElement("div")
                // usersBoxDiv.appendChild(warningDiv)
                // warningDiv.textContent="Kayıtlı kullanıcı bulunamadı"
            }

        }
    }
})
//KAYITLI KİŞİLERİ FİLTRELEME İŞLEMİ 


function filterFun(dmBox) {
    const personFilter1 = document.querySelectorAll(".filter-box")[0].children[0]
    personFilter1.addEventListener("input", (e) => {
        const searchedPerson = e.target.value.trim().toUpperCase()
        if (dmBox.length > 0) {
            for (let find of dmBox) {
                if (find.children[1].textContent.trim().toUpperCase().includes(searchedPerson)) {
                    find.style.display = "flex"
                }
                else {
                    find.style.display = "none"
                }

            }
        }
    })
}
// console.log(document.querySelector('emoji-picker'))
// document.querySelector('emoji-picker').addEventListener('emoji-click', event => {
//     const messageInput = document.getElementById('textarea');
//     messageInput.value += event.detail.unicode;
// });


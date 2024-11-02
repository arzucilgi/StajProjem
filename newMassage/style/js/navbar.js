//NAVBAR AÇILMA MENÜSÜ AYARLAMA
const navActivation = document.querySelector(".profile-box-right").children[2]
const navbar = document.querySelector(".navbar")
navActivation.addEventListener("click", (e) => {
    e.stopPropagation()
    //gövdeye de tıkladığımız için aynı zamanda olay yayılımını durdurdu.
    navbar.style.display = 'block'
})
document.body.addEventListener("click", () => {
    if (navbar.style.display === 'block') { navbar.style.display = 'none' }
})

const navbar2 = document.querySelector(".navbar-2")
const navActivation2 = document.querySelector(".user-profile-icons-div")
console.log(navActivation2)
navActivation2.addEventListener("click", (e) => {
    e.stopPropagation()
    navbar2.style.display = 'block'
})
document.body.addEventListener("click", () => {
    if (navbar2.style.display === 'block') { navbar2.style.display = 'none' }
})
//ANA SAYFAYA DÖNME 
const goHome = document.querySelectorAll(".icons")[0]
console.log(goHome)
goHome.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/index.html"
})
//SOHBETİ KAPATMA
const closeChat = document.querySelectorAll(".navbar-list-2")[1]
const messageArea = document.querySelector(".massage-area")
const user = document.querySelector(".massage-content")
const messageAreaHome = document.querySelector(".message-area-home")
closeChat.addEventListener("click", () => {
    messageArea.style.display = "none"
    messageAreaHome.style.display = "flex"
})
// user.addEventListener("click", () => {
//     messageArea.style.display = "flex"
//     messageAreaHome.style.display = "none"
// })

//SOHBETİ SİLME

// const removeChatButton = document.querySelectorAll(".navbar-list-2")[2]
// const removeDiv= document.querySelector(".users-box-div").children
// const 
// console.log(removeDiv)
// removeChat.addEventListener("click", removeChatFonk)

// function  removeChatFonk(){
   
// }



    const removeChatButton = document.querySelectorAll(".navbar-list-2")[2];
   
    removeChatButton.addEventListener("click", removeChatFonk);
    

    function removeChatFonk() {
        const userProfile = document.querySelector(".user-profile p");

       
        if (userProfile) {
            const userProfileName = userProfile.textContent.trim();
            console.log(userProfileName)
            const messages = document.querySelectorAll(".massage-box .massage-content");
            console.log(messages)
            messages.forEach(message => {
                const messageData = message.querySelector(".message-data");
                if (messageData && messageData.textContent.trim() === userProfileName) {
                    message.remove();
                }
            });
            messageArea.style.display="none"
            messageAreaHome.style.display="flex"
            localStorage.removeItem(userProfileName);
            // const storageName=JSON.parse(localStorage.getItem(userProfileName))
            //ARRAY VEYA NESNEDEN VERİ SİLERKEN REMOVE METODU KULLANILMAZ 
            
            // localStorage.setItem(userProfileName,JSON.stringify(storageName))
        } else {
            console.error("User profile name element not found.");
        }
    }
   



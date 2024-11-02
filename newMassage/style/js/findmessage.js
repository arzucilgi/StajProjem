//FİLTRELEME SAYFASININ AÇILIP KAPANMASI

const findMessage = document.querySelector(".find-message-div")
const newDiv = document.querySelector(".find-message-page")
const goBack = document.querySelector(".go-back-div ").children[0]


findMessage.addEventListener("click", () => {
      newDiv.style.display = "block"
})
goBack.addEventListener("click", () => {
      newDiv.style.display = "none"
})
//FİLTRELEME
const filter = document.querySelector(".filter-div").children[0]
const filterArea = document.querySelector(".filtered-messages-div")
const userProfileName=document.querySelector(".user-profile").children
console.log(userProfileName)

filter.addEventListener("keyup", (e) => {
      const searchWord = e.target.value.toLowerCase().trim()
      const messageList = JSON.parse(localStorage.getItem(userProfileName[1].textContent))
      // Önce mevcut mesajları temizler
      filterArea.innerHTML = ""
  
      if (messageList.length > 0) {
          const filteredMessages = messageList.filter(message => {
              return  message.toLowerCase().includes(searchWord)
          })
  
          if (filteredMessages.length > 0 && filter.value !== "") {
              filteredMessages.forEach(message => {
                  const div = document.createElement("div")
                  div.className = "new-massage"
                  div.textContent = message
                  filterArea.appendChild(div)
              })
          } else if(filter.value !== "") {
              const p = document.createElement("p")
              p.className = "filter-explain"
              p.textContent = "Böyle mesaj bulunamadı!"
              filterArea.appendChild(p)
          }
      }

})

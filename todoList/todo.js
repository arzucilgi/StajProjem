
//TAKVİM JS
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev',
      right: 'next',
      center: 'title',
    },
    footerToolbar:{
      right:'today'
    }
  });
  calendar.render();
});
//YAPILACAKLAR JS
const buton = document.querySelectorAll(".form1")[0]
const eklenen = document.querySelector("#input")
const aranan = document.querySelector("#select")
const liste = document.querySelector("#todoList")
const temizleButon = document.querySelectorAll(".button1")[1]
const form = document.querySelector(".form1")
const filter=document.querySelector("#select")
const container=document.querySelector(".container")
console.log(filter)
let todoArray = []

runEvents()


function runEvents() {
  buton.addEventListener("submit", addTodo)
  document.addEventListener("DOMContentLoaded", pageLoad)
  liste.addEventListener("click", removeTodoToIU)
  temizleButon.addEventListener("click",removeAllTodoEverywhere)
  filter.addEventListener("keyup", filters)
}


function pageLoad() {
  checkTodosFromStorage()
  todoArray.forEach(function (todo) {
    addTodoIU(todo)
  })
}


function filters(e){
  const filterValue=e.target.value.toLowerCase().trim()
  const todoListesi=document.querySelectorAll(".yeniEklenen")
  //includes içeriyormuyu araştrımak için kullandığımız metod
  if(todoListesi.length>0){
    todoListesi.forEach(function(todo){
      if(todo.textContent.toLowerCase().trim().includes(filterValue)){
        todo. setAttribute("style","display:block")
     }else{
        todo.setAttribute("style","display: none")
     }
    })
  }else{
    showAlert("yeniDiv1","Filtrelenecek liste bulunmuyor")
  }
}


function removeAllTodoEverywhere(e){
  const todoListesi=document.querySelectorAll(".yeniEklenen")
  if(todoListesi.length>0){
    //Ekrandan Silme işlemi gerçekleşti
    todoListesi.forEach(function(sil){
      sil.remove()
      e.preventDefault()
    })
    // Storage'tan Silme 
    todoArray=[]
    localStorage.setItem("todoArray",JSON.stringify(todoArray))
  }else{
    showAlert("yeniDiv1","Silinecek Todo bulunmuyor!")
  }
}


function removeTodoToIU(e) {
  if (e.target.id === "remove") {
    const todo = e.target.parentElement
    todo.remove()
    romeveTodoToStorage(todo.textContent)
  }
}


function romeveTodoToStorage(removeTodo) {
  checkTodosFromStorage()
  todoArray.forEach(function (todo, index) {
    if (removeTodo === todo) {
      todoArray.splice(index, 1)// indexi verilen sayı ile birlikte verilen sayı kadar eleman siler
    }
    localStorage.setItem("todoArray", JSON.stringify(todoArray))
  })
}


function addTodo(e) {
  const eklenenMetin = eklenen.value.trim()// kullanıcıdan alınacak olan metni tanımladık
  if (eklenenMetin === null || eklenenMetin === "") {
    showAlert("yeniDiv1", "Lütfen bir değer gir!")
  } else {
    //arayüze ekleme
    addTodoIU(eklenenMetin)
    //storage eklemek
    addTodoToStorage(eklenenMetin)
    showAlert("yeniDiv", "Todo eklendi")
  }
  e.preventDefault()
}

function addTodoIU(newTodo) {
  const li = document.createElement("li")
  const a = document.createElement("a")
  const i = document.createElement("i")
  const button = document.createElement("button")
  li.className = "yeniEklenen"
  li.textContent = newTodo
  a.href = "#"
  button.id = "remove"
  button.className="fa-regular fa-trash-can"
  a.appendChild(i)
  li.appendChild(a)
  li.appendChild(button)
  liste.appendChild(li)
  eklenen.value = ""
}


function addTodoToStorage(eklenenMetin) {
  checkTodosFromStorage()
  todoArray.push(eklenenMetin)
  localStorage.setItem("todoArray", JSON.stringify(todoArray))
}


function checkTodosFromStorage() {
  if (localStorage.getItem("todoArray") === null) {
    todoArray = []
  } else {
    todoArray = JSON.parse(localStorage.getItem("todoArray"))
  }
}


function showAlert(type, message) {
  const div = document.createElement("div")
  div.className = `${type}`
  div.textContent = message
  form.appendChild(div)

  setTimeout(function () {
    div.remove()
  }, 1000);
}

//TODOS TEKRRADAN GÖSTERME
const seeTodoList=document.querySelector(".todos-container")
const todosButton=document.querySelectorAll(".option")[0]
const notesButton=document.querySelectorAll(".option")[1]
const seeNotes=document.querySelector(".notes-container")

todosButton.addEventListener("click",(e)=>{
    seeTodoList.style.display="block"
    seeNotes.style.display="none"
})
notesButton.addEventListener("click",()=>{
     seeNotes.style.display="flex"
    seeTodoList.style.display="none"
})

// TEKRAR ANA SAYFAYA DÖNME
const backHome=document.querySelector(".back-home")
backHome.addEventListener("click",()=>{
  window.location.href="http://127.0.0.1:5501/index.html"
})





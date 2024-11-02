const sigIn=document.querySelector("#submit")
runEvent()
function runEvent(){
    sigIn.addEventListener("click",addStorage)
}
function addStorage(e){
    e.preventDefault();  // Formun varsayılan gönderimini engeller
    const name = document.querySelector("#name1").value;
    const surname = document.querySelector("#surname1").value;
    const mail = document.querySelector("#mail1").value;
    const password = document.querySelector("#password1").value;
    let formObject = { name, surname, mail, password };

    if (name === "" || surname === "" || mail === "" || password === "") {
        alert("Lütfen boş alanları doldurunuz...");
    } else {
        if (!checkTodosFromStorage(formObject)) {  // Mevcut kullanıcı kontrolü
            formDataYeni.push(formObject);
            localStorage.setItem('formDataYeni', JSON.stringify(formDataYeni));
            alert("Kullanıcı başarıyla eklendi...");
            window.location.href='http://127.0.0.1:5501/pages/login.html'
        }
    }
}
function checkTodosFromStorage(formObject) {
    if (localStorage.getItem("formDataYeni") === null) {
        formDataYeni = [];
    } else {
        formDataYeni = JSON.parse(localStorage.getItem("formDataYeni"));
        for (let user of formDataYeni) {
            if (user.mail === formObject.mail && user.password === formObject.password) {
                // user.name === formObject.name && user.surname === formObject.surname && 
                alert("Bu kullanıcı zaten mevcut!!!");
                return true;  // Kullanıcı bulunduğunda true döner
            }
        }
    }
    return false;  // Kullanıcı bulunamazsa false döner
}
// SAYFALAR ARASINDA GEÇİŞ BUTONLARI ÜZERİNDE İŞLEM 
const changeLogin=document.querySelector("#change-login")
const changeSignin=document.querySelector("#change-signin")
const changePage=document.querySelector(".change-page")
const signInPage=document.querySelector(".form1")
const logInPage=document.querySelector(".login-box")
changeSignin.addEventListener("click",()=>{
  signInPage.style.display="flex"
  logInPage.style.display="none"
})
changeLogin.addEventListener("click",()=>{
   signInPage.style.display="none"
  logInPage.style.display="flex"
})

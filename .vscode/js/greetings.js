
//<html>login form 의 input태그 가져오기
const loginInPut=document.querySelector("#login-form input");
//<html>login form 태그 form 가져오기
const loginForm = document.querySelector("#login-form");
const greeting= document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME="username";
//login input에 제출했을 때 부를 function
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInPut.value;
    localStorage.setItem(USERNAME,username);
    paintGreetings(username);
}

//greeting 나타내기
function paintGreetings(username){
    greeting.innerText=`Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//localstorage에 저장된 username
const savedUsername= localStorage.getItem(USERNAME);

//username에 저장이 안돼있으면 loginform 나타내고 submit 듣기
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}//아니면 greeting 나타내기
else{
   paintGreetings(savedUsername);}
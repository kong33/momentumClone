// const toDoForm = document.getElementById("todo-form");
// const toDoInput= toDoForm.querySelector("input");
// const toDoList=document.getElementById("todo-list");

// function deleteToDo(event){
//     const listItem= event.target.parentElement;
//     listItem.remove();
// }


// function paintTodo(newTodo){
//     const listItem=document.createElement("li");
//     const spanItem=document.createElement("span");
//     spanItem.innerText = newTodo;
//     const buttonItem=document.createElement("button");
//     buttonItem.innerText="X";
//     buttonItem.addEventListener("click", deleteToDo)
//     listItem.appendChild(spanItem);
//     listItem.appendChild(buttonItem);
//     toDoList.appendChild(listItem);
// }

// function handleToDoSubmit(event){
//     event.preventDefault();
//     const newTodo=toDoInput.value;
//     toDoInput.value='';
//     paintTodo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// let toDos =[]; //toDoInput으로 받은 내용을 저장할 array

// function paintToDo(newTodo){
// 	const listItem = document.createElement("li");
// const spanItem = document. createElement ("span");
// span.innerText=newTodo.text;
// const button = document. createElement("button");
// button.innerText="x";
// button.addEventListener("click", deleteToDo);
// listItem.appendChild(span);
// listItem.appendChild(button);
// toDoList.appendChild(listItem);
// }

	

// function handleToDoSubmit(event){
// 	event.preventDefault();
// 	const newTodo= toDoInput.value;
// 	toDoInput.value="";
// 	const newTodoObj={
// 		text: newTodo,
// 		id: Date.now(),};	
// 	toDos.push(newTodoObj);
// 	paintToDo(newTodoObj);
// 	saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// //이제 localstorage에 array를 넣고 싶은데 localstorage는 array를 저장 못하니까 저장할 함수 만들기
// function saveToDos(){
// 	localStorage.setItem("todos", JSON.stringify(toDos));
// }


// //todo string을 localstorag에 array로 저장하구 해당 아이템들에 대해 어떤 함수를 실행하기 .
// const TODOS_KEY="todos";
// const savedToDos = localStorage.getItem(TODOS_KEY);
// if(savedToDo!==null){
// 	const parsedToDos= JSON.parse(savedToDos);
// toDos=parsedToDos;
// parsedToDos.forEach(sayHello);}//참고 1번



// // #다시 새로운 목록을 추가하면 원래 목록이 localstorage에서 사라짐…!
// // 왜냐면 toDos array가 계속 초기화 됨.
// //  따라서 
// // let toDos=[];
// //   로 바꾸고 if 문 안에 조건 추가



// #화면에서 지울때마다 localStorage 에서도(toDos array에서도)  delete 하기! 
// 중복 처리를 위해 toDos를 array -> object.
// element 만들 때 random으로 id 만들기!
// —> Date.now();
// 밀리초를 반환
// toDo에 오브젝트를 push 하기만 하면 됨!

const toDoForm = document.getElementById("bus-station");
const toDoInput = document.querySelector("#bus-station input");
const toDoList = document.getElementById("busstation-list");
const TODOS_KEY = "todos";
let toDos = [];



function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function deleteDetail(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  todetail = todetail.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

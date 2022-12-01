// let h1Element = document.getElementById("heading_1");
// console.log(h1Element);

// let texts = document.getElementsByClassName("text");
// console.log(texts);

let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "gray";

// let text3 = document.getElementsByClassName("text")[2];
// console.log(text3);

// let myHead = document.querySelector("#heading_1");
// myHead.style.color = "red";
// console.log(myHead);

// let myText = document.querySelector(".text");
// console.log(myText);

// let myTexts = document.querySelectorAll("div + .text");
// console.log(myTexts);

// let myHead = document.querySelector(`h1`);
// myHead.textContent = myHead.textContent.replace("dunya", "sebayil");
// myHead.textContent = "Hello Nurlan";
// myHead.innerText = "Hello Sebayil";
// myHead.innerHTML = `Helle sebayil <p>salam necesen</p>`;

// myHead.style.fontSize = "90px";
// myHead.style.position = "absolute";
// myHead.style.top = "10px";

// console.log(body.childNodes);

// console.log(body.firstChild);
// console.log(body.firstElementChild);

// console.log(body.lastChild);
// console.log(body.lastElementChild);

let myText = document.querySelector(".asd12s");

// console.log(
//   myText.parentElement.parentElement.parentElement.lastChild.firstElementChild
//     .textContent
// );

// console.log(myText.nextElementSibling);
// console.log(myText.previousElementSibling.innerHTML);

// myText.textContent = "necesen <p>salam</p>";
// myText.innerHTML = "necesen <p>salam</p>";

// let myNewH2Element = document.createElement("h2");
// let myNewH2Element2 = document.createElement("h2");
// myNewH2Element.textContent = "Sagol";
// myNewH2Element2.textContent = "Yaxsiyol";

// // body.appendChild(myNewH2Element);
// body.append(myNewH2Element, myNewH2Element2);

// body.removeChild(myNewH2Element);
// body.removeChild(myNewH2Element2);

// body.removeChild(body.lastElementChild);

// setTimeout(() => {

// }, 3000);
// let a = "";
// const interval = setInterval(() => {
//   a += " + ";
//   console.log(a);
// }, 100);

// setTimeout(() => {
//   clearInterval(interval);
// }, 3000);

// console.log(interval);

const myBtn = document.querySelector("button");
const todoInput = document.querySelector("input");
const todoList = document.getElementById("todo_list");

// myBtn.onclick = () => {
//   if(todoInput.value!== ""){
//     console.log(todoInput.value);
//   }
// };

myBtn.onclick = () => {
  if (todoInput.value.trim() === "") return;
  const todoListItem = document.createElement("li");
  const todoListItemSpan = document.createElement("span");
  const todoListItemBtn = document.createElement("button");
  todoListItemSpan.textContent = todoInput.value;
  todoListItemBtn.textContent = "X";

  todoListItemBtn.onclick = () => {
    todoListItemSpan.style.textDecoration = "line-through";
    setTimeout(() => {
      todoList.removeChild(todoListItem);
    }, 1000);
  };

  todoListItem.append(todoListItemSpan, todoListItemBtn);
  todoList.append(todoListItem);
  todoInput.value = "";
};

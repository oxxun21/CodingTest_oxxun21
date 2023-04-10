const form = document.getElementById("todo-form");
const userInput = document.getElementById("user-input"); 
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

form.addEventListener('submit', (e) => {
  e.preventDefault();  

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  let txt = userInput.value; 
  span.innerText = txt; 
  button.innerHTML = "Del";

  todoList.appendChild(li);  
  li.appendChild(span); 
  span.appendChild(button);

  button.addEventListener('click', () => {
    li.remove();
  })

  userInput.value = "";
})
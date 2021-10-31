const whatTodo = document.querySelector("#write_todo");
const todoInput = whatTodo.querySelector("input");
const todoList = document.querySelector("#todo_list");
const savedTodos = localStorage.getItem("todos");

let todos = [];

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

function paintTodo(writtenTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    
    setCheckbox(checkbox);
    setSpan(span, writtenTodo);
    setLi(li, writtenTodo, checkbox, span);
    setTodoList(todoList, li);

    checkbox.addEventListener("click", createDeleteButton);
}

function createDeleteButton(event){
    const deleteButton = document.createElement("button");
    const parentElem = event.target.parentElement;
    const isChecked = event.target.checked;

    parentElem.appendChild(deleteButton);
    setDeleteButton(deleteButton);

    if(!isChecked){
        parentElem.style.textDecoration = "";
        deleteButton.classList.add(HIDDEN_CLASSNAME);
        return;
    }

    parentElem.style.textDecoration = "line-through";
    deleteButton.classList.remove(HIDDEN_CLASSNAME);
    deleteButton.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const writtenTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        id: Date.now(),
        text: writtenTodo,
    };

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
whatTodo.addEventListener("submit", handleTodoSubmit);

/* --------------------------------------------------------------------------------- */
function setCheckbox(checkbox){
    checkbox.type = "checkbox";
    checkbox.name = "isfinished";
}
function setSpan(span, writtenTodo) {
    span.innerText= writtenTodo.text;
}
function setLi(li, writtenTodo, checkbox, span){
    li.id = writtenTodo.id;
    li.appendChild(checkbox);
    li.appendChild(span);
}
function setTodoList(todoList, li){
    todoList.appendChild(li);
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id != parseInt(li.id));
    saveTodos();
}

function setDeleteButton(deleteButton){
    deleteButton.innerText = "❌";
    deleteButton.classList.add(HIDDEN_CLASSNAME);
}
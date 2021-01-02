const list = document.getElementById("list");
const newTask = document.getElementById("newTask");
const btnNewTask = document.getElementById("btnNewTask");


let todos = JSON.parse(localStorage.getItem("todolist"));
if( todos === null ) {
    todos = [];
}
refreshTodos();

btnNewTask.addEventListener('click', addNewTodoToArray);

function addNewTodoToArray() {
    if(newTask.value === '') {
        return;
    }

    let todoItem = {
        task: newTask.value,
        done: false
    };

    todos.push(todoItem);
    newTask.value = '';
    refreshTodos();
}

// This function will show all the todos present in the array on the webpage
function refreshTodos() {
    localStorage.setItem("todolist", JSON.stringify(todos));
    list.innerHTML = '';
    for(let i = 0; i < todos.length ; i++) {
        // Add each todo item to list
        addTodoToList(todos[i], i);
    }
}

// This function will add the given task to the todo list on our webpage
function addTodoToList(todoItem, todoId) {
    const li = document.createElement("li");
    li.setAttribute('todo-id', todoId);
    li.classList.add("list-group-item")
    const span = document.createElement("span");
    span.innerText = todoItem.task;
    
    const checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.onclick = toggleCheckbox;
   // checkbox.classList.add(checkbox);//
    const dltBtn = document.createElement('button');
    dltBtn.innerText = '';
    dltBtn.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>';
    dltBtn.onclick = deleteTodo;

    const upBtn = document.createElement('button');
    upBtn.innerText= ''
    upBtn.innerHTML = '<i class="fa fa-caret-up" ></i>';
    upBtn.onclick = moveTodoUp;

    const downBtn = document.createElement('button');
    downBtn.innerText = 'v';
    downBtn.innerHTML = '<i class="fa fa-caret-down" ></i>';
    downBtn.onclick = moveTodoDown;
    
    if(todoItem.done) {
        checkbox.setAttribute('checked', true);
        span.style.textDecoration = 'line-through';
        span.style.color = 'green'
    }

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(dltBtn);
    if(todoId !==  0) {
        li.appendChild(upBtn);
    }
    if(todoId !== todos.length - 1) {
        li.appendChild(downBtn);
    }

    list.appendChild(li);
}

function toggleCheckbox(event) {
    const index = parseInt(event.target.parentElement.getAttribute('todo-id'));
    todos[index].done = !todos[index].done;
    refreshTodos();
}

function deleteTodo(event) {
    const deleteIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    const newTodos = [];
    for(let i=0 ; i<todos.length ; i++) {
        if(i !== deleteIndex) {
            newTodos.push(todos[i]);
        }
    }
    todos = newTodos;
    refreshTodos();
}

function moveTodoUp(event) {
    const upIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(upIndex !== 0) {
        swap(upIndex, upIndex - 1);
        refreshTodos();
    }
}

function moveTodoDown(event) {
    const downIndex = parseInt(event.target.parentElement.getAttribute('todo-id'));
    if(downIndex !== todos.length - 1) {
        swap(downIndex, downIndex + 1);
        refreshTodos();
    }
}


function swap(index1, index2) {
    const todoAtIndex1 = todos[index1];
    const todoAtIndex2 = todos[index2];

    todos[index1] = todoAtIndex2;
    todos[index2] = todoAtIndex1;
}

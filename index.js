const inputEl = document.getElementById('todoInput');
const todoListEl = document.getElementById('todos');
const pendingEl = document.getElementById('pending');
const doneEl = document.getElementById('done');
const totalEl = document.getElementById('total');

const updateCounter = (el, change) => {
    el.innerText = parseInt(el.innerText, 10)  + change;
}

const addNewTodo = (inputEvent) => {
    const todoValue = inputEvent.target.value;
    const newTodoEl = document.createElement('li');
    const doneButton = document.createElement('button');
    doneButton.innerText = '✓';
    doneButton.addEventListener('click', (doneEvent) => {
        newTodoEl.innerText = todoValue + ' (Done) ';
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', () => {
            todoListEl.removeChild(newTodoEl);
            updateCounter(totalEl, -1 );
            updateCounter(doneEl, -1 );
        });
        newTodoEl.appendChild(deleteButton);
        updateCounter(pendingEl, -1 );
        updateCounter(doneEl, 1 );
    });
    newTodoEl.innerText = todoValue + ' ';
    newTodoEl.appendChild(doneButton);
    todoListEl.appendChild(newTodoEl);
    updateCounter(totalEl, 1 );
    updateCounter(pendingEl, 1 );
    inputEvent.target.value = '';
};

inputEl.addEventListener('change', addNewTodo);
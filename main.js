const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const id_task = document.querySelector('id_task');
const form = document.querySelector('form');

const createTask = (value) => {
    const newTask = {
        id:(Math.random() * 100).toString(36).slice(3),
        title: value,
        complete_state: false 
    }

    tasks.unshift(newTask);
}

const renderTasks = () => {
    
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if (id_task != '') {
        createTask(id_task.value);
        id_task.value = '';
        renderTasks();
    }
});
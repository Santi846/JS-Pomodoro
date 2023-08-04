const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const add_task = document.querySelector('.add_task');
const id_task = document.querySelector('.id_task');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (id_task != '') {
        createTask(id_task.value);
        id_task.value = '';
        renderTasks();
    }
});

const createTask = (value) => {
    const newTask = {
        id:(Math.random() * 100).toString(36).slice(3),
        title: value,
        complete_state: false 
    }

    tasks.unshift(newTask);
}

const renderTasks = () => {
    const html = tasks.map(task => {
        return `
        <div class="task">
            <div class="complete_state">${task.complete_state ? `<span class="done">Done</span>` : `<button class="start" data_id=${task.id}>Start</button>`}</div>
            <div class="title">${task.title}</div>
        </div>
        `;
    });

    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = html.join(' ');
}

const start_button = document.querySelectorAll('.task .start');

start_button.forEach( button => {
    button.addEventListener(
        'click', e => {
            e.preventDefault();
            if (!timer) {
                const button_id = button.getAttribute('data_id');
                start_buttonHandler(button_id);
                button.textContent = "In progress...";
            }
        }
    );
});

const start_buttonHandler = (button_id) => {
    //minutes * seconds
    time = 25 * 60;
    current = button_id;
    const taskIndex = tasks.findIndex( task => task.id == button_id);
    const taskName = document.querySelectorAll('.time .taskName');
    taskName.textContent = tasks[taskIndex].title;

    timer = setInterval( () => {
    timeHandler(id);
    //1000 mili seconds
    }, 1000);
};

const timeHandler = (id) => {
    //decrement time
    time--;
    renderTime();
}

const renderTime = () => {
    const timeDiv = document.querySelectorAll('.time .value');
    //round time
    const minute = parseInt(time / 60);
    const second = parseInt(time % 60);

    timeDiv.textContent = `${minute < 10 ? '0' : ''}:${second < 10 ? '0' : ''}`;
}
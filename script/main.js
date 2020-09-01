const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const counter = document.querySelector('span');
const toDo = [];
const thisDay = document.querySelector('.day h2');

const addTask = (e) => {
    e.preventDefault();
    if (input.value !== "") {
        const taskName = input.value;
        const task = document.createElement('li');
        task.innerHTML = taskName;
        list.appendChild(task);
        const btn = document.createElement('button');
        btn.innerHTML = "-";
        btn.classList = "delete";
        list.appendChild(btn);
        toDo.push(taskName);
        input.value = "";
        btn.addEventListener('click', deleteTask = (e) => {
            task.remove();
            btn.remove();
            toDo.splice(task, 1);
            counter.textContent = toDo.length;
        })
    }
    counter.textContent = toDo.length;
}

const getDate = () => {
    const actualDay = new Date().getDay();
    thisDay.textContent = actualDay;
}


form.addEventListener('submit', addTask);
input.addEventListener('click', clear = () => input.value = "");
setInterval(getDate, 1000);
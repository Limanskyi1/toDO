// add Task
function addTask(value){
    const div = document.createElement('div');
    div.classList.add('task');
    let id = Date.now();
    div.id = id;
    div.innerHTML = `
        <div class="task-status">
        </div>
        <p>${value}</p>
        <img class="delete-task" src="icons8-trash.svg" alt="">
    `;
    const taskObj = {
        'id': id,
        'status': false,
        'innerText':value,
    }
    tasksArr.push(taskObj);
    localStorage.setItem('tasks',JSON.stringify(tasksArr));
    return div;
}
// render Task
function renderTask(){
    const arr = JSON.parse(localStorage.getItem('tasks'));
    if(arr && arr.length > 0){
        drawTask(arr);
    }
}

// delete Task
function deleteTask(task){
    const filteredArr = tasksArr.filter(item => {
        if(Number(task.id) !== Number(item.id)) return true;
    });
    tasksArr = filteredArr;
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    task.remove();
}

// status Change
function statusChange(clickedTask){
    tasksArr = tasksArr.map(task => {
        if (Number(task.id) === Number(clickedTask.id)) {
            task.status = !task.status;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    if(clickedTask.classList.contains('done')){
        clickedTask.classList.remove('done')
    } else {
        clickedTask.classList.add('done')
    }
}


// Filters
function filterTasks(filterType) {
    const filteredTasks = tasksArr.filter(task => {
        if (filterType === 'all') {
            return true;
        } else if (filterType === 'active') {
            return !task.status; // Показываем только активные задачи
        } else if (filterType === 'completed') {
            return task.status; // Показываем только завершенные задачи
        }
    });

    tasksList.innerHTML = '';
    drawTask(filteredTasks);
}

// Draw one Task
function drawTask(arr){
    arr.forEach(task => {
        const div = document.createElement('div');
        div.id = task.id;
        div.classList.add('task');
        if (task.status) {
            div.classList.add('done');
        } else {
            div.classList.remove('done');
        }
        div.innerHTML = `
            <div class="task-status"></div>
            <p>${task.innerText}</p>
            <img class="delete-task" src="icons8-trash.svg" alt="">
        `;
        tasksList.appendChild(div);
    });
}





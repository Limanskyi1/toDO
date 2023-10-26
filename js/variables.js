// Добавляйте новые задачи в список
// Отметить задачи как выполненные
// Удалить задачи из списка
// Фильтровать по всем/активным/полным задачам
// Очистить все выполненные задачи
// Просматривайте состояния наведения для всех интерактивных элементов на странице.
// Бонус : перетаскивайте элементы в списке, чтобы изменить их порядок.
// Бонус : создайте этот проект как полнофункциональное приложение.


let tasksArr = JSON.parse(localStorage.getItem('tasks')) || [];

const tasksContainer = document.getElementById('tasks-container');
const tasksDrake = dragula([tasksContainer]);
const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const tasksList = document.querySelector('.tasks');
const deleteBtns = document.querySelectorAll('.delete-task');
const task = document.querySelector('.task');


const allTasksBtn = document.querySelector('.filter-all');
const activeTasksBtn = document.querySelector('.filter-active');
const completedTasksBtn = document.querySelector('.filter-completed');
const completedTasksBtnClear = document.querySelector('.filter-clear-completed');
const filterBtns = document.querySelectorAll('.filter');
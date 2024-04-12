// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (nextId === null) {
        nextId = 1
    } else {
        nextId++
    }
    localStorage.setItem('nextId', JSON.stringify(nextId))
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

// create the card, card-body, card title, card text
const card = $('<div>').addClass('card')
const cardBody = $('<div>').addClass('card-body')
const h5= $('<h5>').addClass('card-title').text(task.enterName)
const cardText= $('<p>').addClass('card-text')
const cardInHtml= $('#todo-cards')

// append the card text to the card body
// append the card body to the card

cardBody.append(cardText)
cardBody.append(h5)
card.append(cardBody)
cardInHtml.append(card)

return card
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // using jquery select the columns for todo, inprogress, done
    const toDo = $('#todo-cards')
    const inProgress = $('#in-progress-cards')
    const done = $('#done-cards')
    //   will need: create a for loop that loops over the length of the taskList. 
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].taskStatus === 'to-do') {
            // append in to-do section
            toDo.append(taskList)

        } else if (taskList[i].taskStatus === 'in-progress') {
            //append in progress section
            inProgress.append(taskList)
        } 
    }
}
renderTaskList()
//i just want my cards to go to the to do section though, so do i really need lines 44-51?

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    const enterName = $('#name');
    const enterDesc = $('#description');
    const enterDueDate = $('#due-date');

    const task = {
        id: generateTaskId(),
        enterName: enterName.value,
        enterDesc: enterDesc.value,
        enterDueDate: enterDueDate.value,
        taskStatus: 'todo-cards'
    }
    console.log(task);

    taskList.push(task)
    localStorage.setItem('tasks', JSON.stringify(taskList))
    renderTaskList()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
renderTaskList()
    const submit = $('#submit');
    submit.on('click', handleAddTask);
});



// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}   

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // $( function() {
    //     $( "#draggable" ).draggable();
    //   } );
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

//to console log the input fields in the modal:
//make variable for name, description and due date
//make a function named taskEl
function taskEl () {
    const enterName= document.getElementById('name');
    const enterDesc= document.getElementById('description');
    const enterDueDate= document.getElementById('due-date');

    const task = {
        enterName: enterName.value,
        enterDesc: enterDesc.value,
        enterDueDate: enterDueDate.value,
    }
    console.log(task);

}
const submit= document.getElementById('submit');
submit.addEventListener('click', taskEl);

////instead of console logging the task variable, i want the task variable to become a card
//bootstrap classes to create a card, use extend boostrap activity 05.18 --> created divs and applied bootstrap classes to those divs 
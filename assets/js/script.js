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
    const card = $('<div>').addClass('card draggable').attr('data-task-id', task.id)
    const cardBody = $('<div>').addClass('card-body')
    const h5 = $('<h5>').addClass('card-title').text(task.enterName)
    const cardText = $('<p>').addClass('card-text').text(task.enterDesc)


    // append the card text to the card body
    // append the card body to the card

    cardBody.append(h5, cardText)
    card.append(cardBody)


    return card
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // using jquery select the columns for todo, inprogress, done
    const toDo = $('#todo-cards')
    toDo.empty()
    const inProgress = $('#in-progress-cards')
    inProgress.empty()
    const done = $('#done-cards')
    done.empty()

    //   will need: create a for loop that loops over the length of the taskList. 
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].taskStatus === 'to-do') {
            // append in to-do section
            toDo.append(createTaskCard(taskList[i]))

        } else if (taskList[i].taskStatus === 'in-progress') {
            //append in progress section
            inProgress.append(createTaskCard(taskList[i]))
        }
        else {
            done.append(createTaskCard(taskList[i]))
        }
    }
    $('.draggable').draggable({
        opacity: 0.7,
        zIndex: 100,
        // ? This is the function that creates the clone of the card that is dragged. This is purely visual and does not affect the data.
        helper: function (e) {
            // ? Check if the target of the drag event is the card itself or a child element. If it is the card itself, clone it, otherwise find the parent card  that is draggable and clone that.
            const original = $(e.target).hasClass('ui-draggable')
                ? $(e.target)
                : $(e.target).closest('.ui-draggable');
            // ? Return the clone with the width set to the width of the original card. This is so the clone does not take up the entire width of the lane. This is to also fix a visual bug where the card shrinks as it's dragged to the right.
            return original.clone().css({
                width: original.outerWidth(),
            });
        },
    });

}



// Todo: create a function to handle adding a new task
function handleAddTask(event) {

    const enterName = $('#name');
    const enterDesc = $('#description');
    const enterDueDate = $('#due-date');

    const task = {
        id: generateTaskId(),
        enterName: enterName.val(),
        enterDesc: enterDesc.val(),
        enterDueDate: enterDueDate.val(),
        taskStatus: 'to-do'
    }
    console.log(task);

    taskList.push(task)
    localStorage.setItem('tasks', JSON.stringify(taskList))
    renderTaskList()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    //if task is posted as a card, i want the ability to delete the task 
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

    // extach the task Id from each card
    const taskId = ui.draggable[0].dataset.taskId;
    const status = event.target.id
    console.log(status);
    // get the id of each task in local storage
    for (const task of taskList) {
        if (task.id === parseInt(taskId)){
            task.taskStatus =  status
        }
    }

    // save the changed array in localstorage
    localStorage.setItem('tasks', JSON.stringify(taskList))
    // re run render task list
    renderTaskList()
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList()

    $('#submit').on('click', handleAddTask);

    $('.lane').droppable(
        {
            accept: '.draggable',
            drop: handleDrop
        }
    )
});



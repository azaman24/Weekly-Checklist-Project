window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    let listDays = document.querySelector("none");

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    console.log(savedTasks);
    
    let today = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let c_month = /* value for current month*/
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    let date = `${weekday[today.getDay()]}, ${(c_month[today.getMonth()])}/${today.getDate()}/${today.getFullYear()}`;
    document.getElementById("date").innerHTML = date; // Displays the current date.
  
    const monday = document.getElementById("dayOne");
    const tuesday = document.getElementById("dayTwo");
    const wednesday = document.getElementById("dayThree");
    const thursday = document.getElementById("dayFour");
    const friday = document.getElementById("dayFive");
    const saturday = document.getElementById("daySix");
    const sunday = document.getElementById("daySeven");

    const allDays = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    
    allDays.forEach(day => {
        day.addEventListener('click', () => {
            listDays = document.querySelector(`#${day.id}`);
            console.log(listDays.id);
        })
    })

    const task = input.value.trim();
    const taskItem = document.createElement("div");
    
    const taskContent = document.createElement("div");
    taskItem.appendChild(taskContent);

    const taskInput = document.createElement("input");        
    taskInput.value = task;
    taskContent.appendChild(taskInput);
    localStorage.setItem("tasks", JSON.stringify(taskInput.innerHTML)); // The taskInput value is converted into a JSON string.
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.push(taskInput); // Everytime a task is added, it is added to existingTasks.
    console.log(existingTasks);

    form.addEventListener('submit', (e)=> {
        e.preventDefault(); //prevents page from reloading
        const task = input.value;
        console.log(task);


        if (!task) { //prints the statement below if task is empty
            alert("Please add a task");
            return;
        }

        if (listDays == document.querySelector("none")) {
            alert ("Please select a day");
            return;
        };

        const taskItem = document.createElement("div");
        taskItem.classList.add("task"); //sets the div's class to "task"

        const taskContent = document.createElement("div");
        taskContent.classList.add("uncheckedContent");
        taskItem.appendChild(taskContent);

        const taskInput = document.createElement("input");        
        taskInput.type = "text";
        taskInput.classList.add("text");
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");
        taskContent.appendChild(taskInput);

        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
        savedTasks[listDays.id] = task;
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        saveTask(taskInput.value, listDays.id);

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions"); //creates a class in which the edit button and delete button will be under.

        const checkActions = document.createElement("div");
        checkActions.classList.add("checkActions");

        const checkBox = document.createElement("button"); /* Alternative complete button */
        checkBox.classList.add("unchecked");

        const crossOffBox = document.createElement("button"); /* Alternative delete button */
        crossOffBox.classList.add("crossOff");

        let li = document.createElement("li");
        li.classList.add("unchecked");

        taskActions.appendChild(checkBox);
        taskActions.appendChild(crossOffBox);
        taskItem.appendChild(taskActions);
        listDays.appendChild(taskItem);
        input.value = "";

        console.log(taskInput.value);

        checkBox.addEventListener('click', ()=> {
            checkBox.className = "checked"; /* Changes image from unchecked to checked. */
            taskContent.className = "checkedContent";
        });

        crossOffBox.addEventListener('click', ()=> {
            listDays.removeChild(taskItem);
        });
    })

    function saveTask(task, dayId) {
        // const task = input.value;
        localStorage.setItem("tasks", JSON.stringify(task));
        // const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
        // savedTasks[dayId] = task;
        // localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }

    function displayTasks(){
        task.innerHTML = localStorage.getItem("tasks");
        // const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
        // const taskList = document.getElementById("taskList");
        // Object.keys(savedTasks).forEach(dayId => {
        //     const task = savedTasks[dayId];
        //     const taskElement = createTaskElement(document.getElementById(dayId), task);
        //     taskList.appendChild(taskElement);
        //     const dayElement = document.getElementById(dayId);
        // });
    }

    // function createTaskElement(dayElement, taskText) {
    //     // Remove any existing task element
    //     const existingTaskElement = dayElement.querySelector('.task');
    //     if (existingTaskElement) {
    //         existingTaskElement.remove();
    //     }    
    // }
    displayTasks();

})

//other sources
const inputBox = document.getElementById("taskInput");
const list1Container = document.getElementById("dayOne");

let previousButton = null;

function changeColor(current) {
    current.style.color = '#2CD5FFFF';// The clicked/selected button is this color.
    if (previousButton != null){
        previousButton.style.color = '#00E35A'; // The unselected button is this color.
    }
    previousButton = current; // previousButton no longer is null.
}

// localStorage.setItem("tasks", JSON.stringify(taskInput2.innerHTML)); // The taskInput value is converted into a JSON string.

// const input = document.querySelector("#new-task-input");
// const task = input.value;
// const taskItem2 = document.createElement("div");
// taskItem2.classList.add("task"); //sets the div's class to "task"

// const taskContent2 = document.createElement("div");
// taskContent2.classList.add("uncheckedContent");
// taskItem2.appendChild(taskContent2);

// const taskInput2 = document.createElement("input");        
// taskInput2.type = "text";
// taskInput2.classList.add("text");
// taskInput2.value = task;
// taskInput2.setAttribute("readonly", "readonly");
// taskContent2.appendChild(taskInput2);
// localStorage.setItem("tasks", JSON.stringify(taskInput2.innerHTML)); // The taskInput value is converted into a JSON string.
// const existingTasks2 = JSON.parse(localStorage.getItem("tasks2")) || [];
// existingTasks2.push(taskInput2); // Everytime a task is added, it is added to existingTasks.
// console.log(existingTasks2);

// const savedTasks = document.getElementById("savedTasks");
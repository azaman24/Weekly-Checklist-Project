window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    let listDays = document.querySelector("none");
    
    let today = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let c_month = /* value for current month*/
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    let date = `${weekday[today.getDay()]}, ${(c_month[today.getMonth()])}/${today.getDate()}/${today.getFullYear()}`;
    document.getElementById("date").innerHTML = date; // Displays the current date.

    const allDays = document.getElementsByClassName("dayList");
    const monday = document.getElementById("dayOne");
    const tuesday = document.getElementById("dayTwo");
    const wednesday = document.getElementById("dayThree");
    const thursday = document.getElementById("dayFour");
    const friday = document.getElementById("dayFive");
    const saturday = document.getElementById("daySix");
    const sunday = document.getElementById("daySeven");

    monday.addEventListener('click', ()=> {
        listDays = document.querySelector("#dayOne");
    });

    tuesday.addEventListener('click', ()=> {
        listDays = document.querySelector("#dayTwo");
    });

    wednesday.addEventListener('click', ()=> {
        listDays = document.querySelector("#dayThree");
    });

    thursday.addEventListener('click', ()=> {
        listDays = document.querySelector("#dayFour");
    });

    friday.addEventListener('click', ()=> {
        listDays = document.querySelector("#dayFive");
    });

    saturday.addEventListener('click', ()=> {
        listDays = document.querySelector("#daySix");
    });

    sunday.addEventListener('click', ()=> {
        listDays = document.querySelector("#daySeven");
    }); 

    form.addEventListener('submit', (e)=> {
        e.preventDefault(); //prevents page from reloading
        const checkBoxes = input.value;
        const task = input.value;

        if (!task) { //prints the statement below if task is empty
            alert("Please add a task");
            return;
        }

        if (listDays == document.querySelector("none")) {
            alert ("Please select a day");
            return;
        };

        const checkActions = document.createElement("div");
        checkActions.classList.add("checkActions");

        const checkBox = document.createElement("button");
        checkBox.classList.add("unchecked");

        const taskItem = document.createElement("div");
        taskItem.classList.add("task"); //sets the div's class to "task"

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");
        taskItem.appendChild(taskContent);

        const taskInput = document.createElement("input");        
        taskInput.type = "text";
        taskInput.classList.add("text");
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");
        taskContent.appendChild(taskInput);

        const taskText = taskInput.value.trim();
        let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];


        const taskActions = document.createElement("div");
        taskActions.classList.add("actions"); //creates a class in which the edit button and delete button will be under.
        //let storedTasks = task; //puts the task in the storedTasks variable
        //console.log(storedTasks);
        //previous code for Edit Button
        //const task_edit = document.createElement("button");
        //task_edit.classList.add("edit");
        //task_edit.innerHTML = "Edit";

        const taskComplete = document.createElement("button");
        taskComplete.classList.add("complete");
        taskComplete.innerHTML = "Complete";

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerHTML = "Delete";

        let li = document.createElement("li");
        li.classList.add("unchecked");

        // if (listDays == document.querySelector("#"))

        //taskActions.appendChild(task_edit);
        taskActions.appendChild(checkBox);
        taskActions.appendChild(taskComplete);
        taskActions.appendChild(taskDelete);
        taskItem.appendChild(taskActions);
        listDays.appendChild(taskItem);
        input.value = "";

        //Code for saving the tasks
        // const taskInputX = document.getElementById("taskInput");
        // const taskTextX = taskInputX.value.trim();
        // const existingTasksX = JSON.parse(localStorage.getItem("tasks")) || [];
        // existingTasksX.push(taskTextX);  // adds another task to the array
        // localStorage.setItem("tasks", JSON.stringify(existingTasksX));

        // function displayTasks() {
        //     const taskListX = document.getElementById("taskList");
        //     taskListX.innerHTML = "";
        //     const tasksX = JSON.parse(localStorage.getItem("tasks")) || [];
        //     tasksX.forEach(task => {
        //         const li = document.createElement("li");
        //         li.textContent = task;
        //         taskListX.appendChild(li);
        //     });
        // }
        // displayTasks();
        // taskInput.value = "";
        

        monday.addEventListener('click', ()=> {
            listDays = document.querySelector("#dayOne");
            const pizza = 0;
            let dayOneTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            dayOneTasks.push(taskText);  // adds another task to the array
        });
    
        tuesday.addEventListener('click', ()=> {
            listDays = document.querySelector("#dayTwo");
        });
    
        wednesday.addEventListener('click', ()=> {
            listDays = document.querySelector("#dayThree");
        });
    
        thursday.addEventListener('click', ()=> {
            listDays = document.querySelector("#dayFour");
        });
    
        friday.addEventListener('click', ()=> {
            listDays = document.querySelector("#dayFive");
        });
    
        saturday.addEventListener('click', ()=> {
            listDays = document.querySelector("#daySix");
        });
    
        sunday.addEventListener('click', ()=> {
            listDays = document.querySelector("#daySeven");
        }); 
        
        //code for Edit Button
        //task_edit.addEventListener('click', ()=> {
        //    if (task_edit.innerText.toLowerCase() == "edit") {
        //        taskInput.removeAttribute("readonly"); //make the task editable
        //        taskInput.focus();
        //        task_edit.innerText = "Save"; //change 'Edit' to 'Save'
        //    } else {
        //        console.log("Save");
        //        taskInput.setAttribute("readonly", "readonly");
        //        taskInput.innerText = "Edit"; //change 'Save' to 'Edit'
        //    }
        //});

        checkBox.addEventListener('click', ()=> {
            checkBox.className = "checked";
            console.log(checkBox.className)
        });

        taskComplete.addEventListener('click', ()=> {
            if (taskComplete.innerText.toLowerCase() == "complete") {
                taskComplete.innerText = "Completed";
            }
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                console.log(e.target.classList);
            }
            // let completedTasks = storedTasks;
            // console.log(completedTasks);
        });
        
        taskDelete.addEventListener('click', ()=> {
            listDays.removeChild(taskItem);
        });
    })
    function displayTasks() {
        const taskListX = document.getElementById("taskList");
        //taskListX.innerHTML = "";
        const tasksX = JSON.parse(localStorage.getItem("tasks")) || [];
        tasksX.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            //taskListX.appendChild(li);
        });
    }
    displayTasks();
    //taskInput.value = "";
})

//other sources
const inputBox = document.getElementById("taskInput");
const list1Container = document.getElementById("dayOne");

// function addTask() {
//     if (inputBox === "") {
//         alert("You must write something!")
//     }
//     else {
//         let list1 = document.createElement("li");
//         list1.innerHTML = inputBox.value;
//         list1Container.appendChild(list1);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         list1.appendChild(span);
//     }
//     inputBox.value = "";
// }


let previousButton = null;

function changeColor(current) {
    current.style.color = '#ff6a00'; // The clicked/selected button is this color.
    if (previousButton != null){
        previousButton.style.color = '#00E35A'; // The unselected button is this color.
    }
    previousButton = current; // previousButton no longer is null.
}
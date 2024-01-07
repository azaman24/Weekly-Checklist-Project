window.addEventListener('load', ()=> {
  const form = document.getElementById('taskForm');
  const taskInput = document.getElementById('newTask');
  const tasksList = document.getElementById('tasksList');
  const tasksLists = [
    tasksListMonday = document.getElementById('tasksListMonday'),
    tasksListTuesday = document.getElementById('tasksListTuesday'),
    tasksListWednesday = document.getElementById('tasksListWednesday'),
    tasksListThursday = document.getElementById('tasksListThursday'),
    tasksListFriday = document.getElementById('tasksListFriday'),
    tasksListSaturday = document.getElementById('tasksListSaturday'),
    tasksListSunday = document.getElementById('tasksListSunday')
  ]

  const notification = document.querySelector('.notification');
  const dayBtns = document.querySelectorAll(".dayList");
  let daySelected = null;
  let dayNumber = null;
  const daysArray = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
  ];

  let tasksStorage = [
    'tasksMonday', 
    'tasksTuesday', 
    'tasksWednesday', 
    'tasksThursday', 
    'tasksFriday', 
    'tasksSaturday', 
    'tasksSunday'
  ];

  // tasksAllDays contains all the data the user has put in each day
  let tasksAllDays = [
    tasksMonday = JSON.parse(localStorage.getItem('tasksMonday')) || [],
    tasksTuesday = JSON.parse(localStorage.getItem('tasksTuesday')) || [],
    tasksWednesday = JSON.parse(localStorage.getItem('tasksWednesday')) || [],
    tasksThursday = JSON.parse(localStorage.getItem('tasksThursday')) || [],
    tasksFriday = JSON.parse(localStorage.getItem('tasksFriday')) || [],
    tasksSaturday = JSON.parse(localStorage.getItem('tasksSaturday')) || [],
    tasksSunday = JSON.parse(localStorage.getItem('tasksSunday')) || [],
  ]

  // dayBtns.forEach(button => {
  //   button.addEventListener('click', function() {
  //     dayBtns.forEach(btn => btn.classList.remove('active'));
  //     this.classList.add('active');
  //     daySelected = this.textContent;
  //     renderTasks();

  //     const taskLists = {
  //       'Monday': tasksListMonday,
  //       'Tuesday': tasksListTuesday,
  //       'Wednesday': tasksListWednesday,
  //       'Thursday': tasksListThursday,
  //       'Friday': tasksListFriday,
  //       'Saturday': tasksListSaturday,
  //       'Sunday': tasksListSunday
  //     };
  //     for (const [day, taskList] of Object.entries(taskLists)) {
  //       if (day !== daySelected) {
  //         taskList.innerHTML = '';
  //       }
  //     }
  //   })
  // })

  dayBtns.forEach(button => {
    button.addEventListener('click', function() {
      dayBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      daySelected = this.textContent;
      renderTasks();
      if (daySelected === 'Monday') {
        dayNumber = 0;
        // for (daysArray[dayNumber] in daysArray) {
        //   tasksList[dayNumber].innerHTML != '';
        // }
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Tuesday') {
        dayNumber = 1;
        tasksListMonday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Wednesday') {
        dayNumber = 2;
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Thursday') {
        dayNumber = 3;
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Friday') {
        dayNumber = 4;
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';
        
      } else if (daySelected === 'Saturday') {
        dayNumber = 5;
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Sunday') {
        dayNumber = 6;
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';

      }
    })
  })
      
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    if (daySelected === null) {
      showNotification("Please select a day first");
    }

    saveTask();
    renderTasks();

    if(daySelected === daysArray[dayNumber]) {
      localStorage.setItem(tasksStorage[dayNumber], JSON.stringify(tasksAllDays[dayNumber]));
    }
  });
      
  // saves tasksMonday that the user adds to checklist
  function saveTask() {
    const taskValue = taskInput.value;
    
    // check if the task list is empty
    const emptyTask = taskValue === '';
      
    // check for duplicate tasks in the same list
    if (daySelected === daysArray[dayNumber]) {
      const presentTask = tasksAllDays[dayNumber].some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
        if (emptyTask) {
          showNotification("Task input is empty");
        } else if (presentTask) {
          showNotification('Task already exists!');
        } else {
          tasksAllDays[dayNumber].push({
            value: taskValue,
            checked: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          });
      
          taskInput.value = '';
        };
      }    
  };
      
  function renderTasks() {
    const taskArrays = {
      'Monday': tasksMonday,
      'Tuesday': tasksTuesday,
      'Wednesday': tasksWednesday,
      'Thursday': tasksThursday,
      'Friday': tasksFriday,
      'Saturday': tasksSaturday,
      'Sunday': tasksSunday
    };

    const taskListElements = {
      'Monday': tasksListMonday,
      'Tuesday': tasksListTuesday,
      'Wednesday': tasksListWednesday,
      'Thursday': tasksListThursday,
      'Friday': tasksListFriday,
      'Saturday': tasksListSaturday,
      'Sunday': tasksListSunday
    };

    const tasks = taskArrays[daySelected];
    const taskList = taskListElements[daySelected];

    if (tasks.length === 0) {
        taskList.innerHTML = `<center>No tasks on ${daySelected}!</center>`;
        return;
    }

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <div class="task" id=${index}>
                <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
                <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
                <i class="deleteButton" data-action="delete"></i>
            </div>
        `;
    });
  }

  tasksListMonday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  tasksListTuesday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  tasksListWednesday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  tasksListThursday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  tasksListFriday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  tasksListSaturday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  tasksListSunday.addEventListener('click', (event) => {
    tasksListClicked();
  });

  function tasksListClicked() {
    const target = event.target;
    const parentElement = target.parentNode;
      
    if (parentElement.className !== 'task') return;
      
    // sets an id number to a task
    const task = parentElement;
    const taskId = Number(task.id);
      
    // used to retrieve another function
    const action = target.dataset.action;
      
    action === 'check' && checkTask(taskId);
    action === 'delete' && deleteTask(taskId);
  }
      
  // checks off a task
  function checkTask(taskId) {
    const taskArrays = {
      'Monday': 'tasksMonday',
      'Tuesday': 'tasksTuesday',
      'Wednesday': 'tasksWednesday',
      'Thursday': 'tasksThursday',
      'Friday': 'tasksFriday',
      'Saturday': 'tasksSaturday',
      'Sunday': 'tasksSunday'
    };

    // Get the array name for the selected day
    const arrayName = taskArrays[daySelected];

    // Check if the selected day is valid
    if (arrayName && window[arrayName]) {
      window[arrayName] = window[arrayName].map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));

      // Re-render tasks and update local storage
      renderTasks();
      localStorage.setItem(arrayName, JSON.stringify(window[arrayName]));      
    }    
  }

  // deletes a task from localstorage
  function deleteTask(taskId) {
    const taskArrays = {
      'Monday': 'tasksMonday',
      'Tuesday': 'tasksTuesday',
      'Wednesday': 'tasksWednesday',
      'Thursday': 'tasksThursday',
      'Friday': 'tasksFriday',
      'Saturday': 'tasksSaturday',
      'Sunday': 'tasksSunday'
    };

    const arrayName = taskArrays[daySelected];

    if (arrayName && window[arrayName]) {
        window[arrayName] = window[arrayName].filter((task, index) => index !== taskId);

        renderTasks();
        localStorage.setItem(arrayName, JSON.stringify(window[arrayName]));
    }
  }

  // shows a notification
  function showNotification(msg) {
    notification.innerHTML = msg;
  
    // notification enters the screen
    notification.classList.add('notif-enter');
  
    // notification leaves the screen
    setTimeout(() => {
      notification.classList.remove('notif-enter');
    }, 1100);
  }
})
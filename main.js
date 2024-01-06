window.addEventListener('load', ()=> {
  const form = document.getElementById('taskForm');
  const taskInput = document.getElementById('newTask');
  const tasksList = document.getElementById('tasksList');
  const tasksListMonday = document.getElementById('tasksListMonday');
  const tasksListTuesday = document.getElementById('tasksListTuesday');
  const tasksListWednesday = document.getElementById('tasksListWednesday');
  const tasksListThursday = document.getElementById('tasksListThursday');
  const tasksListFriday = document.getElementById('tasksListFriday');
  const tasksListSaturday = document.getElementById('tasksListSaturday');
  const tasksListSunday = document.getElementById('tasksListSunday');

  const notification = document.querySelector('.notification');
  const dayBtns = document.querySelectorAll(".dayList");
  let daySelected = null;
  const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  dayBtns.forEach(button => {
    button.addEventListener('click', function() {
      dayBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      daySelected = this.textContent;
      renderTasks();
      if (daySelected === 'Monday') {
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Tuesday') {
        tasksListMonday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Wednesday') {
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Thursday') {
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Friday') {
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListSaturday.innerHTML = '';
        tasksListSunday.innerHTML = '';
        
      } else if (daySelected === 'Saturday') {
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSunday.innerHTML = '';

      } else if (daySelected === 'Sunday') {
        tasksListMonday.innerHTML = '';
        tasksListTuesday.innerHTML = '';
        tasksListWednesday.innerHTML = '';
        tasksListThursday.innerHTML = '';
        tasksListFriday.innerHTML = '';
        tasksListSaturday.innerHTML = '';

      }
    })
  })
  
  // each task is the data that the user puts into the checklist of the selected day
  let tasksMonday = JSON.parse(localStorage.getItem('tasksMonday')) || [];
  let tasksTuesday = JSON.parse(localStorage.getItem('tasksTuesday')) || [];
  let tasksWednesday = JSON.parse(localStorage.getItem('tasksWednesday')) || [];
  let tasksThursday = JSON.parse(localStorage.getItem('tasksThursday')) || [];
  let tasksFriday = JSON.parse(localStorage.getItem('tasksFriday')) || [];
  let tasksSaturday = JSON.parse(localStorage.getItem('tasksSaturday')) || [];
  let tasksSunday = JSON.parse(localStorage.getItem('tasksSunday')) || [];

      
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    if (daySelected === null) {
      showNotification("Please select a day first");
    }

    saveTask();
    renderTasks();

    if (daySelected === 'Monday') {
      localStorage.setItem('tasksMonday', JSON.stringify(tasksMonday));
    } else if (daySelected === 'Tuesday') {
      localStorage.setItem('tasksTuesday', JSON.stringify(tasksTuesday));
    } else if (daySelected === 'Wednesday') {
      localStorage.setItem('tasksWednesday', JSON.stringify(tasksWednesday));
    } else if (daySelected === 'Thursday') {
      localStorage.setItem('tasksThursday', JSON.stringify(tasksThursday));
    } else if (daySelected === 'Friday') {
      localStorage.setItem('tasksFriday', JSON.stringify(tasksFriday));
    } else if (daySelected === 'Saturday') {
      localStorage.setItem('tasksSaturday', JSON.stringify(tasksSaturday));
    } else if (daySelected === 'Sunday') {
      localStorage.setItem('tasksSunday', JSON.stringify(tasksSunday));
    }
  });
      
  // saves tasksMonday that the user adds to checklist
  function saveTask() {
    const taskValue = taskInput.value;
    
    // check if the task list is empty
    const emptyTask = taskValue === '';
      
    // check for duplicate tasks in the same list  
    if (daySelected === 'Monday') {
        const presentTask = tasksMonday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
        if (emptyTask) {
          showNotification("Task input is empty");
        } else if (presentTask) {
          showNotification('Task already exists!');
        } else {
          tasksMonday.push({
            value: taskValue,
            checked: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          });
      
          taskInput.value = '';
        }; 

    } else if (daySelected === 'Tuesday') {
      const presentTask = tasksTuesday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        tasksTuesday.push({
          value: taskValue,
          checked: false,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
    
        taskInput.value = '';
      }; 

    } else if (daySelected === 'Wednesday') {
      const presentTask = tasksWednesday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        tasksWednesday.push({
          value: taskValue,
          checked: false,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
    
        taskInput.value = '';
      }; 

    } else if (daySelected === 'Thursday') {
      const presentTask = tasksThursday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        tasksThursday.push({
          value: taskValue,
          checked: false,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
    
        taskInput.value = '';
      }; 

    } else if (daySelected === 'Friday') {
      const presentTask = tasksFriday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        tasksFriday.push({
          value: taskValue,
          checked: false,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
    
        taskInput.value = '';
      }; 

    } else if (daySelected === 'Saturday') {
      const presentTask = tasksSaturday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        tasksSaturday.push({
          value: taskValue,
          checked: false,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
    
        taskInput.value = '';
      }; 

    } else if (daySelected === 'Sunday') {
      const presentTask = tasksSunday.some((task) => task.value.toUpperCase() === taskValue.toUpperCase());
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        tasksSunday.push({
          value: taskValue,
          checked: false,
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
    
        taskInput.value = '';
      }; 
    }
  };
      
  // updates the list of saved tasks
  function renderTasks() {
    if (daySelected === 'Monday') {  
        if (tasksMonday.length === 0) {
          tasksListMonday.innerHTML = '<center>No tasks on Monday!</center>';
          return;
        }
      
      // clears the list before performing a re-render
      tasksListMonday.innerHTML = '';
    
      // the structure of each task
        tasksMonday.forEach((task, index) => {
          tasksListMonday.innerHTML += `
            <div class="task" id=${index}>
            <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
            <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
            <i class="deleteButton" data-action="delete"></i>
            </div>
          `;
        });
        
    } else if (daySelected === 'Tuesday') {  
      if (tasksTuesday.length === 0) {
        tasksListTuesday.innerHTML = '<center>No tasks on Tuesday!</center>';
        return;
      }
    
      tasksListTuesday.innerHTML = '';
  
      tasksTuesday.forEach((task, index) => {
        tasksListTuesday.innerHTML += `
          <div class="task" id=${index}>
          <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
          <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
          </div>
        `;
      });

    } else if (daySelected === 'Wednesday') {  
      if (tasksWednesday.length === 0) {
        tasksListWednesday.innerHTML = '<center>No tasks on Wednesday!</center>';
        return;
      }
    
      tasksListWednesday.innerHTML = '';
  
      tasksWednesday.forEach((task, index) => {
        tasksListWednesday.innerHTML += `
          <div class="task" id=${index}>
          <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
          <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
          </div>
        `;
      });
    } else if (daySelected === 'Thursday') {  
      if (tasksThursday.length === 0) {
        tasksListThursday.innerHTML = '<center>No tasks on Thursday!</center>';
        return;
      }
    
      tasksListThursday.innerHTML = '';
  
      tasksThursday.forEach((task, index) => {
        tasksListThursday.innerHTML += `
          <div class="task" id=${index}>
          <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
          <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
          </div>
        `;
      });
    } else if (daySelected === 'Friday') {  
      if (tasksFriday.length === 0) {
        tasksListFriday.innerHTML = '<center>No tasks on Friday!</center>';
        return;
      }
    
      tasksListFriday.innerHTML = '';
  
      tasksFriday.forEach((task, index) => {
        tasksListFriday.innerHTML += `
          <div class="task" id=${index}>
          <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
          <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
          </div>
        `;
      });
    } else if (daySelected === 'Saturday') {  
      if (tasksSaturday.length === 0) {
        tasksListSaturday.innerHTML = '<center>No tasks on Saturday!</center>';
        return;
      }
    
      tasksListSaturday.innerHTML = '';
  
      tasksSaturday.forEach((task, index) => {
        tasksListSaturday.innerHTML += `
          <div class="task" id=${index}>
          <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
          <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
          </div>
        `;
      });
    } else if (daySelected === 'Sunday') {  
      if (tasksSunday.length === 0) {
        tasksListSunday.innerHTML = '<center>No tasks on Sunday!</center>';
        return;
      }
    
      tasksListSunday.innerHTML = '';
  
      tasksSunday.forEach((task, index) => {
        tasksListSunday.innerHTML += `
          <div class="task" id=${index}>
          <p class="${task.checked ? 'checked' : ''}" data-action="check">${task.value}</p>
          <i class="${task.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
          </div>
        `;
      });
    }
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
    if (daySelected === 'Monday') {
      tasksMonday = tasksMonday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksMonday', JSON.stringify(tasksMonday));

    } else if (daySelected === 'Tuesday') {
      tasksTuesday = tasksTuesday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksTuesday', JSON.stringify(tasksTuesday));

    } else if (daySelected === 'Wednesday') {
      tasksWednesday = tasksWednesday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksWednesday', JSON.stringify(tasksWednesday));

    } else if (daySelected === 'Thursday') {
      tasksThursday = tasksThursday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksThursday', JSON.stringify(tasksThursday));

    } else if (daySelected === 'Friday') {
      tasksFriday = tasksFriday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksFriday', JSON.stringify(tasksFriday));
      
    } else if (daySelected === 'Saturday') {
      tasksSaturday = tasksSaturday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksSaturday', JSON.stringify(tasksSaturday));
      
    } else if (daySelected === 'Sunday') {
      tasksSunday = tasksSunday.map((task, index) => ({
        ...task,
        checked: index === taskId ? !task.checked : task.checked,
      }));
      renderTasks();
      localStorage.setItem('tasksSunday', JSON.stringify(tasksSunday));
      
    }
  }

  // deletes a task
  function deleteTask(taskId) {
    if (daySelected === 'Monday') {
      tasksMonday = tasksMonday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksMonday', JSON.stringify(tasksMonday));

    } else if (daySelected === 'Tuesday') {
      tasksTuesday = tasksTuesday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksTuesday', JSON.stringify(tasksTuesday));

    } else if (daySelected === 'Wednesday') {
      tasksWednesday = tasksWednesday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksWednesday', JSON.stringify(tasksWednesday));

    } else if (daySelected === 'Thursday') {
      tasksThursday = tasksThursday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksThursday', JSON.stringify(tasksThursday));

    } else if (daySelected === 'Friday') {
      tasksFriday = tasksFriday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksFriday', JSON.stringify(tasksFriday));

    } else if (daySelected === 'Saturday') {
      tasksSaturday = tasksSaturday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksSaturday', JSON.stringify(tasksSaturday));

    } else if (daySelected === 'Sunday') {
      tasksSunday = tasksSunday.filter((task, index) => index !== taskId);
      renderTasks();
      localStorage.setItem('tasksSunday', JSON.stringify(tasksSunday));

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
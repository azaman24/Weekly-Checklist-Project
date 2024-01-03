// SELECT ELEMENTS
// SELECT ELEMENTS
window.addEventListener('load', ()=> {
    // SELECT ELEMENTS
    const form = document.getElementById('todoform');
    const taskInput = document.getElementById('newtodo');
    const todosListEl = document.getElementById('todos-list');
    const notificationEl = document.querySelector('.notification');
    const buttons = document.querySelectorAll(".dayList");
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      })
    })
    // VARS
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let EditTaskId = -1;
      
    // 1st render
    renderTodos();
      
    // FORM SUBMIT
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      saveTodo();
      renderTodos();
      localStorage.setItem('todos', JSON.stringify(todos));
    });
      
    // SAVE TODO
    function saveTodo() {
      const todoValue = taskInput.value;
      
      // check if the todo is empty
      const emptyTask = todoValue === '';
      
      // check for duplicate todos
      const presentTask = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());
      
      if (emptyTask) {
        showNotification("Task input is empty");
      } else if (presentTask) {
        showNotification('Task already exists!');
      } else {
        if (EditTaskId >= 0) {
          todos = todos.map((todo, index) => ({
          ...todo,
          value: index === EditTaskId ? todoValue : todo.value,
        }));
        EditTaskId = -1;
        } else {
          todos.push({
            value: todoValue,
            checked: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          });
    }
      
    taskInput.value = '';
    }
    }
      
    // RENDER TODOS
    function renderTodos() {
      if (todos.length === 0) {
        todosListEl.innerHTML = '<center>No tasks to do!</center>';
        return;
      }
      
      // CLEAR ELEMENT BEFORE A RE-RENDER
      todosListEl.innerHTML = '';
  
      // RENDER TODOS
      todos.forEach((todo, index) => {
        todosListEl.innerHTML += `
        <div class="todo" id=${index}>
          <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
          <i class="${todo.checked ? 'checkedButton' : 'uncheckedButton'}" data-action="check"></i>
          <i class="deleteButton" data-action="delete"></i>
        </div>
        `;
      });
    }
      
    // CLICK EVENT LISTENER FOR ALL THE TODOS
    todosListEl.addEventListener('click', (event) => {
    const target = event.target;
    const parentElement = target.parentNode;
      
    if (parentElement.className !== 'todo') return;
      
    // t o d o id
    const todo = parentElement;
    const todoId = Number(todo.id);
      
          // target action
    const action = target.dataset.action;
      
    action === 'check' && checkTodo(todoId);
    action === 'edit' && editTodo(todoId);
    action === 'delete' && deleteTodo(todoId);
    });
      
    // CHECK A TODO
    function checkTodo(todoId) {
      todos = todos.map((todo, index) => ({
        ...todo,
        checked: index === todoId ? !todo.checked : todo.checked,
      }));
      renderTodos();
      localStorage.setItem('todos', JSON.stringify(todos));
    }
      
    // DELETE TODO
    function deleteTodo(todoId) {
      todos = todos.filter((todo, index) => index !== todoId);
      EditTaskId = -1;
  
      // re-render
      renderTodos();
      localStorage.setItem('todos', JSON.stringify(todos));
    }
      
    // SHOW A NOTIFICATION
    function showNotification(msg) {
      // change the message
      notificationEl.innerHTML = msg;
  
      // notification enter
      notificationEl.classList.add('notif-enter');
  
      // notification leave
      setTimeout(() => {
        notificationEl.classList.remove('notif-enter');
      }, 2000);
    }
  })
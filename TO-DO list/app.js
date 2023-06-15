// Get elements from the DOM
const titleInput = document.getElementById('title-input');
const descriptionInput = document.getElementById('description-input');
const reminderInput = document.getElementById('reminder-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to the "Add" button
addBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const titleText = titleInput.value.trim();
  const descriptionText = descriptionInput.value.trim();
  const reminderText = reminderInput.value.trim();

  if (titleText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <div class="task-info">
        <div class="task-title">${titleText}</div>
        <div class="task-reminder">Reminder: ${reminderText}</div>
        <div class="task-description">${descriptionText}</div>
      </div>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(taskItem);
    
    // Clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
    reminderInput.value = '';
    
    // Attach event listener to the new delete button
    taskItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
  }
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  todoList.removeChild(taskItem);
}

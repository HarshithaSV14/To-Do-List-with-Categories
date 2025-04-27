document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  const categorySelect = document.getElementById('categorySelect');
  const category = categorySelect.value;
  
  if (taskText === '') {
    return;
  }

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.classList.add(category.toLowerCase());
  li.textContent = `${taskText} - [${category}]`;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', deleteTask);

  li.appendChild(deleteButton);
  li.addEventListener('click', toggleComplete);

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

function toggleComplete(event) {
  const taskItem = event.target;

  if (taskItem.tagName.toLowerCase() === 'li') {
    taskItem.classList.toggle('completed');
  }
}

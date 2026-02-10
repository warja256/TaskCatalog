document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const tasksList = document.getElementById('tasksList');
  
    async function loadTasks() {
      const response = await fetch('http://localhost:3000/api/items');
      const tasks = await response.json();
      renderTasks(tasks);
    }
  
    function renderTasks(tasks) {
      tasksList.innerHTML = '';
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.name} (Сложность: ${task.complexity})`;
        tasksList.appendChild(li);
      });
    }
  
    taskForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const complexity = document.getElementById('complexity').value;
  
      const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, complexity: parseInt(complexity) }),
      });
  
      if (response.ok) {
        loadTasks();
        taskForm.reset();
      } else {
        alert('Ошибка при добавлении задачи!');
      }
    });
  
    loadTasks();
  });
  
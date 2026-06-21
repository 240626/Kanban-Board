const tasks = document.querySelectorAll('.task');
const lists = document.querySelectorAll('.task-list');

tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        task.classList.add('dragging');
    });

    task.addEventListener('dragend', () => {
        task.classList.remove('dragging');
    });
});

lists.forEach(list => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    list.addEventListener('drop', () => {
        const draggingTask = document.querySelector('.dragging');
        if (draggingTask) {
            list.appendChild(draggingTask);
        }
    });
});
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const  taskOb = document.createElement('div');
        taskOb.classList.add('task');

        const taskContentOb = document.createElement('div');
        taskContentOb.classList.add('content');

        taskOb.appendChild(taskContentOb);

        const taskInputOb = document.createElement('input');
        taskInputOb.classList.add('text');
        taskInputOb.type = 'text';
        taskInputOb.value = task;
        taskInputOb.setAttribute('readonly', 'readonly');

        taskContentOb.appendChild(taskInputOb);

        const taskActionsOb = document.createElement('div');
        taskActionsOb.classList.add('actions');

        const taskEditOb = document.createElement('button');
        taskEditOb.classList.add('edit');
        taskEditOb.innerText = 'Edit';

        const taskDeleteOb = document.createElement('button');
        taskDeleteOb.classList.add('delete');
        taskDeleteOb.innerText = 'Delete';

        taskActionsOb.appendChild(taskEditOb);
        taskActionsOb.appendChild(taskDeleteOb);

        taskOb.appendChild(taskActionsOb);

        list.appendChild(taskOb);

        input.value = '';

        taskEditOb.addEventListener('click', () => {
            if(taskEditOb.innerText.toLocaleLowerCase() == "edit") {
                taskEditOb.innerText = 'Save';
                taskInputOb.removeAttribute('readonly');
                taskInputOb.focus();
            } else {
                taskEditOb.innerText = 'Edit';
                taskInputOb.setAttribute('readonly', 'readonly');
            }
        });

        taskDeleteOb.addEventListener('click', (e) => {
            list.removeChild(taskOb);
        });
    });
});
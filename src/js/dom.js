import '../css/modal.css';
import { project } from './projects';

const projectSection = document.querySelector(".project-nav");

// Fonction qui permet d'afficher le Modal qui va créer un nouveau projet
function createNewProject() {
    const body = document.querySelector('body');
    const modal = document.createElement('dialog');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const title = document.createElement('h2');
    title.textContent = "Create Your Project";

    // Création du composant Close
    const closeBtn = document.createElement('button');
    closeBtn.classList.add("button");

    const Xpos = document.createElement('span');
    Xpos.classList.add('X');

    const Ypos = document.createElement('span');
    Ypos.classList.add('Y');

    const close = document.createElement('div');
    close.classList.add('close');
    close.innerHTML = 'Close';

    closeBtn.appendChild(Xpos);
    closeBtn.appendChild(Ypos);
    closeBtn.appendChild(close);

    modalHeader.appendChild(title);
    modalHeader.appendChild(closeBtn);

    // Fermeture du modal depuis le bouton Close
    closeBtn.addEventListener("click", () => {
        console.log("Close button clicked");
        modal.close();
    });

    // Création du formulaire
    const modalForm = document.createElement("form");
    modalForm.classList.add("modalForm");
    modalForm.setAttribute("method", "POST");

    const labelProject = document.createElement("label");
    labelProject.setAttribute('for', 'name');
    labelProject.textContent = 'Nom du Projet : ';

    const inputProject = document.createElement("input");
    inputProject.setAttribute('type', 'text');
    inputProject.setAttribute('id', 'name');
    inputProject.setAttribute('name', 'name');
    inputProject.setAttribute('required', true);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Envoyer';

    modalForm.appendChild(labelProject);
    modalForm.appendChild(inputProject);
    modalForm.appendChild(submitButton);

    modal.appendChild(modalHeader);
    modal.appendChild(modalForm);

    body.appendChild(modal);
    modal.showModal();

    modalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formInput = new FormData(modalForm);
        const name = formInput.get("name");
        const newProject = new project(name);
        displayProject(newProject);
        modal.close();
    });
}


function displayProject(project) {
    const projectSection = document.querySelector(".project-nav");

    // Création du bouton pour afficher le projet
    const projectBtn = document.createElement('button');
    projectBtn.textContent = project.name;
    projectBtn.classList.add('project-btn');
    projectBtn.addEventListener('click', () => {
        displayTodos(project);
    });

    // Bouton pour ajouter un todo
    const addTodoBtn = document.createElement('button');
    addTodoBtn.textContent = 'Add Todo';
    addTodoBtn.classList.add('add-todo-btn');
    addTodoBtn.addEventListener('click', () => {
        createTodo(project);
    });

    // Container pour le projet
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.appendChild(projectBtn);
    projectContainer.appendChild(addTodoBtn);

    projectSection.appendChild(projectContainer);
}

function createTodo(project) {
    const body = document.querySelector('body');
    const modal = document.createElement('dialog');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const title = document.createElement('h2');
    title.textContent = "Create New Todo";

    // Création du composant Close
    const closeBtn = document.createElement('button');
    closeBtn.classList.add("button");

    const Xpos = document.createElement('span');
    Xpos.classList.add('X');

    const Ypos = document.createElement('span');
    Ypos.classList.add('Y');

    const close = document.createElement('div');
    close.classList.add('close');
    close.innerHTML = 'Close';

    closeBtn.appendChild(Xpos);
    closeBtn.appendChild(Ypos);
    closeBtn.appendChild(close);

    modalHeader.appendChild(title);
    modalHeader.appendChild(closeBtn);

    
    closeBtn.addEventListener("click", () => {
        modal.close();
    });

    
    const modalForm = document.createElement("form");
    modalForm.classList.add("modalForm");
    modalForm.setAttribute("method", "POST");

    const labelTitle = document.createElement("label");
    labelTitle.setAttribute('for', 'todoTitle');
    labelTitle.textContent = 'Titre du Todo : ';

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'todoTitle');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('required', true);

    const labelDescription = document.createElement("label");
    labelDescription.setAttribute('for', 'todoDescription');
    labelDescription.textContent = 'Description : ';

    const inputDescription = document.createElement("input");
    inputDescription.setAttribute('type', 'text');
    inputDescription.setAttribute('id', 'todoDescription');
    inputDescription.setAttribute('name', 'description');
    inputDescription.setAttribute('required', true);

    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute('for', 'todoDueDate');
    labelDueDate.textContent = 'Due Date : ';

    const inputDueDate = document.createElement("input");
    inputDueDate.setAttribute('type', 'date');
    inputDueDate.setAttribute('id', 'todoDueDate');
    inputDueDate.setAttribute('name', 'dueDate');
    inputDueDate.setAttribute('required', true);

    const labelPriority = document.createElement("label");
    labelPriority.setAttribute('for', 'todoPriority');
    labelPriority.textContent = 'Priority : ';

    const selectPriority = document.createElement("select");
    selectPriority.setAttribute('id', 'todoPriority');
    selectPriority.setAttribute('name', 'priority');
    selectPriority.setAttribute('required', true);

    const optionLow = document.createElement("option");
    optionLow.setAttribute('value', 'Low');
    optionLow.textContent = 'Low';

    const optionMedium = document.createElement("option");
    optionMedium.setAttribute('value', 'Medium');
    optionMedium.textContent = 'Medium';

    const optionHigh = document.createElement("option");
    optionHigh.setAttribute('value', 'High');
    optionHigh.textContent = 'High';

    selectPriority.appendChild(optionLow);
    selectPriority.appendChild(optionMedium);
    selectPriority.appendChild(optionHigh);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Add Todo';

    modalForm.appendChild(labelTitle);
    modalForm.appendChild(inputTitle);
    modalForm.appendChild(labelDescription);
    modalForm.appendChild(inputDescription);
    modalForm.appendChild(labelDueDate);
    modalForm.appendChild(inputDueDate);
    modalForm.appendChild(labelPriority);
    modalForm.appendChild(selectPriority);
    modalForm.appendChild(submitButton);

    modal.appendChild(modalHeader);
    modal.appendChild(modalForm);

    body.appendChild(modal);
    modal.showModal();

    modalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(modalForm);
        const title = formData.get("title");
        const description = formData.get("description");
        const dueDate = formData.get("dueDate");
        const priority = formData.get("priority");

        const newTodo = {
            title,
            description,
            dueDate,
            priority,
            notes: '',
            checklist: []
        };

        project.addTodo(newTodo);
        displayTodos(project);
        modal.close();
    });
}

function displayTodos(project) {
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    project.todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const titleElement = document.createElement('h3');
        titleElement.textContent = todo.title;
        todoDiv.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = todo.description;
        todoDiv.appendChild(descriptionElement);

        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = `Due Date: ${todo.dueDate}`;
        todoDiv.appendChild(dueDateElement);

        const priorityElement = document.createElement('p');
        priorityElement.textContent = `Priority: ${todo.priority}`;
        todoDiv.appendChild(priorityElement);

        if (todo.notes) {
            const notesElement = document.createElement('p');
            notesElement.textContent = `Notes: ${todo.notes}`;
            todoDiv.appendChild(notesElement);
        }

        if (todo.checklist && todo.checklist.length > 0) {
            const checklistElement = document.createElement('ul');
            todo.checklist.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                checklistElement.appendChild(listItem);
            });
            todoDiv.appendChild(checklistElement);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            const todoIndex = project.todos.indexOf(todo);
            if (todoIndex !== -1) {
                project.delTodo(todoIndex);
                displayTodos(project);
            }
        });
        todoDiv.appendChild(deleteBtn);

        contentContainer.appendChild(todoDiv);
    });
}

export { displayProject, createNewProject, createTodo, displayTodos };

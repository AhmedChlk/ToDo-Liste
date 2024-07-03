import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';
import '../css/modal.css';
import { todo } from "./todo";
import { project } from "./projects";
import { displayProject, createNewProject, displayTodos, createTodo } from './dom';

// Liste des projets
const Projects = [];

// Initialisation de l'application
export function initApp() {
    const newProjectBtn = document.getElementById("new-project");
    newProjectBtn.addEventListener('click', () => {
        createNewProject();
    });

        const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener('click', () => {
        // Logique pour filtrer et afficher les tâches à domicile (Home)
        console.log("Filtrer par Home");
    });

    const todayBtn = document.getElementById("today-btn");
    todayBtn.addEventListener('click', () => {
        // Logique pour filtrer et afficher les tâches d'aujourd'hui (Today)
        console.log("Filtrer par Today");
    });

    const next7daysBtn = document.getElementById("next-7days-btn");
    next7daysBtn.addEventListener('click', () => {
        // Logique pour filtrer et afficher les tâches des 7 prochains jours (Next 7 Days)
        console.log("Filtrer par Next 7 Days");
    });
    // Création d'un projet par défaut avec des todos
    const defaultProject = new project('Course');
    const todo1 = new todo(
        'Faire les courses',
        'Acheter des légumes et du lait',
        '2024-07-03',
        'Moyen',
        'N\'oublier pas de prendre le pain',
        ['Légumes', 'Lait']
    );
    const todo2 = new todo(
        'Nettoyer la maison',
        'Passer l\'aspirateur et nettoyer les surfaces',
        '2024-07-04',
        'Élevé',
        'Ne pas oublier les coins',
        ['Aspirateur', 'Nettoyage des surfaces']
    );

    defaultProject.addTodo(todo1);
    defaultProject.addTodo(todo2);

    Projects.push(defaultProject);

    displayProject(defaultProject);
    displayTodos(defaultProject);

    const addTodoForm = document.getElementById("add-todo-form");
    addTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(addTodoForm);
        const projectName = formData.get('project');
        const projectToAddTodo = Projects.find(proj => proj.name === projectName);

        if (projectToAddTodo) {
            const newTodo = new todo(
                formData.get('title'),
                formData.get('description'),
                formData.get('dueDate'),
                formData.get('priority'),
                formData.get('notes'),
                formData.getAll('checklist')
            );

            projectToAddTodo.addTodo(newTodo);
            displayTodos(projectToAddTodo);
            addTodoForm.reset();
        } else {
            console.error(`Project ${projectName} not found.`);
        }
    });
}



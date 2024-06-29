import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';
import { todo } from "./todo";
import { project } from "./projects";
import { displayProject,createNewProject } from './dom';

export function initApp() {
    const newProjectBtn = document.getElementById("new-project");
    newProjectBtn.addEventListener('click',() =>{
        createNewProject();
    })
    
}

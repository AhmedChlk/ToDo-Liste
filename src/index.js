import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { todo } from "./js/todo";
import { project } from "./js/projects";

let myTodo = new todo(
    "Apprendre JavaScript", 
    "Compléter le tutoriel sur les classes et les objets", 
    "2024-07-01", 
    "Haute", 
    "Utiliser des ressources en ligne", 
    ["Lire la documentation", "Faire les exercices"]
);
let myProject = new project("le projet");
myProject.addTodo("make bed");

console.log("test");
console.log(myTodo);
console.log(myProject);

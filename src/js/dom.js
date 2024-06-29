

const projectSection = document.querySelector(".project-nav");
function createNewProject(){
    const body = document.querySelector('body');
    const modal = document.createElement('dialog');
    modal.textContent ="hello world"
    body.appendChild(modal)
    modal.showModal();
}
function displayProject(project) {
    const projectBtn = document.createElement('button');
    projectBtn.textContent = project.name;
    projectSection.appendChild(projectBtn);
    
}

function displayTodos(project){

}
export{ displayProject,createNewProject};
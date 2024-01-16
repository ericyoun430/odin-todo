function refreshNumberOfOpenItems(selector, numberOfOpenItems) {
    document.querySelector(selector).lastChild.textContent = numberOfOpenItems;
}

function addProject(projectName, projectCount) {
    let newProject = document.createElement('div');
    newProject.classList.add('project-item',`project-${projectCount}`);
    newProject.innerHTML = `
    <span class="project-name">${projectName}</span>
    <span class="circle">
      <span class="project-count">0</span>
    </span>
    `
    document.querySelector('.project-list').appendChild(newProject);
}

function projectPopup() {
    let projectInput = document.createElement('input');
    projectInput.setAttribute('type','text');
    projectInput.classList.add('project-input','project-item');
    document.querySelector('.project-list').appendChild(projectInput);
    return projectInput;
}

export {refreshNumberOfOpenItems, addProject, projectPopup};
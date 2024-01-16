import CheckBox from './todo-items/header/checkbox.png';
import './styles.css';
import Project from './todo-items/project/project.js';
import {projectPopup} from './todo-items/project/projectDomManipulation.js';

let projectList = [];

//Add New Project
document.querySelector('.project-add').addEventListener('click',()=> {
    let inputField = projectPopup();

    const newProject = new Project('test',[],projectList.length);
    projectList.push(newProject);
})

//Add New To-Do Item

// UI Variables
const form = document.querySelector("#project-form");
const projectList = document.querySelector('ul.collection');
const clearProjects = document.querySelector('.clear-projects');
const filter = document.querySelector('#filter');
const projectInput = document.querySelector('#project');

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addProject);
}

function addProject(e) {
  if (projectInput.value === '') {
    alert('Type a project name');
  }
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(projectInput.value))
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTM = ('<i class="fa fa-remove"></i>');
li.appendChild(link);
projectList.appendChild(li);
projectInput.value ='';

  e.preventDefault();
}
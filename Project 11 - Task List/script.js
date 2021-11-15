// define ui variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//console.log('Hello world')
// LOAD ALL EVENT LISTENERS
loadEventListeners();

// FUNCTION TO LOAD EVENT LISTENERS
function loadEventListeners() {
   //add task form
   form.addEventListener('submit', addTask);
   //remove task
   taskList.addEventListener('click',removeTask);
   //clear task button
   clearBtn.addEventListener('click',clearTasks);
   //filte through tasks
   filter.addEventListener('keyup',filterTask);
   //DOM load event 
   document.addEventListener('DOMContentLoaded', getTasks);
}

// get tasks from local storage
function getTasks(){
   let tasks;
   if(localStorage.getItem('tasks') == null){
      tasks = []; //empty array
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   //loop through the tasks that are there
   tasks.forEach(function(task){
      //create an li element
   const li = document.createElement('li');
   li.className = 'collection-item';

   // create text node and append it to li
   li.appendChild(document.createTextNode(task));

   // new link element 
   const link = document.createElement('a');
   //add a class
   link.className = 'delete-item secondary-content';

   //icon HTML
   link.innerHTML = `<i class = "fa fa-remove"></i>`;

   //append link to li
   li.appendChild(link);

   //li - > ul append
   taskList.appendChild(li);
   })
}

// Add task function
function addTask(e) {
   if(taskInput.value == ''){
      alert('Add a task!');
      return;
   }

   //create an li element
   const li = document.createElement('li');
   li.className = 'collection-item';

   // create text node and append it to li
   li.appendChild(document.createTextNode(taskInput.value));

   // new link element 
   const link = document.createElement('a');
   //add a class
   link.className = 'delete-item secondary-content';

   //icon HTML
   link.innerHTML = `<i class = "fa fa-remove"></i>`;

   //append link to li
   li.appendChild(link);

   //li - > ul append
   taskList.appendChild(li);

   // storing the addded task
   storeTask(taskInput.value);

   //clear input 
   taskInput.value = '';

   console.log(taskInput);
   console.log(link);
   e.preventDefault();
}

// store task in local storage
function storeTask(task){
   let tasks;
   if(localStorage.getItem('tasks') == null){
      tasks = []; //empty array
   } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.push(task);
   localStorage.setItem('tasks',JSON.stringify(tasks));
}

// remove task
function removeTask(e){
   console.log("this is target",e.target.parentElement.parentElement);
   if(e.target.parentElement.classList.contains('delete-item')){
      if(confirm('Are you sure?')){
         e.target.parentElement.parentElement.remove();

      //remove task from local storage
      removeTaskfromLocalStorage(e.target.parentElement.parentElement);
      }
   }
}

// clear tasks all together button
function clearTasks() {
  // taskList.innerHTML = '';
   //faster way would be looping 
   while(taskList.firstChild){
     // console.log('first child',taskList.firstChild);
      taskList.removeChild(taskList.firstChild);
   }
}

//filter through the tasks
function filterTask(e){
   const text = e.target.value.toLowerCase();
   document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      console.log('item', item);
      console.log('task?',task);
      if(item.toLocaleLowerCase().indexOf(text) != -1){
         task.style.display = 'block';
      } else {
         task.style.display = 'none';
      }
   })
}


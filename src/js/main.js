import $ from 'jquery';
import _ from 'lodash';

// Get our classes
import { TodoList } from './classes/todo';
import { Task } from './classes/task';

// Store Elements
let todoForm = $('.todoForm'); // <form>
let todoInput = $('.todoInput'); // <input>
let todos = $('.todos') // <ul>


// We need to "model" our Todo List
let groceryList = new TodoList('Grocery List'); // a model



// Control how we add items
todoForm.on('submit', function (event) {
  event.preventDefault(); // Stop the form submission
  // Get the value of our input
  let taskDesc = todoInput.val();
  // Clear our input by setting it into an empty string
  todoInput.val('');

  // Visually show the element on the page
  let taskHTML = taskTemplate(taskDesc);
  todos.append(taskHTML);

  // Update my groceryList model to contain this item
  // Specifically an "instance" of my Task
  let task = new Task (taskDesc);
  groceryList.tasks.push(task);

  console.log(groceryList);
});


// Template
function taskTemplate (taskDesc) {
  return `
    <li>${taskDesc}</li>
  `;


}

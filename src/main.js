import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Test Supabase connection (optional)
console.log('Supabase client initialized:', supabase);

// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://filhoaqtjtbbbhgxrmoe.supabase.co'
// const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbGhvYXF0anRiYmJoZ3hybW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDg2NjUsImV4cCI6MjA0ODcyNDY2NX0._LrUuyHcX-hPo_kua-w613Py-uxo8h4zcEElIBBz-_w'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)
// console.log(supabase);

// Selecting elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list"); 

// Create a button element with a click handler function.
// This function creates a button and is called later in the code 
// it takes in two arguments:
// - one is label = type of string - the word DONE&X is used later in the code
// - second one is a function = in this scenario/code the function is called:
// "handleTaskCompletion" - used later in the code.
// "handleTaskDeletion" - used later in the code.
// The reason for creting this helplfull - function below is so it can be reused later in the code
// for creating a button and inputting different arguments in it (label, clickHandler). 

function createButton(label, clickHandler) {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', clickHandler);
    return button;
}

// Create a delete button for completed tasks
function createDeleteButton() {
    const button = document.createElement('button');
    button.textContent = '✖'; 
    // Cross symbol
    button.classList.add('delete-button');
    button.addEventListener('click', handleTaskDeletion);
    return button;
}

function handleTaskDeletion(event) {
    const listItem = event.target.parentElement; // Get the parent <li> element

    // Add delete animation
    listItem.classList.add('animate__animated', 'animate__fadeOutLeft');

    setTimeout(() => {
        listItem.remove(); // Remove the item after the animation
    }, 500); // Match the animation duration
}

function handleTaskCompletion(event) {
    const listItem = event.target.parentElement; // Get the parent <li> element

    // Add fade-out animation
    listItem.classList.add('animate__animated', 'animate__fadeOutRight');

    // Wait for the animation to complete
    setTimeout(() => {
        listItem.classList.remove('animate__fadeOutRight'); // Remove fade-out class
        listItem.classList.add('animate__fadeInUp'); // Add fade-in class for completed list

        listItem.classList.add('completed-task'); // Add class to reset styles

        // Add delete button using createButton function
        const deleteButton = createButton('✖', handleTaskDeletion);
        listItem.appendChild(deleteButton);

        completedList.appendChild(listItem); // Move the task to the completed list

        event.target.remove(); // Remove the "Completed" button
    }, 500); // Match the duration of the CSS animation
}

// Main function to add a task
function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

     // Add animation classes to the list item
     listItem.classList.add('animate__animated', 'animate__fadeInDown');

    const button = createButton('Done', handleTaskCompletion);

    listItem.appendChild(button);
    todoList.appendChild(listItem);
}

// Add submit event listener to the form
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = todoInput.value.trim(); // Trim whitespace

    // Check if input is empty
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }

    // Add the task to the to-do list
    addTask(newTask);

    // Clear input field
    todoInput.value = '';
});







// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'





// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

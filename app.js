const form = document.querySelector( 'form');
const taskInput = document.querySelector('#task');

form.addEventListener('submit', addTask)

function addTask(e) {
    // input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement('li');
    //define <li> CSS class
    li.className = "collection-item";
    // create text value to <li>
    li.appendChild(text);
    // find <ul> DOM component
    const ul = document.querySelector('.collection');
    //add <li> to <ul>
    ul.appendChild(li);
    //clear input value
    taskInput.value = '';
    //form submit event control
    e.preventDefault();
}
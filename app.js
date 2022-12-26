const form = document.querySelector( 'form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector( '.collection');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);

function deleteTask(e){
    if(e.target.textContent){
        if(confirm("Do you want to delete this task?")){
            e.target.parentElement.remove();
        }
    }
}

function addTask(e) {
    // input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement('li');
    //define <li> CSS class
    li.className = "collection-item";
    // create text value to <li>
    li.appendChild(text);
    // create link element
    const link = document.createElement('a');
    // set href atribute
    link.setAttribute('href', '#')
    //add CSS style
    link.className = 'secondary-content';
    //add X text to link
    link.appendChild(document.createTextNode('X'));
    //add link to <li>
    li.appendChild(link);
    console.log(link);
    // find <ul> DOM component
    const ul = document.querySelector('.collection');
    //add <li> to <ul>
    ul.appendChild(li);
    //clear input value
    taskInput.value = '';
    //form submit event control
    e.preventDefault();
}
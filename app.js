//create variable "forms" "todosList", "button", "input" 
var form = document.querySelector('form')
var todoList = document.querySelector('ul')
var button = document.querySelector('button')
var input = document.getElementById("user-todo")

//declare varible 'todosArray' to hold our todos
//we want to ask if there are already 'todos' in localstorage
//those 'todos ' using JSON.parse if local storage  does not  have any 'todos' then we will set our 'TodoArray'
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

// use localstorage setitem() method to set 'todos' to a String with 'JSON.Stringify()'
// JSON.Stringify() if used because local storage works with string.
localStorage.setItem('todos',JSON.stringify(todosArray))

//declare a varible 'storage' that contain all the information in localstorage
//we will assign to 'storage' JSON.parse Method Convert string from local
//storage into data we can access with javascript.
//when  receiving data from a web server. the data is always  a string
//parse the data with JSON.parse() and the data become a javaScript  object
var storage = JSON.parse(localStorage.getItem('todos'))


//attach an event listener to the form varible with 'addEventLister'
//to capture the user input on the submit event
// make sure to run preventdefault on the event when the form is submitted
// call todomaker function which we will create in step three and pass to it.
//the input varible and target the value the user has provide with input.value\
//finally set the input.value to an empty string

form.addEventListener('submit', function(e){
    e.preventDefault()
    //push onto 'TodosArray The input value'
    todosArray.push(input.value)
    //on local storage now use 'setItem()' for the key 'todo' the value
    //of the todosArray as a string with the JSON.stringify() Method
    localStorage.setItem('todos', JSON.stringify(todosArray))
    todoMaker(input.value)
    input.value = ''
})



//create a todoMaker function that create 'li' element with the text  user provide.
// from their form and append it to the ul.
var todoMaker = function(text){
    var todo = document.createElement('li')
    todo.textContent = text
    todoList.appendChild(todo)
}


// loop through localStorage when a user First open a page and run the todoMaker function
for(var i= 0; i<storage.length; i++){
    todoMaker(storage[i])
}

// step 4 -- attach an event listener to the 'clear all' button listening for
// a user click
//In the function use a while loop checking to see  whether there
//is an li element as a child of the 'ul' tag in the code block use
//removechild() DOM method to remove that 'li' using the firstChild property
button.addEventListener('click', function(){
    //clear the 'localstorage' with the 'clear()' method
    localStorage.clear()
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})

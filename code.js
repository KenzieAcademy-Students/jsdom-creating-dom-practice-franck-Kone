// METHOD USING HTML AND CSS 
let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

let renderTodoApp = function () {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here
  let app = document.querySelector('#app')
  let newElement = '<h3>Todo List</h3>'

  newElement += '<ul>'
  for (let item of todos) {

    newElement += `<li class = "list-item">${item}</li>`
  }
  newElement += '</ul>'

  app.innerHTML = newElement
}

renderTodoApp();

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
  let app = '<div id="app"><h3>Todo List</h3>'
  
  let unordList = '<ul>'
  for (let item of todos) {
    // let list = document.createElement('li')
    unordList += `<li class = "list-item">${item}</li>`
  }
  unordList += '</ul>'
  app += unordList + '</div>'
  document.write(app)
}

renderTodoApp();

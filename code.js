let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

let renderTodoApp = function() {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here
  // Step One 
let app = document.getElementById('app')
let newElement = document.createElement('h3')
newElement.innerText = 'Todo List'
app.append(newElement)
console.log(app)

  // Step Two
  let unordList = document.createElement('ul')
  for(let item of todos){
    let list = document.createElement('li')
    list.classList.add('list-item')
    list.innerText = item
    unordList.append(list)
  }
  app.append(unordList)

 
}

renderTodoApp();

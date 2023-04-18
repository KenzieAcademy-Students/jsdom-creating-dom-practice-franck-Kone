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
  // Step One 
  let app = document.getElementById('app')
  let newElement = document.createElement('h3')
  newElement.innerText = 'Todo List'
  app.append(newElement)

  // Step Two
  let unordList = document.createElement('ul')
  for (let item of todos) {
    let list = document.createElement('li')
    list.classList.add('list-item')
    list.innerText = item
    unordList.append(list)

    //Step Three begining
    //style the items list
    list.style.width = '200px'
    list.style.height = '200px'
    list.style.backgroundColor = 'lightgray'
    list.style.margin = '10px 30px'
    list.style.padding = '10px'
    list.style.listStyle = 'none'

  }
  app.append(unordList)

    //Step Three Ends
    //center the title 
  newElement.style.textAlign= 'center'

  //organize the items list using their parentNode
  unordList.style.display= "flex"
  unordList.style.flexWrap= 'wrap'
  unordList.style.margin= '0 200px'
  unordList.style.paddingLeft= '55px'
}

renderTodoApp();

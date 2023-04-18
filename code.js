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
    //for the list items
    list.style.width = '200px'
    list.style.height = '200px'
    list.style.backgroundColor = 'lightgray'
    list.style.margin = '0 40px 20px 30px'
    list.style.padding = '10px'
    list.style.listStyle = 'none'

  }
  app.append(unordList)

  //Step Three Ending
  //for the div and this centers the title text
  app.style.display = 'flex'
  app.style.flexDirection = 'column'
  app.style.alignItems = 'center'

  console.log(app.firstElementChild)

  //for the ul
  unordList.style.display = 'flex'
  unordList.style.margin = '15px 200px'
  unordList.style.flexWrap = 'wrap'

  // I added this to center the list items to the title h3
  unordList.style.paddingLeft = '45px'
}

renderTodoApp();

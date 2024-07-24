// ##### BONUS EXCERCISE

let toDoItems: string[] = [];

function addItem(toDoItem: string, atTheBack: boolean) {
  if (atTheBack) {
    toDoItems.push(toDoItem);
  } else {
    toDoItems.unshift(toDoItem);
  }
}

function removeItem(atTheBack: boolean) {
  if (atTheBack) {
    toDoItems.pop();
  } else {
    toDoItems.shift();
  }
}

function addItemAt(toDoItem: string, index: number) {
  toDoItems.splice(index, 0, toDoItem);
}

function removeItemAt(indexToRemove: number) {
  toDoItems.splice(indexToRemove, 1);
}

function printList() {
  console.log(toDoItems);
}

addItem("Laundry", true);
addItem("Fitness", true);
addItem("Grocery shopping", true);
addItem("File tax refund", true);
addItem("Take a nap", true);
addItem("Mop floors", false);

console.log("To-Do-List after adding items:");
printList();

removeItem(false);
console.log("To-Do-List after removing first or last item:");
printList();

addItemAt("Doctors appointment", 1);
console.log("To-Do-Liste after adding item at index 1:");
printList();

removeItemAt(2);
console.log("To-Do-List after removing item at index 2:");
printList();

// --------------------------------------------------

function printPretty() {
  console.log(toDoItems.join(" ** "));
}

printPretty();

// ---------------------------------------------------

// function askForUserInput(){
//     const input = window.prompt("Please add 5 to-do's separated by , :");

//     if (input) {
//         const items = input
//     }
// }

// ##### BONUS EXCERCISE

let toDoItems: string[] = [];

function addItem(toDoItem: string, atTheBack: boolean): void {
  if (atTheBack) {
    toDoItems.push(toDoItem);
  } else {
    toDoItems.unshift(toDoItem);
  }
}

function removeItem(atTheBack: boolean): void {
  if (atTheBack) {
    toDoItems.pop();
  } else {
    toDoItems.shift();
  }
}

function addItemAt(toDoItem: string, index: number): void {
  toDoItems.splice(index, 0, toDoItem);
}

function removeItemAt(indexToRemove: number): void {
  toDoItems.splice(indexToRemove, 1);
}

function printList(): void {
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
// - Bonus Bonus function - added during recap

function askForUserInput(): void {
  let userInput = window.prompt("Please add 5 to-do's separated by , :");

  if (userInput) {
    const itemsArray: string[] = userInput.split(",");
    if (itemsArray.length === 5) {
      toDoItems.push(itemsArray[0].trim());
      toDoItems.push(itemsArray[1].trim());
      toDoItems.push(itemsArray[2].trim());
      toDoItems.push(itemsArray[4].trim());
      toDoItems.push(itemsArray[4].trim());
      console.log(toDoItems);
    } else {
      window.confirm("Please add exactly 5 to-do's");
      window.location.reload();
    }
  } else {
    window.confirm("You didn't add any/enough to-do's!");
    window.location.reload();
  }
}

askForUserInput();

// window.prompt and window.alert are old - but usefull at the moment, as we don't know how to do it better :)

// added window confirm and window reload by searching google

let input = prompt("What would you like to do?");
const todos = ["Collect Books", "Clean Home"];

while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q') {
  if (input.toLowerCase() === 'list') {
    console.log("****");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("****");
  } else if (input.toLowerCase() === 'new') {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added`);
  } else if (input.toLowerCase() === 'delete') {
    const index = parseInt(prompt("Ok, enter the index to delete"));
    if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted: ${deleted[0]}`);
    } else {
      console.log("Unknown Index");
    }
  } else {
    console.log("Invalid command");
  }

  input = prompt("What would you like to do?");
}

console.log("OK, QUIT THE APP!");
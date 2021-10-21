
for (let i=0; i < users.length; i++) {
    document.getElementById("userGrid").innerHTML += "<div>" + users[i].id;
    document.getElementById("userGrid").innerHTML += "<div>" + users[i].name;
    document.getElementById("userGrid").innerHTML += "<div>" + users[i].address.city;
}

function fetchUser() {

    inputID = document.getElementById('inputID').value;

    if (inputID > users.length) {
        alert("Invalid ID");
        return;
    }

    document.getElementById("welcomeMessage").innerHTML = "<h3>Welcome, " + users[inputID-1].name + "</h3>";
    document.getElementById("optionsHidden").setAttribute("id", "options");
}


function fetchToDoAll() {

    document.getElementById("tasksTitle").innerHTML = "<h3>All tasks:</h3>";
    document.getElementById("todoDisplay").innerHTML = "<div>#</div> <div>TASK</div> <div>STATUS</div>";

    for (i = 0; i < todos.length; i++) {
        if (inputID == todos[i].userId) {
            document.getElementById("todoDisplay").innerHTML += "<div>" + todos[i].id;
            document.getElementById("todoDisplay").innerHTML += "<div>" + todos[i].title;
            document.getElementById("todoDisplay").innerHTML += "<div>" + todos[i].completed;
        }
    }
}

function fetchToDoFalse() {

    document.getElementById("tasksTitle").innerHTML = "<h3>All tasks:</h3>";
    document.getElementById("todoDisplay").innerHTML = "<div></div><div>TASK</div><div>STATUS</div>";

    for (i = 0; i < todos.length; i++) {
        if (inputID == todos[i].userId) {
            if (!todos[i].completed) {
                document.getElementById("todoDisplay").innerHTML += "<div>" + todos[i].id;
                document.getElementById("todoDisplay").innerHTML += "<div>" + todos[i].title;
                document.getElementById("todoDisplay").innerHTML += "<div>" + todos[i].completed;
            }
        }
    }
}

var newTaskNum;

function addNewTask() {

    var newTaskTitle = document.getElementById("newTask").value;

    if (!newTaskTitle) {
        alert("Please include task title");
    return;
    }

    console.log(newTaskTitle);

    
    newTaskNumber()
    
    todos.push({
        userId: Number(inputID),
        id: newTaskNum,
        title: newTaskTitle,
        compelted: false,
    });
    console.log(todos);
    fetchToDoAll();
}

function removeTask() {

    var removeTaskNum = document.getElementById('removeTask').value;

    newTaskNumber();

    if (removeTaskNum > newTaskNum-1) {
        alert("Invalid task number")
        return;
    }

    for (i = 0; i < todos.length; i++) {
        if (todos[i].id == removeTaskNum) {
            todos.splice(i, 1);
        }
        if (todos[i].id > removeTaskNum) {
            todos[i].id = Number(todos[i].id) - 1;
        }

    }
    fetchToDoAll();
}




function newTaskNumber() {

    newTaskNum = 1;

    for (i = 0; i < todos.length; i++) {
        if (todos[i].userId == inputID) {
            newTaskNum++;
        }
    }

    console.log(newTaskNum);
}

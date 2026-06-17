// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields!");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter a valid email address!");
        return;
    }

    alert("Form Submitted Successfully!");

    document.getElementById("contactForm").reset();
});


// To-Do List

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="toggleComplete(this)">✔</button>
            <button onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

    updateCounters();
}

// Complete Task

function toggleComplete(button) {
    let li = button.parentElement.parentElement;

    li.classList.toggle("completed");

    updateCounters();
}

// Edit Task

function editTask(button) {
    let task = button.parentElement.parentElement.querySelector("span");

    let newTask = prompt("Edit Task:", task.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        task.innerText = newTask;
    }
}

// Delete Task

function deleteTask(button) {
    button.parentElement.parentElement.remove();

    updateCounters();
}

// Update Counters

function updateCounters() {
    let total = document.querySelectorAll("#taskList li").length;
    let completed = document.querySelectorAll("#taskList li.completed").length;
    let incomplete = total - completed;

    document.getElementById("totalCounter").innerText = total;
    document.getElementById("completedCounter").innerText = completed;
    document.getElementById("incompleteCounter").innerText = incomplete;
}


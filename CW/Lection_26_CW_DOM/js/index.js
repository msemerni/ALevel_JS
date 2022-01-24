class ToDo {
    constructor(container) {
        this.arr = [];
        this.arr = JSON.parse(localStorage.getItem("key"));

        this.mainContainer = document.createElement('div');
        document.getElementById(container).append(this.mainContainer);

        this.title = document.createElement('h2');
        this.title.innerText = "todos";
        this.mainContainer.append(this.title);

        this.inputContainer = document.createElement("div");
        this.inputContainer.className = "inputcontainer";
        this.mainContainer.append(this.inputContainer);

        this.checkBoxChooseAll = document.createElement("span");
        this.checkBoxChooseAll.innerHTML = `vv`;
        this.checkBoxChooseAll.className = "checkboxchooseall";
        this.inputContainer.append(this.checkBoxChooseAll);

        this.input = document.createElement('input');
        this.input.placeholder = "Enter your task here";
        this.input.className = "maininput";
        this.inputContainer.append(this.input);

        this.toDoList = document.createElement("div");
        this.toDoList.id = "todolist";
        this.mainContainer.append(this.toDoList);

        this.footer = document.createElement("div");
        this.footer.className = "footer";
        this.mainContainer.append(this.footer);

        this.totalTaskCount = document.createElement("span");
        this.totalTaskCount.id = "totaltaskcount"
        this.totalTaskCount.innerText = `Total: ${this.arr.length}`;
        this.footer.append(this.totalTaskCount);

        this.btnAllTasks = document.createElement("button");
        this.btnAllTasks.innerText = "All Tasks";
        this.btnAllTasks.classList = "btn btn-outline-success btn-sm";
        this.footer.append(this.btnAllTasks);

        this.btnActiveTasks = document.createElement("button");
        this.btnActiveTasks.innerText = "Active";
        this.btnActiveTasks.classList = "btn btn-outline-secondary btn-sm";
        this.footer.append(this.btnActiveTasks);

        this.btnCompletedTasks = document.createElement("button");
        this.btnCompletedTasks.innerText = "Completed";
        this.btnCompletedTasks.classList = "btn btn-outline-primary btn-sm";
        this.footer.append(this.btnCompletedTasks);

        this.arr.map((task) => new Task({ checkbox: task.checkbox, text: task.text }));
        console.log(this.arr); ////

        this.checkBoxChooseAll.addEventListener('click', () => { 
          let listOfTasks = document.querySelectorAll(".taskcheckbox");
          listOfTasks.forEach((task) => {
              task.checked = "checked"
            });
          console.log("checked All"); ////
          console.log(listOfTasks); ////
            
        })

        this.input.addEventListener('change', () => {
            this.arr = JSON.parse(localStorage.getItem("key"));
            if (this.input.value.trim() !== "") {
                this.arr.push(new Task({ checkbox: false, text: this.input.value }).todo)
            }
            localStorage.setItem("key", JSON.stringify(this.arr))
            this.totalTaskCount.innerText = `Total: ${this.arr.length}`
            this.input.value = ""
            console.log(this.arr); ////
        });

        this.btnAllTasks.addEventListener( "click", () => {this.showAllTasks()});
        this.btnActiveTasks.addEventListener( "click", () => {this.showActiveTasks()});
        this.btnCompletedTasks.addEventListener( "click", () => {this.showCompletedTasks()});
    }

    showAllTasks() {
        document.querySelectorAll(".active").forEach((item) => (item.classList = "taskbox active show"));
        document.querySelectorAll(".completed").forEach((item) => (item.classList = "taskbox completed show"));
        this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length + document.querySelectorAll(".completed").length}`;
    }

    showActiveTasks() {
        document.querySelectorAll(".completed").forEach((item) => (item.classList = "taskbox completed hide"));
        document.querySelectorAll(".active").forEach((item) => (item.classList = "taskbox active show"));
        this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length}`;
    }

    showCompletedTasks() {
        document.querySelectorAll(".active").forEach((item) => (item.classList = "taskbox active hide"));
        document.querySelectorAll(".completed").forEach((item) => (item.classList = "taskbox completed show"));
        this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".completed").length}`;

    }

}

class Task {
    constructor({ checkbox, text }) {
        this.todo = {};
        this.todo.checkbox = checkbox;
        this.todo.text = text;

        this.taskBox = document.createElement('div');
        // this.taskBox.className = "taskbox";
        this.taskBox.classList = "taskbox active";

        this.checkBox = document.createElement('input');
        this.checkBox.className = "taskcheckbox"
        this.checkBox.type = "checkbox";

        this.taskText = document.createElement('span');
        this.taskText.innerHTML = this.todo.text;

        this.btnDeleteTask = document.createElement("span");
        this.btnDeleteTask.className = "deletebutton"
        // this.btnDeleteTask.classList = "btn btn-danger";
        this.btnDeleteTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve" width="15" height="15">
            <g>
                <polygon style="fill:#F78F8F;" points="40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  "/>
                <path style="fill:#C74343;" d="M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z"/>
            </g>
            </svg>`;

        this.taskBox.append(this.checkBox);
        this.taskBox.append(this.taskText);
        this.taskBox.append(this.btnDeleteTask);

        document.getElementById("todolist").append(this.taskBox);

        this.checkBox.addEventListener('change', () => this.changeCheckBox())
        this.btnDeleteTask.addEventListener("click", () => this.deleteTask());

        if (this.todo.checkbox === true) {
            this.checkBox.checked = "checked";
            this.taskBox.classList = "taskbox completed";

          } else {
            this.taskBox.classList = "taskbox active";
          }

    }

    changeCheckBox() {
        if (this.todo.checkbox === false) {
          this.checkBox.checked = "checked";
          let arr = JSON.parse(localStorage.getItem("key"));
          let index = arr.findIndex((item) => this.todo.text === item.text);
          if (index >= 0) {
            arr.splice(index, 1, { ...arr[index], checkbox: true });
          }
          localStorage.setItem("key", JSON.stringify(arr));
          this.todo.checkbox = true;
          this.taskBox.classList = "taskbox completed";
        } else {
          let arr = JSON.parse(localStorage.getItem("key"));
          let index = arr.findIndex((item) => this.todo.text === item.text);
          if (index >= 0) {
            arr.splice(index, 1, { ...arr[index], checkbox: false });
          }
          localStorage.setItem("key", JSON.stringify(arr));
          this.todo.checkbox = false;
          this.taskBox.classList = "taskbox active";
        }
      }

    deleteTask() {
        console.log("deleted"); ////
        document.getElementById("todolist").removeChild(this.taskBox);
        let arr = JSON.parse(localStorage.getItem("key"));
        let index = arr.findIndex((task) => this.todo.text === task.text);
        if (index >= 0) {
            arr.splice(index, 1)
        }
        localStorage.setItem("key", JSON.stringify(arr));
        let totalTaskCount = document.getElementById("totaltaskcount");
        totalTaskCount.innerText = `Total: ${arr.length}`;
        console.log(arr); ////
    }

}

let toDo = new ToDo("container");


///////////////// генератор ID //////////////////////
// let idGenerator = () => {
//     let i = 1;
//     return () => i++
// }
// let generator = idGenerator();
// generator();
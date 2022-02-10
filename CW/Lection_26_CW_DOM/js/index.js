class ToDo {
    constructor(container) {
        this.arr = [];

        this.mainContainer = document.createElement('div');
        document.getElementById(container).append(this.mainContainer);

        this.title = document.createElement('h1');
        this.title.innerText = "todos";
        this.mainContainer.append(this.title);

        this.inputContainer = document.createElement("div");
        this.inputContainer.className = "inputcontainer";
        this.mainContainer.append(this.inputContainer);

        this.checkBoxChooseAll = document.createElement("label");
        this.checkBoxChooseAll.innerHTML = `+`;
        this.checkBoxChooseAll.id = `checkboxchooseall`;
        this.checkBoxChooseAll.className = "checkboxchooseall";
        this.checkBoxChooseAll.htmlFor = "checkboxchooseallinvisible"
        this.inputContainer.append(this.checkBoxChooseAll);

        this.checkBoxChooseAllInvisible = document.createElement("input");
        this.checkBoxChooseAllInvisible.type = "checkbox";
        this.checkBoxChooseAllInvisible.id = "checkboxchooseallinvisible";
        this.checkBoxChooseAllInvisible.checked = false;
        this.inputContainer.append(this.checkBoxChooseAllInvisible);

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
        this.totalTaskCount.id = "totaltaskcount";
        this.totalTaskCount.innerText = `Total: 0`;
        this.footer.append(this.totalTaskCount);

        this.btnAllTasks = document.createElement("button");
        this.btnAllTasks.innerText = "All Tasks";
        this.btnAllTasks.classList = "btn btn-outline-primary btn-sm";
        this.footer.append(this.btnAllTasks);

        this.btnActiveTasks = document.createElement("button");
        this.btnActiveTasks.innerText = "Active";
        this.btnActiveTasks.classList = "btn btn-outline-danger btn-sm";
        this.footer.append(this.btnActiveTasks);

        this.btnCompletedTasks = document.createElement("button");
        this.btnCompletedTasks.innerText = "Completed";
        this.btnCompletedTasks.classList = "btn btn-outline-success btn-sm";
        this.footer.append(this.btnCompletedTasks);

        this.btnDeleteCompletedTasks = document.createElement("button");
        this.btnDeleteCompletedTasks.id = "btndeletecompletedtasks";
        this.btnDeleteCompletedTasks.title = "Delete all Completed tasks";
        this.btnDeleteCompletedTasks.classList = "btn btn-secondary disabled btndeletecompletedtasks";
        this.btnDeleteCompletedTasks.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;
        this.footer.append(this.btnDeleteCompletedTasks);

        if (localStorage.getItem("key") !== null) {
            this.arr = JSON.parse(localStorage.getItem("key"));
            this.arr.map((task) => new Task({ checkbox: task.checkbox, text: task.text }));
            this.totalTaskCount.innerText = `Total: ${this.arr.length}`;
        }

        history.pushState(null, null, window.location.href = `/#/all`);

        this.checkBoxChooseAllInvisible.addEventListener('change', () => {
            let listOfTasks = document.querySelectorAll(".taskcheckbox");

            if (this.checkBoxChooseAllInvisible.checked === true && this.arr.length > 0) {
                listOfTasks.forEach((task) => {
                    if (task.checked === false) {
                        task.click();
                        this.checkBoxChooseAll.innerHTML = `-`;
                    }
                });
            } else {
                listOfTasks.forEach((task) => { task.click() });
                this.checkBoxChooseAllInvisible.checked = false;
                this.checkBoxChooseAll.innerHTML = `+`;
            }
        })

        this.input.addEventListener('change', () => {

            if (localStorage.getItem("key") !== null) {
                this.arr = JSON.parse(localStorage.getItem("key"));
            } else {
                this.arr = [];
            }

            if (this.input.value.trim() !== "") {
                this.arr.push(new Task({ checkbox: false, text: this.input.value }).todo)
            }
            localStorage.setItem("key", JSON.stringify(this.arr));
            this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length + document.querySelectorAll(".completed").length}`;
            this.input.value = "";
            this.printTotal();
        });

        this.btnDeleteCompletedTasks.addEventListener("click", () => {
            document.querySelectorAll(".completed").forEach
                ((item) => document.getElementById("todolist").removeChild(item));
            let arr = JSON.parse(localStorage.getItem("key"));
            arr = arr.filter((item) => item.checkbox !== true);
            localStorage.setItem("key", JSON.stringify(arr));
            this.printTotal ();
        })

        this.btnAllTasks.addEventListener("click", () => { this.showAllTasks() });
        this.btnActiveTasks.addEventListener("click", () => { this.showActiveTasks() });
        this.btnCompletedTasks.addEventListener("click", () => { this.showCompletedTasks() });

        this.enableDisableBtnDeleteCompletedTasks();
    }

    printTotal () {
        if (document.location.href.indexOf("all") >= 0) {
            this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length + document.querySelectorAll(".completed").length}`;
        }
        if (document.location.href.indexOf("active") >= 0) {
            this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length}`;
        }
        if (document.location.href.indexOf("completed") >= 0) {
            this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".completed").length}`;
        }
    }

    enableDisableBtnDeleteCompletedTasks() {
        let anyIsChecked = document.querySelectorAll(".completed");
        if (anyIsChecked.length > 0) {
            this.btnDeleteCompletedTasks.classList = "btn btn-danger btndeletecompletedtasks";
        }
        if (document.location.href.indexOf("active") >= 0) {
            this.btnDeleteCompletedTasks.classList = "btn btn-secondary disabled btndeletecompletedtasks";
        }
    }

    showAllTasks() {
        let completedTasks = document.querySelectorAll(".completed");
        document.querySelectorAll(".active").forEach((item) => (item.classList = "taskbox active show"));
        document.querySelectorAll(".completed").forEach((item) => (item.classList = "taskbox completed show"));
        this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length + document.querySelectorAll(".completed").length}`;
        history.pushState(null, null, window.location.href = `/#/all`);
        if (completedTasks.length > 0) {
            this.btnDeleteCompletedTasks.classList = "btn btn-danger btndeletecompletedtasks"; ////
        }
        this.printTotal();
    }

    showActiveTasks() { ////галок нет
        document.querySelectorAll(".completed").forEach((item) => (item.classList = "taskbox completed hide"));
        document.querySelectorAll(".active").forEach((item) => (item.classList = "taskbox active show"));
        this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length}`;
        history.pushState(null, null, window.location.href = `/#/active`);
        this.btnDeleteCompletedTasks.classList = "btn btn-secondary disabled btndeletecompletedtasks"; ////
        this.printTotal();
    }

    showCompletedTasks() { ////галки стоят / спрятать активные(не выполненные)
        let completedTasks = document.querySelectorAll(".completed");
        document.querySelectorAll(".active").forEach((item) => (item.classList = "taskbox active hide"));
        document.querySelectorAll(".completed").forEach((item) => (item.classList = "taskbox completed show"));
        this.totalTaskCount.innerText = `Total: ${document.querySelectorAll(".completed").length}`;
        history.pushState(null, null, window.location.href = `/#/completed`);
        if (completedTasks.length > 0) {
            this.btnDeleteCompletedTasks.classList = "btn btn-danger btndeletecompletedtasks"; ////
        }
        this.printTotal();
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

        this.checkBoxBox = document.createElement("label");
        this.checkBoxBox.className = "checkboxbox";

        this.checkBox = document.createElement('input');
        this.checkBox.id = "taskcheckbox"
        this.checkBox.className = "taskcheckbox"
        this.checkBox.type = "checkbox";
        this.checkBoxBox.append(this.checkBox);

        this.fakeCheckBox = document.createElement('span');
        this.fakeCheckBox.className = "fakecheckbox";
        this.fakeCheckBox.htmlFor = "taskcheckbox";
        this.checkBoxBox.append(this.fakeCheckBox);

        this.taskText = document.createElement('span');
        this.taskText.className = "tasktext"
        this.taskText.innerHTML = this.todo.text;

        this.btnDeleteTask = document.createElement("span");
        this.btnDeleteTask.className = "deletebutton"
        this.btnDeleteTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve" width="15" height="15">
            <g>
                <polygon style="fill:#F78F8F;" points="40,49.007 15.714,73.293 6.707,64.286 30.993,40 6.707,15.714 15.714,6.707 40,30.993    64.286,6.707 73.293,15.714 49.007,40 73.293,64.286 64.286,73.293  "/>
                <path style="fill:#C74343;" d="M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40   l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40   l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74   L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z"/>
            </g>
            </svg>`;

        this.taskBox.append(this.checkBoxBox);
        this.taskBox.append(this.taskText);
        this.taskBox.append(this.btnDeleteTask);

        document.getElementById("todolist").prepend(this.taskBox);

        this.checkBox.addEventListener('change', () => this.changeCheckBox())
        this.btnDeleteTask.addEventListener("click", () => this.deleteTask());

        if (this.todo.checkbox === true) {
            this.checkBox.checked = "checked";
            this.taskBox.classList = "taskbox completed";

        } else {
            this.taskBox.classList = "taskbox active";
        }
    }

    enableDisableBtnDeleteCompletedTasks() {
        let btnDeleteCompletedTasks = document.getElementById("btndeletecompletedtasks");

        let anyIsChecked = document.querySelectorAll(".completed");
        if (anyIsChecked.length > 0) {
            btnDeleteCompletedTasks.classList = "btn btn-danger btndeletecompletedtasks";
        } else {
            btnDeleteCompletedTasks.classList = "btn btn-secondary disabled btndeletecompletedtasks";
        }

        if (document.location.href.indexOf("active") >= 0) {
            btnDeleteCompletedTasks.classList = "btn btn-secondary disabled btndeletecompletedtasks";
        }
    }

    printTotal () {
        let totalTaskCount = document.getElementById("totaltaskcount");
        if (document.location.href.indexOf("all") >= 0) {
            totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length + document.querySelectorAll(".completed").length}`;
        }
        if (document.location.href.indexOf("active") >= 0) {
            totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length}`;
        }
        if (document.location.href.indexOf("completed") >= 0) {
            totalTaskCount.innerText = `Total: ${document.querySelectorAll(".completed").length}`;
        }
    }

    changeCheckBox() {
        let totalTaskCount = document.getElementById("totaltaskcount");
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

            totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length}`;
            this.enableDisableBtnDeleteCompletedTasks();

            if (document.location.href.indexOf("active") !== -1) {
                this.taskBox.classList = "taskbox completed hide";
            }
            if (document.location.href.indexOf("all") >= 0) {
                totalTaskCount.innerText = `Total: ${document.querySelectorAll(".active").length + document.querySelectorAll(".completed").length}`;
            }
            this.printTotal();
        } else {
            let arr = JSON.parse(localStorage.getItem("key"));
            let index = arr.findIndex((item) => this.todo.text === item.text);

            if (index >= 0) {
                arr.splice(index, 1, { ...arr[index], checkbox: false });
            }
            localStorage.setItem("key", JSON.stringify(arr));
            this.todo.checkbox = false;
            this.taskBox.classList = "taskbox active";

            let checkBoxChooseAllInvisible = document.getElementById("checkboxchooseallinvisible");
            let checkBoxChooseAll = document.getElementById("checkboxchooseall");
            checkBoxChooseAll.innerHTML = "+";
            checkBoxChooseAllInvisible.checked = false;
            this.enableDisableBtnDeleteCompletedTasks();
            if (document.location.href.indexOf("completed") !== -1) {
                this.taskBox.classList = "taskbox active hide";
            }
            totalTaskCount.innerText = `Total: ${document.querySelectorAll(".completed").length}`;
            this.printTotal();
        }
    }

    deleteTask() {
        document.getElementById("todolist").removeChild(this.taskBox);
        let arr = JSON.parse(localStorage.getItem("key"));
        let index = arr.findIndex((task) => this.todo.text === task.text);
        if (index >= 0) {
            arr.splice(index, 1);
            let totalTaskCount = document.getElementById("totaltaskcount");
            totalTaskCount.innerText = `Total: ${arr.length}`;
            localStorage.setItem("key", JSON.stringify(arr));
        }
        this.printTotal();
    }
}

new ToDo("container");


///////////////// генератор ID //////////////////////
// let idGenerator = () => {
//     let i = 1;
//     return () => i++
// }
// let generator = idGenerator();
// generator();

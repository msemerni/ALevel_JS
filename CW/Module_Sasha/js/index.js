class TodoList {
    constructor() {
      this.arr = [];
  
      this.container = document.createElement("div");
      this.container.id = "container";
      document.body.append(this.container);
  
      this.titleContainer = document.createElement("div");
      this.titleContainer.id = "titleContainer";
      this.container.append(this.titleContainer);
  
      this.title = document.createElement("h1");
      this.title.classList = "titleTodo";
      this.title.innerText = "TODOLIST";
      this.titleContainer.append(this.title);
  
      this.inputTodo = document.createElement("input");
      this.inputTodo.id = "inputTodo";
      this.inputTodo.placeholder = "your plans?";
      this.container.append(this.inputTodo);
  
      this.listTodo = document.createElement("div");
      this.listTodo.id = "listTodo";
      this.container.append(this.listTodo);
  
      if (localStorage.getItem("todolist") != undefined) {
        this.arr = JSON.parse(localStorage.getItem("todolist"));
        //console.log(this.arr)
        this.arr.forEach(
          (item) => new Todo({ text: item.text, checkbox: item.checkbox })
        );
        console.log(this.arr);
      }
      // console.log(this.arr)
  
      this.inputTodo.addEventListener("change", () => {
        //    let i = this.arr.length
        //    this.arr[i] = new Todo(this.inputTodo.value).todo
  
        //  console.log(this.arr)
        //  this.inputTodo.value = ''
        //  localStorage.setItem('todolist',JSON.stringify(this.arr))
  
        //new Todo(this.inputTodo.value)
        let a = this.arr.push(
          new Todo({ text: this.inputTodo.value, checkbox: false }).todo
        );
        ///console.log(this.arr)
        this.inputTodo.value = "";
        localStorage.setItem("todolist", JSON.stringify(this.arr));
      });
  
      this.containerButtons = document.createElement("div");
      this.containerButtons.classList = "containerButtons";
      this.container.append(this.containerButtons);
  
      this.btnAll = document.createElement("button");
      this.btnAll.id = "btnAll";
      this.btnAll.innerText = "ALL";
      this.btnAll.innerHTML = `all<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
      </svg>`;
      this.btnAll.classList = "btn btn-outline-success";
      this.containerButtons.append(this.btnAll);
  
      this.btnAll.onclick = () => {
        this.filterAll();
      };
  
      this.btnFinish = document.createElement("button");
      this.btnFinish.id = "btnFinish";
      this.btnFinish.innerHTML = `comleted <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
      </svg>`;
      this.btnFinish.classList = "btn btn-outline-success";
      this.containerButtons.append(this.btnFinish);
  
      this.btnFinish.onclick = () => {
        this.filterFinish();
      };
  
      this.btnUnfinish = document.createElement("button");
      this.btnUnfinish.id = "btnUnfinish";
      this.btnUnfinish.innerHTML = `active <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
      </svg>`;
      this.btnUnfinish.classList = "btn btn-outline-success";
      this.containerButtons.append(this.btnUnfinish);
  
      this.btnUnfinish.onclick = () => {
        this.filterActive();
        //localStorage.setItem('todolist', 'her')
      };
    }
  
    filterFinish() {
      document
        .querySelectorAll(".unfinished")
        .forEach((item) => (item.classList = "todoContainer unfinished hide"));
    }
    filterActive() {
      document
        .querySelectorAll(".finished")
        .forEach((item) => (item.classList = "todoContainer finished hide"));
    }
    filterAll() {
      document
        .querySelectorAll(".unfinished")
        .forEach((item) => (item.classList = "todoContainer unfinished"));
      document
        .querySelectorAll(".finished")
        .forEach((item) => (item.classList = "todoContainer finished"));
    }
  }
  
  class Todo {
    constructor({ text, checkbox }) {
      this.todo = {};
      this.todo.text = text;
      this.todo.checkbox = checkbox;
      
      this.todoContainer = document.createElement("div");
      this.todoContainer.classList = "todoContainer unfinished";
  
      this.checkbox = document.createElement("input");
      this.checkbox.type = "checkbox";
      this.checkbox.classList = "form-check-input";
      //this.checkbox.checked = 'checked'
      this.todoText = document.createElement("div");
      this.todoText.classList = "todoText";
      this.mainText = document.createElement("p");
      this.mainText.classList = "mainText unfinish";
      this.todoText.append(this.mainText);
      this.mainText.innerHTML = this.todo.text;
      this.btnDelet = document.createElement("button");
      this.btnDelet.classList = "btn btn-danger";
      this.btnDelet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>`;
  
      this.todoContainer.append(this.checkbox);
      this.todoContainer.append(this.todoText);
      this.todoContainer.append(this.btnDelet);
  
      document.getElementById("listTodo").append(this.todoContainer);
  
      if (this.todo.checkbox === true) {
        this.mainText.classList = "mainText finish";
        this.todoContainer.classList = "todoContainer finished";
        this.checkbox.checked = "checked";
      } else {
        this.mainText.classList = "mainText unfinish";
        this.todoContainer.classList = "todoContainer unfinished";
      }
  
      this.btnDelet.addEventListener("click", () => {
        this.todoDel();
      });
      this.checkbox.addEventListener("click", () => {
        this.todoFinishUnfinish();
      });
    }
  
    todoDel() {
      // let item = this.btnDelet.parentNode
      //     let list = item.parentNode
      //     list.removeChild(item)
  
      document.getElementById("listTodo").removeChild(this.todoContainer);
      let arr = JSON.parse(localStorage.getItem("todolist"));
      let ind = arr.findIndex((item) => this.todo.text == item.text);
      if (ind >= 0) {
        arr.splice(ind, 1);
      }
      localStorage.setItem("todolist", JSON.stringify(arr));
    }
  
    todoFinishUnfinish() {
      if (this.todo.checkbox === false) {
        this.checkbox.checked = "checked";
        let arr = JSON.parse(localStorage.getItem("todolist"));
        let ind = arr.findIndex((item) => this.todo.text == item.text);
        if (ind >= 0) {
          arr.splice(ind, 1, { ...arr[ind], checkbox: true });
        }
        localStorage.setItem("todolist", JSON.stringify(arr));
        this.mainText.classList = "mainText finish";
        this.todoContainer.classList = "todoContainer finished";
        this.todo.checkbox = true;
  
        console.log(this.todo);
      } else {
        let arr = JSON.parse(localStorage.getItem("todolist"));
        let ind = arr.findIndex((item) => this.todo.text == item.text);
        if (ind >= 0) {
          arr.splice(ind, 1, { ...arr[ind], checkbox: false });
        }
        localStorage.setItem("todolist", JSON.stringify(arr));
        this.mainText.classList = "mainText unfinish";
        this.todoContainer.classList = "todoContainer unfinished";
        this.todo.checkbox = false;
  
        console.log(this.todo);
      }
    }
  }
  
  let todoList = new TodoList();
  
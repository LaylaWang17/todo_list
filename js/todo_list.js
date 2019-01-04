window.onload = function () {
  let ul = document.getElementById("list");

  createLocalStorage();

  let content = JSON.parse(localStorage.getItem("todoList"));
  for (let i = 0; i < content.length; i++) {
    let li = document.createElement("li");
    let del = document.createElement("div");
    li.innerHTML = content[i];
    del.innerHTML = "DELETE";
    del.classList.add("delete_btn");
    ul.appendChild(li);
    li.appendChild(del);

    li.addEventListener("click", () => {
      li.classList.add("selected");
    });
  }

  document.getElementById("count").innerHTML = 'Left items: ' + content.length;

  document.getElementById("input").focus();
}

function addATodo(event) {
  if (event.keyCode === 13) {
    let input = document.getElementById("input").value;
    addContent(input);
    showList(input)
    clearInputBox();
  }
}

function createLocalStorage() {
  if (!localStorage.todoList) {
    localStorage.setItem("todoList", JSON.stringify([]));
  }
}

function addContent(input) {
  if (input) {
    let list = JSON.parse(localStorage.getItem("todoList"));
    list.push(input);
    localStorage.setItem("todoList", JSON.stringify(list));
    document.getElementById("count").innerHTML = 'Left items: ' + list.length;
  }
}

function clearInputBox() {
  if (document.getElementById("input").value) {
    document.getElementById("input").value = "";
  }
}

function showList(input) {
  let ul = document.getElementById("list");
  let li = document.createElement("li");
  let del = document.createElement("div");

  li.innerHTML = input;
  del.innerHTML = "DELETE";
  del.classList.add("delete_btn");

  ul.appendChild(li);
  li.appendChild(del);

  li.addEventListener("click", () => {
    li.classList.add("selected");
  });
}
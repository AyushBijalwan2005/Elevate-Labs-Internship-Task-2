let btn1 = document.querySelector("#add");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn1.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let btn2 = document.createElement("button");
    btn2.classList.add("delete");
    btn2.innerText = "Delete Task";

    item.append(btn2);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        listItem.remove();
    } else if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});

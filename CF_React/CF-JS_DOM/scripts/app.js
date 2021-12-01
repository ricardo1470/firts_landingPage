#!/usr/bin/node

document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM loaded');

    // search for element by id
    const title = document.getElementById('title');
    //console.log(title);
    // change the text of the element
    title.innerHTML = "Couse";

    // search for element by id
    const description = document.getElementById('description');
    //console.log(description);
    // change the test of the element
    description.innerHTML = "List Courses";

    // search for element by class
    const items = document.getElementsByClassName("list-group-item")
    for (var i = 0; i < items.length; i++) {
        let element = items[i];
        console.log(element);
    }

    // search for element by tag
    const items2 = document.getElementsByTagName("li")
    for (var i = 0; i < items2.length; i++) {
        if (i % 2 == 0) {
            let element = items2[i];
            element.style.background = "#f2f2f2";
        }
        //console.log(element);
    };

    // search for the first element whit the ID "title"
    const element = document.querySelector("#title");
    // search for the first element with the class name "list-group-item"
    const element2 = document.querySelector(".list-group-item");
    // search for the first element with the tag name "li"
    const element3 = document.querySelector("li");
    // search for the first element with the tag name "li" and the class name "list-group"
    const element4 = document.querySelector("div.row > ul.list-group > li");
    // search for the first element with the tag name "li"
    const element5 = document.querySelectorAll("li:nth-child(even)");
    for (var i = 0; i < element5.length; i++) {
    let element = element5[i];
    element.style.background = "blue";
    };

    // search childs in the element
    const list = document.querySelector("ul");
    // count the childs
    console.log(list.childElementCount);
    // view the children
    console.log(list.children);
    // view the first child
    console.log(list.firstElementChild.innerHTML);
    // view the last child
    console.log(list.lastElementChild.innerHTML);

    // change the text of the first child
    list.firstElementChild.innerHTML = "C++";
    // change the text of the last child
    list.lastElementChild.innerHTML = "Go";

    // search for the parent of the element
    const element6 = document.querySelector("div.row > ul.list-group > li");
    // view the parent
    console.log(element6.parentElement);
    // view the parent of the parent
    console.log(element6.parentElement.parentElement);
    // view the brother
    console.log(element6.nextElementSibling);
    // view the brother of the brother
    console.log(element6.nextElementSibling.nextElementSibling);
    // view the last brother
    const lastBrother = document.getElementById("last-brother");
    console.log(lastBrother.previousElementSibling);

    // view node type of the element
    const element7 = document.getElementById("first-course");
    console.log(element7.childElementCount);
    console.log(element7.childNodes.length);
    console.log(element7.childNodes);


    const button = document.querySelector(".btn.btn-primary");

    // one click
    /*button.addEventListener("click", function () {
        console.log("click desde un boton usando JS");
    });
    // two clicks
    button.addEventListener("dblclick", function () {
        console.log("doble click desde un boton usando JS");
    });*/

    button.addEventListener("click", function (e) {

        console.log(e)

        if(title.style.display != 'none') {
            title.style.display = 'none';
            description.style.display = 'none';
            button.textContent = 'Show';
        } else {
            title.style.display = 'block';
            description.style.display = 'block';
            button.textContent = 'Hide';
        }
    });

    // change the color of the button
    button.addEventListener("mouseenter", function () {
        this.className = "btn btn-danger";
        console.log("mouse enter");
    });

    // change the color of the button
    button.addEventListener("mouseout", function () {
        this.className = "btn btn-primary";
        console.log("mouse out");
    });

    setTimeout(function () {
        console.log("este es un mensaje desde una funcion setTimeout de 3 segundos");
    },3000);

    setTimeout(function(p1, p2, p3) {
        console.log(p1);
        console.log(p2);
        console.log(p3);
    },3000, "este es un mensaje desde un setTimeout con multiples argumentos", "estos argumentos se le deben pasar despues de establecer el tiempo", "soy otro argumento que se le pasa despues de establecer el tiempo");

    const input = document.querySelector("input");

    input.addEventListener("keydown", function (e) {
        console.log("se presiono la tecla: " + e.key + " y su codigo ascii es: " + e.keyCode);
    });

    const form = document.querySelector("course-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let title = document.getElementById("title-form").value;
        let description = document.getElementById("description-form").value;

        console.log(title);
        console.log(description);
    });

    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", function () {
        console.log("se a usado el checkbox");
    });

});

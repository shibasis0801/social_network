/**
 * Horrible Spaghetti Code right now.
 * Have discovered modules
 * 
 * Create a button object with functions to create submit button , close button
 * 
 * Create similar for list item and input group
 * 
 * Then use this file to orchestrate creation.
 * 
 * :D :D
 * 
 * Loving JavaScript.
 * 
 * Will TypeScript be a good option? 
 * Looks like Kotlin, lets see.
 */

const todoList = document.getElementById("list-todo");
const buttonAddItem = document.getElementById("button-add-item");

import { View } from './view.mjs'

todoList.appendChild(
    View.li("Hello Modular World")
);

let counter = 0;

buttonAddItem.addEventListener('click', event => {
    const listItem = document.createElement('li');
    listItem.className = "list-group-item";
    
    const id = counter;
    const onSubmit = (event) => {
        const editText = document.getElementById(`edit-text-${id}`);
        const value = editText.value;

        if (value === "") {
            alert("Enter something");
        }
        else {
            todoList.removeChild(document.getElementById(`list-item-${id}`));
            todoList.appendChild(createListItem(editText.value));
        }
    }

    const onCancel = () => {
        todoList.removeChild(document.getElementById(`list-item-${id}`));
    }

    listItem.id = `list-item-${id}`;

    listItem.appendChild(createInputElement(id, onSubmit, onCancel));

    todoList.appendChild(listItem);

    counter += 1;
}) 

function createListItem(message) {
    const listItem = document.createElement('li');
    listItem.className = "list-group-item";
    
    const textNode = document.createTextNode(message);
    listItem.appendChild(textNode);

    const button = document.createElement('button');
    button.textContent = "×";
    button.className = 'close';

    button.onclick = (event) => {
        todoList.removeChild(button.parentNode)
    } 

    listItem.onclick = (event) => {
        const inputElement = createInputElement(100, (event) => console.log(event), () => console.log("Cancelled"), "Hellow Baby");
        todoList.removeChild(listItem);
        todoList.appendChild(inputElement);
    }

    listItem.appendChild(button);

    return listItem;
}

function createInputElement(id, onSubmit, onCancel, text) {

    const outerDiv = document.createElement('div');
    outerDiv.classList.add("input-group", "mb-3");

    const editText = document.createElement('input');
    editText.id = `edit-text-${id}`
    editText.required = true;
    editText.type = "text";
    editText.className = "form-control"
    editText.placeholder = "Enter Todo Item";
    if ( text !== null )
        editText.value = text;

    const innerDiv = document.createElement('div');
    innerDiv.className = "input-group-append";

    const submitButton = document.createElement('button');
    submitButton.classList.add("btn", "btn-outline-primary");
    submitButton.type = "button";
    submitButton.innerText = "Submit"
    submitButton.onclick = onSubmit;

    const cancelButton = document.createElement('button');
    cancelButton.classList.add("btn", "btn-outline-danger");
    cancelButton.type = "button";
    cancelButton.innerText = "Cancel"
    cancelButton.onclick = onCancel;

    innerDiv.appendChild(submitButton);
    innerDiv.appendChild(cancelButton);
    outerDiv.appendChild(editText);
    outerDiv.appendChild(innerDiv);

    return outerDiv;
}

document.getElementById('button-test-api')
    .addEventListener('click', event => {

        const fakeMemberPromise = count => new Promise((resolves, rejects) => {

            const api = `https://api.randomuser.me/?nat=IN&results=${count}`;
            const request = new XMLHttpRequest();
            request.open('GET', api);
            request.onload = () => {
                (request.status === 200) ? 
                    resolves(JSON.parse(request.response).results) : 
                    reject(Error(request.statusText));
            };
            request.onerror = (error) => rejects(error);
            request.send();

        });

        fakeMemberPromise(5).then(
                members => console.log(members),
                error => console.error(error)
        );

    });
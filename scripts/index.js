'use strict';
import { getRandomUsers } from  './randomuser.js';
// import { View } from './bootstrapViews';

let View = {
    text(content) {
        return document.createTextNode(content);
    },
    
    ul(id, orientation = "vertical") {
        const ul = document.createElement('ul');
        ul.id = id;
        ul.classList.add("list-group");
        if (orientation === "horizontal")
            ul.classList.add("list-group-horizontal");
        return ul;
    },

    li(id, type = "primary") {
        const li = document.createElement('li');
        li.id = id;
        li.classList.add("list-group-item");
        return li;
    }
}

const buttonFakeData = document.getElementById('buttonFakeData');
const inputCount = document.getElementById('inputCount');

buttonFakeData.addEventListener('click', event => {
    event.preventDefault();
    console.log(inputCount.value);
});


const divList = document.getElementById('divList');
const list = View.ul("listFakePeople");
const listItem = View.li("listItem");
const textNode = View.text('Message');
listItem.appendChild(textNode);
list.appendChild(listItem);
divList.appendChild(list);
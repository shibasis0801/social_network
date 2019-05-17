'use strict';
import { getRandomUsers } from  './randomuser.js';
// import { View } from './bootstrapViews';


// let View = {
//     usage(id, contents, extra_parameters) {
//         console.log("All functions are of the form, View.tagName(id, contents, extra_parameters)");
//     },

//     text(content) {
//         return document.createTextNode(content);
//     },
    
//     ul(id, listItems = [], orientation = "vertical") {
//         const ul = document.createElement('ul');

//         ul.id = id;
//         ul.classList.add("list-group");
        
//         if (orientation === "horizontal")
//             ul.classList.add("list-group-horizontal");
        
//         if (Array.isArray(listItems)) {
//             listItems.forEach(listItem => ul.appendChild(listItem));
//         } 
//         else {
//             throw new Error("listItems argument must be an array");
//         }

//         return ul;
//     },

//     li(id, innerHTML, type = "primary") {
//         const li = document.createElement('li');
//         li.id = id;
//         li.appendChild(innerHTML);
//         li.classList.add("list-group-item");
//         return li;
//     }
// }

class BootStrapView {
    constructor(tag, attributes = {}, children = []) {
        
        this.element = document.createElement(tag);

        Object.entries(attributes)
            .forEach(item => {
                let [key, value] = item;
                    if (key === "class") {
                        const classes = value.split(' ');
                        classes.forEach(className => 
                            this.element.classList.add(className)
                        );
                    }
                    else {
                        this.element[key] = value;
                    }
        })
        
        if (Array.isArray(listItems)) {
            listItems.forEach(listItem => this.element.appendChild(listItem));
        } 
        else {
            throw new Error("listItems argument must be an array");
        }
    }
}

function preprocessTag(tag) {
    let final = tag;

    switch (tag) {
        case 'alert' : final = 'div'; break;
    }
    
    return final;
}

function bootstrap(tag, modifier, element) {
    const styles = {
        'ul' : 'list-group',
        'li' : 'list-group-item',
        'button' : `btn btn-${modifier}`,
        'alert' : `alert alert-${modifier}`,
    }

    let classes = styles[tag].split(' ');
    classes.forEach(className => 
        element.classList.add(className)
    );

    return element;
}

function html(tag, attributes = {}, children = [], modifier = "primary", framework = "bootstrap") {
    // Usage html('li', {}, text(Hello), "primary")
    // Later create Tag wise, like button("Hello", ["primary"])    

    let element = document.createElement(preprocessTag(tag));
    
    Object.entries(attributes)
        .forEach(item => {
            let [key, value] = item;
                if (key === "class") {
                    const classes = value.split(' ');
                    classes.forEach(className => 
                        element.classList.add(className)
                    );
                }
                else {
                    element[key] = value;
                }
    })
    
    if (Array.isArray(children)) {
        children.forEach(child => element.appendChild(child));
    } 
    else {
        throw new Error("listItems argument must be an array");
    }

    if (framework === "bootstrap") {
        element = bootstrap(tag, modifier, element); 
    } 
    else if (framework === "bulma") {
        console.log("To Be Implemented")
    }
    else {
        console.log("Vanilla HTML");
    }

    return element;
}

function text(content) { return document.createTextNode(content); }


const buttonFakeData = document.getElementById('buttonFakeData');
const inputCount = document.getElementById('inputCount');

const divList = document.getElementById('divList');

divList.appendChild(
    html('ul', { id : "listFakePeople" }, [
        html('li', { id : "listItem1" }, [ text("Hello Brother") ])
    ])
)            

buttonFakeData.addEventListener('click', event => {
    
    event.preventDefault();
    getRandomUsers(inputCount.value)
        .then(people => {
            
            const list = document.getElementById("listFakePeople");
            if (list !== null)
                divList.removeChild(list);
            
            const fakePeopleNames = people.map(person => Object.values(person.name).join(' '));

            console.log(fakePeopleNames);

            divList.appendChild(
                html('ul', { id : "listFakePeople" }, 
                fakePeopleNames.map(name => 
                        html('li', {}, [ text(name) ])
                ))
            );
        })
}); 



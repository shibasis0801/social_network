'use strict';
import { getRandomUsers } from  './randomuser.js';
import { html, text } from './view.js'

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

    // See if Rx can further simplify this.
    getRandomUsers(inputCount.value)
        
        .then(people => people.map(
            person => Object.values(person.name).join(' ')))

        .then(names => names.map(
            name => html('li', {}, [ text(name) ])))
        
        .then(listItems => html('ul', { id : "listFakePeople"}, listItems))
        
        .then(fakePeopleList => {
            const list = document.getElementById("listFakePeople");
            if (list !== null)
                divList.removeChild(list);
            
            divList.appendChild(fakePeopleList);
        })
})

// buttonFakeData.addEventListener('click', event => {
    
//     event.preventDefault();
//     getRandomUsers(inputCount.value)
//         .then(people => {
            
//             const list = document.getElementById("listFakePeople");
//             if (list !== null)
//                 divList.removeChild(list);
            
//             const fakePeopleNames = people.map(person => Object.values(person.name).join(' '));

//             console.log(fakePeopleNames);

//             divList.appendChild(
//                 html('ul', { id : "listFakePeople" }, 
//                 fakePeopleNames.map(name => 
//                         html('li', {}, [ text(name) ])
//                 ))
//             );
//         })
// }); 



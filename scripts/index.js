'use strict';
import { getRandomUsers } from  './randomuser.js';
import { html, text } from './view.js'
import { Util } from './util.js'
import { DOM } from './dom.js'

const buttonFakeData = document.getElementById('buttonFakeData');
const inputCount = document.getElementById('inputCount');

const divList = document.getElementById('divList');
divList.appendChild(
    html('ul', { id : "listFakePeople" }, [
        html('li', { id : "listItem1" }, [ text("Hello Brother") ])
    ])
)            
divList.appendChild(
    html('div', {  'class' : 'card' , style : "width: 18rem" }, [
        html('img', { 'class' : 'card-img-top', src : "https://randomuser.me/api/portraits/men/51.jpg" }),
        html('div', { 'class' : 'card-body' }, [
          html('h5', { 'class' : 'card-title' }, [ text("Person Name") ]),
          html('p', { 'class' : 'card-title' }, [ text("Person Description") ])
        ])
      ])
)
buttonFakeData.addEventListener('click', event => {
    
    event.preventDefault();

    // See if Rx can further simplify this.
    getRandomUsers(inputCount.value)
        
        .then(people => 
            people.map(person => 
                Object.values(person.name).map(Util.capitalize).join(' ')))

        .then(names => names.map(
            name => html('li', {}, [ text(name) ])))
        
        .then(listItems => html('ul', { id : "listFakePeople"}, listItems))
        
        .then(fakePeopleList => 
            divList.replaceChild(fakePeopleList, document.getElementById("listFakePeople")))
})

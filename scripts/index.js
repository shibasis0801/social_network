'use strict';
import { getRandomUsers } from  './randomuser.js';
import { html, text } from './view.js'
import { Util } from './util.js'
import { DOM } from './dom.js'
import { bootstrap } from './bootstrap.js'

const buttonFakeNames = document.getElementById('buttonFakeNames');
const buttonFakeCards = document.getElementById('buttonFakeCards');
const inputCount = document.getElementById('inputCount');

const listPeopleNames = document.getElementById('listPeopleNames');
const listPeopleCards = document.getElementById('listPeopleCards');

buttonFakeNames.addEventListener('click', event => {
    
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
            Util.replace(listPeopleNames, "listFakePeople", fakePeopleList))
})


buttonFakeCards.addEventListener('click', event => {
    event.preventDefault();

    getRandomUsers(inputCount.value)
        .then(people => 
            people.map(person => {
                const title = Object.values(person.name).map(Util.capitalize).join(' ');
                const image = person.picture.large;
                const caption = `${Util.capitalize(person.name.first)} lives at ${person.location.street}`;
                const result = [title, image, caption];
                console.log(result);
                return result;
            })
        )
        .then(peopleDetails => 
            peopleDetails.map(personDetails => 
                html('li', {}, [ bootstrap.card(personDetails[0], personDetails[1], personDetails[2]) ])
            )
        )
        .then(listItems => html('ul', { id : "listFakeCards"}, listItems))
        .then(fakePeopleCards => 
            Util.replace(listPeopleCards, "listFakeCards", fakePeopleCards))
})


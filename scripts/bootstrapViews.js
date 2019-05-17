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

    li(id, innerHTML, type = "primary") {
        const li = document.createElement('li');
        li.id = id;
        li.appendChild(document.createTextNode("DSAD"));
        li.classList.add("list-group-item");
        return li;
    }
}

export { View };
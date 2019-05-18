function bootstrap(element, tag, modifier) {
    const styles = {
        'ul': 'list-group',
        'li': 'list-group-item',
        'button': `btn btn-${modifier}`,
        'alert': `alert alert-${modifier}`,
    }

    let classes = styles[tag].split(' ');
    classes.forEach(className =>
        element.classList.add(className)
    );

    return element;
}


function preprocessTag(tag) {
    let final = tag;

    switch (tag) {
        case 'alert': final = 'div'; break;
    }

    return final;
}

function insertAttributes(element, attributes) {
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

    return element;
}

function appendChildren(element, children) {
    if (Array.isArray(children)) {
        children.forEach(child => 
            element.appendChild(child)
        );
    }
    else {
        throw new Error("listItems argument must be an array");
    }

    return element;
}

function attachFramework(element, framework, tag, modifier) {
    if (framework === "bootstrap") {
        bootstrap(element, tag, modifier);
    }
    else if (framework === "bulma") {
        console.log("To Be Implemented")
    }
    else {
        console.log("Vanilla HTML");
    }

    return element;
}

function html(tag, attributes = {}, children = [], modifier = "primary", framework = "bootstrap") {
    // Usage html('li', {}, text(Hello), "primary")
    // Later create Tag wise, like button("Hello", ["primary"])    

    let element = document.createElement(preprocessTag(tag));

    insertAttributes(element, attributes);
    appendChildren(element, children);
    attachFramework(element, framework, tag, modifier);
    
    return element;
}

function text(content) { return document.createTextNode(content); }

export { html, text };
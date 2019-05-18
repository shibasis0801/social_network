
class Card {
}


function bootstrap(element, tag, modifier) {
    const styles = {
        'ul': 'list-group',
        'li': 'list-group-item',
        'button': `btn btn-${modifier}`,
        'alert': `alert alert-${modifier}`,
    }

    if (styles.hasOwnProperty(tag)) {
        
        let classes = styles[tag].split(' ');
        classes.forEach(className =>
            element.classList.add(className)
        );
    }
    return element;
}

export { bootstrap };
import { html, text, appendChildren, insertAttributes } from './view.js'

class Card {
    constructor() {
        this.card = html('div', { 'class': 'card', style: "width: 18rem" }, []);
        return this.card;
    }

    image(src) {
        appendChildren(this.card, [html('img',
            { 'class': 'card-img-top', src: "https://randomuser.me/api/portraits/men/51.jpg" })
        ])
        return this.card;
    }
}


const bootstrap = {
    alert(modifier, content) {
        return html('div', { 'class': `alert alert-${modifier}` }, [ text(content) ])
    },

    card(title, image, caption) {
        return html('div', { 'class': 'card', style: "width: 18rem" }, [
            html('img', { 'class': 'card-img-top', src: image }),
            html('div', { 'class': 'card-body' }, [
                html('h5', { 'class': 'card-title' }, [text(title)]),
                html('p', { 'class': 'card-text' }, [text(caption)])
            ])
        ])
    },

    apply(element, tag, modifier) {
        const styles = {
            'ul': 'list-group',
            'li': 'list-group-item',
            'button': `btn btn-${modifier}`,
        }
    
        if (styles.hasOwnProperty(tag)) {
    
            let classes = styles[tag].split(' ');
            classes.forEach(className =>
                element.classList.add(className)
            );
        }
        return element;
    }
}



export { bootstrap };
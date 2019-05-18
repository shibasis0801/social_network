# social_network
I am learning Web Development by trying to create a Social Network website. I am using REST APIs to create Mock data. I have previously built websites using Ember.js and Firebase. I am using randomuser.me (a Fake Person Generator) to create data about people in this network. 

I will randomly generate friendships for testing. Once the website is functional with fake Data, I will try to connect this to Heroku postgres, inorder to create an actual social network website.

I plan to use both Firebase and Heroku's multiple features to build this. This will have image storage, posts, etc.

## Secondary Goals
As a part of this project, I am also creating a small component library for programmatic creation of Bootstrap components for faster and easier development. Once that library matures, I will create a separate repo and add it as a dependency here.

My vision is to create a Framework agnostic library, which has plugins for Bootstrap, Bulma and others. It is meant to lower the bar for entry to new web devs wanting to create beautiful websites.

For an example, we can use that library to create a bootstrap themed list as such.

```javascript
const divList = document.getElementById('divList');
divList.appendChild(
    html('ul', { id : "listFakePeople" }, [
        html('li', { id : "listItem1" }, [ text("Hello Brother") ])
    ])
)            
```

This will create a list styled with bootstrap which has one list item having the text "Hello Brother".

The general syntax is of the form
```javascript
html(TagName, AttributesObject, ChildrenArray)
```

This allows you to create HTML elements with their attributes and an arbitary amount of children specified in an array.
There are further parameters namely a modifier (primary, danger, warning, etc) and frameworkID which specifies the framework to use. They default to "primary" and "bootstrap".

# MaterialUI Dashboard

## Setting up

1. Fork and clone the repo.  
   `git clone https://github.com/YOURNAME/dashboard`

1. Navigate to the project folder.

`cd dashboard`

1. Install the dependencies.
   `npm install`
   or
   `yarn install` if you are using yarn.

1. Start the server.

`npm start`
or
`yarn start` if you are using yarn.

## Git workflow

1. Because we work in a Fork we dont need to create branches, the Fork is the branch. [More info.](https://help.github.com/en/articles/fork-a-repo)

1. First your fresh cloned fork is just connected to itsself remote (origin), so we need to connect it also to the originals remote
   `git remote add upstream git@github.com:FBW-10/dashboard.git`

1. Keep your version always in sync. [More info.](https://help.github.com/en/articles/syncing-a-fork)  
   `git fetch upstream`

1. Stash your changes
   `git add --all && git stash`
   or commit them `git commit -m "WIP"`

1. When your work is done, we wanna create a PR, but first we should apply the new changes from upstream into our fork (if there are any).  
   `git fetch upstream`  
   `git merge upstream/master`

1. Get your stash back if you stashed `git stash apply` and fix your conflicts.

## Style Guide

### Naming

- Use **jsx** and not js as file extension

### Widget Sizes

In the dashboard component add your Widget to the dashboard inside the Widget component like this.

<!-- Missing Example -->

Make sure you set the size for your widget and design it according to your size

- class `big` give the widget `width: 100%`
- class `medium` give the widget `width: 50%`
- class `small` give the widget `width: 25%`

### CSS

Use your css file inside the main component of your widget.

```javascript
import React from "react";
import "./example.css";

class Example extends React.Component {
  render() {
    return (
      <div>
        <h2>This is an example app</h2>
      </div>
    );
  }
}
export default Example;
```

### Importing

in data.js import your widgets from widget folder

```jsx
import Trello from "./widgets/trello/Trello";
```

then add your widget info including the Component to the array as follows

```jsx
{
  name: 'Trello',
  component: <Trello />,
  className: 'small',
  id: 'ddt0',
  mounted: false,
  developerName: 'Tommey'

},

```

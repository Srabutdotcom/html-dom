# html-dom

Simple tools to create html dom

# Usage

> To create HTML Element use _l_

```js
import { l } from "./html-dom.js";
// create simple div element containt text string 'test'
l.div("test");
// create simple div with attribute class 'className'
l.div("with class Name", { class: "className" });
// create div with children
l.div([
    "first child text", 
    l.div("second child"), 
    l.div("third child"), {id: "third"}
], { id: "main" });
```

# Output

- Simple div with 'test' string

```html
<div>test</div>
```

- Simple div with class 'className'

```html
<div class='className'>with class Name</div>
```

- Simple div with children

```html
<div id='main'>
    first child text
    <div>second child</div>
    <div id='third'>third child</div>
</div>
```

# Usage

> To create SVG Element use _s_

```js
import { s } from "./html-dom.js";
s.svg([
  s.line([], {
    stroke: "black",
    "stroke-width": "2",
    "stroke-linecap": "round",
    x1: "2",
    x2: "14",
    y1: "2",
    y2: "14",
  }),
  s.line([], {
    stroke: "black",
    "stroke-width": "2",
    "stroke-linecap": "round",
    x1: "2",
    x2: "14",
    y1: "14",
    y2: "2",
  }),
], { width: "15", height: "15", viewBox: "0 0 15 15", class: "z-30 hide" });
```

# Output

- Simple close svg

```html
<svg width="15" height="15" viewBox="0 0 15 15" class="z-30 hide">
    <line stroke="black" stroke-width="2" stroke-linecap="round" x1="2" x2="14" y1="2" y2="14"></line>
    <line stroke="black" stroke-width="2" stroke-linecap="round" x1="2" x2="14" y1="14" y2="2"></line>
</svg>
```


# html-dom

## _Javascript tools_

### Fitur

- l - membuat html element lengkap dengan attribute.
- s - membuat svg element lengkap dengan attribute.

## Petunjuk

```javascript
import { l, s } from "https://deno.land/x/html_dom/html-dom.min.js?source";

// html element
const htmlElement = l.div([
  l.h1(["Hello, World!"], { id: "title", class: "title" }),
  l.p(["Ini adalah contoh html element sederhana."], { class: "paragraph" }),
], { class: "contoh" });
```

```html
   <div class="contoh">
      <h1 id="title" class="title">Hello, World!</h1>
      <p class="paragraph">Ini adalah contoh html element sederhana.</p>
   </div>
```

```javascript
const svgElement = s.svg([
   s.circle([],{
      cx: 50, cy: 50,r: 40, stroke: "black", "stroke-width":2, fill: "red"
   })
],{width:"100",height:"100"})
```

```svg
   <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
   </svg>
```
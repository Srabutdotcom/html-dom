# html-dom
Simple tools to create html dom
# Usage
~~~js
import { l } from './html-dom.js'
// create simple div element containt text string 'test'
l.div('test')
// create simple div with attribute class 'className'
l.div('with class Name',{class:'className'})
// create div with children
l.div(['first child text', l.div('second child'), l.div('third child'),{id:'third'}],{id:'main'})
~~~
# Output
* Simple div with 'test' string
~~~html
<div>test</div>
~~~
* Simple div with class 'className'
~~~html
<div class='className'>with class Name</div>
~~~
* Simple div with children
~~~html
<div id='main'>
    first child text
    <div>second child</div>
    <div id='third'>third child</div>
</div>
~~~



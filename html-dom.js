import {svgElements} from './svgelements.js'
//import {htmlElements} from './htmlelements.js'

const getHandlerXhtml = (
    {
      get:function(/* target, property, receiver */) {
        const property = arguments[1]
        if(['then','next'].some(v => property===v)){
          return }
        else {
          return (children, attrs) => {
            // yes you can create any element with any tag name without error
            const el = document.createElement(property);

            for (const attr in attrs) {
              el.setAttribute(attr, attrs[attr]);
            }
            
            for (const child of(Array.isArray(children) ? children : [children])) {
              //console.log(typeof child)
              el.append(typeof child === "string" ? document.createTextNode(child) : child);
            }
            return el
          }
        } 
      }
    }
  )

const getHandlerSvg = (
  {
    get:function(/* target, property, receiver */) {
      const property = arguments[1]
      if(['then','next'].some(v => property===v)){
        return }
      else {
        return (children, attrs) => {
          let el // svg element
          // preventing from creating non standard svg element
          // as the browser cann't render unknown tag or element
          if(svgElements.includes(property.toLowerCase())){
            el = document.createElementNS('http://www.w3.org/2000/svg',property);
            } else {
            console.log(`Property of ${property} is not svg standard nodeName`);
            return
          }

          for (const attr in attrs) {
            // https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course
            // Instead, you must use null as the namespace name for unqualified (prefixless) parameters.
            // you can add attr with any name without error  
            el.setAttributeNS(null, attr, attrs[attr]);  
          }
          
          for (const child of(Array.isArray(children) ? children : [children])) {
            // debugger;
            el.append(typeof child === "string" ? document.createTextNode(child) : child);
          }
          return el
        }
      } 
    }
  }
)

const l = new Proxy({},getHandlerXhtml)
const s = new Proxy({},getHandlerSvg)
export {l,s}
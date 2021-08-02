const getHandler = (
    {
      get:function(/* target, property, receiver */) {
        const property = arguments[1]
        if(['then','next'].some(v => property===v)){
          return }
        else {
          return (children, attrs) => {
            const el = document.createElement(property);
            for (const attr in attrs) {
              el.setAttribute(attr, attrs[attr]);
            }
            for (const child of(Array.isArray(children) ? children : [children])) {
              el.append(typeof child === "string" ? document.createTextNode(child) : child);
            }
            return el
          }
        } 
      }
    }
  )

const l = new Proxy({},getHandler)
export {l}
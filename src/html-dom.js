const xmlnNS = "http://www.w3.org/1999/xhtml"
const svgNS = 'http://www.w3.org/2000/svg'

function getHandler(NS) {
  return {
    get: function (/* target, property, receiver */) {
      const property = arguments[1]
      if (['then', 'next'].some(v => property === v)) {
        return
      }
      else {
        return (children, attrs) => {
          // yes you can create any element with any tag name without error
          const el = document.createElementNS(NS, property);

          if (attrs !== undefined) Object.keys(attrs).forEach(attr => {
            el.setAttribute(attr, attrs[attr]);
          })

          for (const child of (Array.isArray(children) ? children : [children])) {
            //console.log(typeof child)
            el.append(typeof child === "string" ? document.createTextNode(child) : child);
          }
          return el
        }
      }
    }
  }
}

const l = new Proxy({}, getHandler(xmlnNS))
const s = new Proxy({}, getHandler(svgNS))
export { l, s }
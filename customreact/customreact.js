// function customRender(reactElement, container){
//   const domElement = document.createElement(reactElement.type)
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute('href',reactElement.props.href)
//   domElement.setAttribute('target',reactElement.props.target)
//   container.appendChild(domElement)
// }

function customRender(reactElement, container){
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  if (reactElement.props) {
    for (let prop in reactElement.props) {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElement);
}


const reactElement = {
  type : "a",
  props : {
    href : "https://google.com",
    target : "_blank",
  },
  children : "click here"
}



const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)
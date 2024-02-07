export const hello = () => {
    const app = document.getElementById('app')
    const element = document.createElement('p')
    element.innerHTML = 'Hello World'
    app.appendChild(element.cloneNode(true))
}
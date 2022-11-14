const p = document.querySelector('p')
const name = document.querySelector('#name')
const message = document.querySelector('#message')
const button = document.querySelector('button')

class Message {
    constructor(author, time, text) {
        this.author = name.value;
        this.time = time;
        this.text = text;
    }
    getTime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    toHTML(author, time, text) {
        p.innerText = this.getTime() + " " + author + " : " + text
    }
}

const myMessage = new Message()



button.addEventListener('click', () => {
    myMessage.toHTML(name.value, 'Sunday', message.value)

})
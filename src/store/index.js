class Store {
    constructor() {
        this.messages = [];
        this.ai = 1
    }

    all() {
        return this.messages;
    }

    find(id) {
        return this.messages.find(message => message.id === Number(id))
    }

    insert(to, message, date) {
        const data = {id: this.ai, to, message, date}
        this.ai++;
        this.messages.push(data)

        return data
    }

    delete(id) {
        this.messages = this.messages.filter(message => message.id !== Number(message));
    }
}

const store = new Store()

module.exports = store
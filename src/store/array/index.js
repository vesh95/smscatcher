class Store {
    constructor() {
        this.messages = [];
        this.ai = 1
    }

    async all() {
        return new Promise(resolve => {
            resolve(this.messages);
        });
    }

    async find(id) {
        return new Promise((resolve, reject) => {
            const message = this.messages.find(message => message.id === Number(id))
            if (!message) {
                reject('NotFound')
            }

            resolve(message)
        })
    }

    async insert(to, message, date) {
        const data = {id: this.ai, to, message, date}
        this.ai++;

        return new Promise(resolve => {
            this.messages.push(data)
            resolve(data)
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            let deletedMess = null;

            this.messages = this.messages.filter(message => {
                if (message.id === Number(id)) {
                    deletedMess = message
    
                    return false;
                }
    
                return true;
            });

            if (deletedMess === null) { 
                reject('NotFound')
            }

            resolve(deletedMess)
        })
    }
}

const store = new Store()

module.exports = store
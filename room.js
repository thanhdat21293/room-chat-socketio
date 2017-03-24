class Room {
    constructor(id, name, creatorID){
        this.id = id; // room ID -> shortid
        this.name = name; // client set in front-end -> server receives data from front-end
        this.creator = creatorID; // client's unique ID/token
        this.clients = []; // array of clients ID
        this.quantity = 0;
    }
    addClient(clientID) {
        this.clients.push(clientID);
        this.quantity++;
    }
    removeClient(clientID) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i] === clientID) {
                this.clients.splice(i, 1);
                break;
            }
        }
        this.quantity --;
    }
}

module.exports = Room;
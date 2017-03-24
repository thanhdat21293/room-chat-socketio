const app = require('http').createServer();
const io = require('socket.io')(app);
const fs = require('fs');
const shortid = require('shortid'); //use: shortid.generate();
const Room = require('./room.js');
app.listen(8000);

let log = console.log;
log('ok \n');

//Start
let allRoomsObj = {};
let roomList = {};
/*
    {
        'rJqHbDzhg': {
            id: 'rJqHbDzhg',
            name: 'All',
            creator: 'user1',
            clients: ['user1'],
            quantity: 1
        }
    }
;
*/

/*
* roomID : sẽ do shortid generate, hiện tại để check function thì roomID tự điền
* clientID : ID của người dùng
* roomName : tên Room
* allRoomsObj : mảng chưa thông tin Room {roomID, nameRoom, creator, clients, quantity}
* Roomlist : mảng chứa id và name của Room {roomID, nameRoom}
*/

const createRoom = (clientID, roomID, roomName) => {
    let checkClientID = clientID.trim().length;
    let checkroomName = roomName.trim().length;
    if(checkClientID > 0 && checkClientID > 0) {
        //let roomID = shortid.generate();
        let room = new Room(roomID, roomName, clientID);
        room.addClient(clientID);
        allRoomsObj[roomID] = room;
        roomList[roomID] = roomName;
    }else{
        log('Error: Dữ liệu vào thiếu.');
    }
};
const deleteRoom = (clientID, roomID) => {
    let checkClientID = clientID.trim().length;
    let checkroomID = roomID.trim().length;
    if(checkClientID > 0 && checkroomID > 0) {
        let room = allRoomsObj[roomID];
        if (room === undefined) {
            log('Error: Room không tồn tại');
        } else {
            if (room.creator === clientID) {
                delete allRoomsObj[roomID];
                delete roomList[roomID];
            } else {
                log('Error: Bạn không có quyền xóa Room này.');
            }
        }
    }else{
        log('Error: Dữ liệu vào thiếu.');
    }
};
const joinRoom = (clientID, roomID) => {
    let checkClientID = clientID.trim().length;
    let checkroomID = roomID.trim().length;
        if(checkClientID > 0 && checkroomID > 0) {
        let room = allRoomsObj[roomID];
        if(room === undefined){
            log('Error: Room không tồn tại');
        }else {
            room.addClient(clientID);
        }
    }else{
        log('Error: Dữ liệu vào thiếu.');
    }
};
const leaveRoom = (clientID, roomID) => {
    let room = allRoomsObj[roomID];
    if(room === undefined){
        log('Error: Room không tồn tại');
    }else {
        let clients = room.clients.length;
        if(clients > 1) {
            room.removeClient(clientID);
        }else{
            delete allRoomsObj[roomID];
        }
    }
};
const renameRoom = (clientID, roomID, nameRoomNew) => {
    let room = allRoomsObj[roomID];
    let creator = room.creator;
    if(room === undefined){
        log('Error: Room không tồn tại');
    }else {
        if(creator != clientID) {
            log('Error: Bạn không có quyền sửa tên Room này.');
        }else{
            room.name = nameRoomNew;
            roomList[roomID] = nameRoomNew;
        }
    }
};

createRoom('   1','room1', 'All');
createRoom('user2', 'room2', 'Room 2');
//deleteRoom('user1', 'room1');
//joinRoom('user3', 'room1');
//leaveRoom('user1', 'room1');
createRoom('user3','room3', 'Room 2');
renameRoom('user1', 'room1', 'Ahehe');
log('--------------------------------------------------------------------------------');
log(allRoomsObj);
log('--------------------------------------------------------------------------------');
log(roomList);
log('--------------------------------------------------------------------------------');




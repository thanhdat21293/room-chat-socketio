#ROOM CHAT

##Data
``` 
idRoom: tự generate
nameRoom: Người dùng điền
idUser: lấy từ soket.id
nameUser: người dùng điền
```
- Mảng user tạo Room
``` 
{
    id: idroom,
    name: 'Room 1',
    creator: idUser,
    numberUser: 1
}
```
- Mảng Tất cả Room
``` 
[idroom1, idroom2, idroom3]
```
- Mảng lưu Room mà User đang vào
``` 
{
    idUser: [idroom1, idroom2, idroom3]
}
```
- Mảng lưu User trong Room
``` 
{
    idroom: [iduser1, iduser2, iduser3]
}
```


##Create
- Khi user tạo Room thì sẽ lưu vào 1 mảng
```
{
    id: idroom,
    name: 'Room 1',
    creator: idUser,
    numberUser: 1
}
```
-  Cập nhật tất cả Room vào 1 mảng
``` 
[idroom1, idroom2, idroom3]
```

##Delete
- Lấy id Room và id User để xóa Room
```
{
    idroom: idroom,
    iduser: iduser
}
```
- Cập nhật lại Room
- Xóa Room trong User

##Join
- Khi user join thì sẽ lưu Room hiện tại mà User đang vào
```
roomCurrent = idroom
```
- Lưu tất cả Room mà user đã vào
```
[idroom1, idroom2, idroom3]
```
- Lưu User trong Room
``` 
{
    idroom: [iduser1, iduser2, iduser3]
}
```
- cập nhật lại User trong Room

##Leave
- Cập nhật lại Room của User
- cập nhật lại User của Room

##List user trong Room
- Dựa vào idRoom để hiển thị tất cả User

// 建立一個Log DB跟APILog Collection
db.getSiblingDB('Log').createCollection("APILog");  

//Log - 建立一個用戶
db.getSiblingDB('admin').createUser(  
    {
        user: "LogUsr",
        pwd: "zxczxc",
        roles: [
            { role: "readWrite", db: "Log"}
        ]
    }
);


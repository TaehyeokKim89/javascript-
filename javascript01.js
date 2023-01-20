let user = {
    name: 'jaenam',
    gender: 'male'
};

let changeName = function (user, newName) {
    let newUser = user;
    newUser.name = newName
    return newUser;
}

let user2 = changeName(user, 'jung');

if(user !== user2) {
    console.log('유저 정보가 변경 되었습니다.');
}

console.log(user.name, user2.name);
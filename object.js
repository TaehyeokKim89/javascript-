let user = {};

user.name = "john";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

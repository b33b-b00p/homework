const user = {
    firstName: 'Petya',
    lastName: 'Petrov',
    age: 20,
    favoriteColor: 'black',
    favoriteNumber: '10',
    sayHi(name){
        return 'Hello, ' + name;
    },
}
console.log(user.sayHi('Tim'));

const users = [
    {
        name: 'jonh',
        role: 'user'
    },
    {
        name: 'bill',
        role: 'user'
    },
    {
        name: 'tom',
        role: 'user'
    },
    {
        name: 'paul',
        role: 'admin'
    },
    {
        name: 'jake',
        role: 'user'
    },
]
let regularUsersNum = 0;
function countRegularUsers(array)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].role === 'user')
        {
            regularUsersNum++;
        }
    }
    return regularUsersNum;
}
console.log(countRegularUsers(users));
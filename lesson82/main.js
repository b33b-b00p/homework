function sayHi (name)
{
    return 'Hello, ' + name;
}
console.log(sayHi('john'));


console.log('============');
const numbers = [1, 2, 4, 10, 15, 44, 46];
function displayNumbersMoreThan10(array)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > 10)
        {
            console.log(array[i]);
        }
    }
}
displayNumbersMoreThan10(numbers);


console.log('============ операторы plus, minus, divide, multiply');
function calculator(x, y, operator)
{
    if(operator === 'plus')
    {
        return x + y;
    }
    else if(operator === 'minus')
    {
        return x - y;
    }
    else if(operator === 'divide')
    {
        return x / y;
    }
    else if(operator === 'multiply')
    {
        return x * y;
    }
    else
    {
        return 'error';
    }
}
console.log(calculator(2, 3, 'minus'));
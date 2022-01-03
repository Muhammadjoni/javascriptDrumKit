//Regular 
console.log('hello!');

//Interpolated
console.log('Hello %s', '')

//Styled
console.log('%c Hello', 'color: blue; font-size: 20px;');

// Warning
console.warn('You will be fired next time!');

//Error
console.error(`Can't be fired if not hired:(`);

//info
console.log('An individual you want to fire is not hired yet.');

//testing 
console.assert(4 === 5, 'Nope');

const p = document.querySelector('p');

console.assert(p.classList.contains('hello'), 'Not right element');

//clearing 
// console.clear();

//view DOM elements
console.dir(p); //console.log(p) gives you the whole DOM element with info inside

//grouping together
const dogs = [{ name: 'Rex', age: 6 }, { name: 'Victor', age: 3 }];

dogs.forEach(dog => {
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} id ${dog.age}`);
    });

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} id ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} id ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.groupCollapsed
('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.count('Jon');
console.groupEnd('Jon');

//timing

console.time('time-fetching');
fetch('https://api.github.com/users/Muhammadjoni')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('time-fetching');
        console.log(data);
    });

// playing around

const makeShine = () => {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '60px';
}

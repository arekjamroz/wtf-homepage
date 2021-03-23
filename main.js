//alert('Siema ziom!!!')

const heading = document.querySelector(".main-header--js");

// obiekty:

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed `);
    },
    isOperating: true,
    levels: 357,
    name: "Death Star",
    population: 10000,
    commander: {
        name: "Darth Vader",
        age: 44,
    },
};

console.log(deathStar.name);

console.log(deathStar.commander.name);

deathStar.fire("Sun");

console.log(deathStar["name"]);

// niemutowalność w obiektach:

const numberOne = 42;
const numberTwo = 42;
const nameOne = "Maciek";
let nameTwo = "Stefan";

nameTwo = "Maciek";


const humanOne = {
    name: 'Maceik',
    age: 32,
}

const humanTwo = {
    name: 'Stefan',
    age:32,
}
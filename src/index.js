// const my = {
//     name: "Wojtek",
//     surname: "Pyda"
// }
//
// const {
//     name: myName,
//     surname: mySurname} = my

// ---------------------------------

// const array = [1,'one', 2,'two', 3,4,5,6]
//
// const [zero, one, two, three, four, five] = array
//
// const [,,dwojka,,trojka] = array

// ---------------------------------

// const loggingCats1 = (catObject) => {
//     console.log("Cat name is ", catObject.name)
//     console.log("Cat age is ", catObject.age)
//     console.log("Cat age in human years is ", catObject.age*10)
// }
//
// const loggingCats2 = (catObject) => {
//     const {name, age} = catObject
//     console.log("Cat name is ", name)
//     console.log("Cat age is ", age)
//     console.log("Cat age in human years is ", age*10)
// }
//
// const loggingCats3 = ({name, age}) => {
//     console.log("Cat name is ", name)
//     console.log("Cat age is ", age)
//     console.log("Cat age in human years is ", age*10)
// }
//
// loggingCats3( {
//     name: 'Puszek',
//     age:'4'
// })

// ---------------------------------

// const name = ({name: lalala, surname: xxx}) => {
//     console.log(lalala)
//     console.log(xxx)
// }
// name({name: 'Wojtek', surname: 'Pyda'})

// const ourObject = {
//     djshjdajd: {
//         name: 'Ala',
//         surname: 'Kotowicz'
//     },
//     dadadsaddad: {
//         name: 'Ola',
//         surname: 'Kotowicz'
//     },
//     fsafafafafafafaf: {
//         name: 'Ela',
//         surname: 'Kotowicz'
//     }
// }

// Object.keys(ourObject)
//         .forEach((ourObjectKey) => {
//         const {name, surname} = ourObject[ourObjectKey]
//         console.log(name + ' ' + surname)
//     })

// Object.values(ourObject)
//     .forEach(({name, surname}) => {
//     console.log(name + ' ' + surname)
// })

// Object.entries (ourObject)
// .forEach((smallArray) => {
//     const value = smallArray[1]
//     const {name, surname} = value
//     console.log(`${name} ${surname}`)
// })

// Object.entries(ourObject)
//     .forEach(([key, value])=> {
//     const {name, surname} = value
//         console.log(`${key} - ${name} ${surname}`)
//
//     })

// const cars = {
//     k1: {
//         model: 'Audi',
//         year: '2011'
//     },
//     k2: {
//         model: 'Totayo',
//         year: '2012'
//     },
//     k3: {
//         model: 'Chevrolet',
//         year: '2013'
//     }
// }
// console.log(cars)
//
// Object.values(cars)
//     .forEach(({model, year})=> {
//         console.log(model + ' ' + year)
//     })

// ---------------------------------

// classes
class Animal {
// object constructor
// (executed when new Animal())
    constructor(sound) {
        this.sound = sound
    }
// class method
    makeSound() {
        console.log(this.sound)
    }
}

// old constructor
function oldAnimal(sound) {
    this.sound = sound
}

oldAnimal.prototype.makeSound = function () {
    console.log(this.sound)
}
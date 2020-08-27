//const name = require('./utils.js')
//const add = require('./utils.js')
const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk');
 
console.log(chalk.green.bold.inverse('Success!'));

//const name = 'Tanate'
//const sum = add(4, -2)

//console.log(name)
//console.log(sum)

console.log(getNotes())

console.log(validator.isEmail('tanate@example.com'))
console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https://mean.io'))


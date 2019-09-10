#!/usr/bin/node

const pi=require('./02-export-var.js');

console.log('\npi:',pi);
console.dir(module);

const circle=require('./02-export-function.js');
console.log('\narea:\t\t',circle(20).area());
console.log('circumference:\t',circle(20).circumference());
console.dir(module);

const circle2=require('./02-export-object.js');
console.log('\ndiameter:\t',circle2.diameter(10));
console.log('circumference:\t',circle2.circumference(10));
console.log('area:\t\t',circle2.area(10));

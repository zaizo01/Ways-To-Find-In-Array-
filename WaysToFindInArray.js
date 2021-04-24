// includes method
const menu = ['Pizza', 'Burger', 'Momos'];
console.log(menu.includes('Pizza'));

// findIndex method
const arr = [5, 3, 56, 90, 3];
console.log(arr.findIndex(value => value > 13));

// indexOf method
const arr = ['juan', 'pedro', 'maria', 'felix'];
console.log(arr.indexOf('maria'));

// find method
const score = [55, 77, 82, 66, 48];
const value = score.find(v => v < 55);
console.log(value);

// lastIndexOf method
const arr = ['juan', 'pedro', 'juan', 'teresa'];
console.log(arr.lastIndexOf('juan'));

// map method
const arr = [53,29,65,22,71];
const pass = [];
arr.map(value => {
  if(value > 30){
    pass.push(value);
  }
});
console.log(pass);

// filter method
const arr = [53,29,65,22,71];
const pass = arr.filter(value => value > 30);
console.log(pass);
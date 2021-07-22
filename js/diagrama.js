for(var i = 0; i < 10; i++) {
    console.log(i); 
    i = i+3;
}
console.log(i);


//--- 

var a = 20;
function abc(list) {
    a = 15;
    console.log(a);
}
console.log(a);

a = [[1,2,3], [5,10,20]]
abc(a);


// a = 20
// (20)
// a = [[1,2,3], [5,10,20]]
// a = 15
// (15)

//---

function sum(list) {
    sum = list[0];
    for(var i=0; i<=list.length; i++) {
        sum = sum + list[1];
        console.log(sum);
    }
}
let c = sum([1,2,3]);
console.log(c);

// // c = f_sum([1,2,3])
// sum = 1
// i = 0
// largo_lista = 3
// sum = 3
// (3)
// i = 1
// sum = 5
// (5)
// i = 2
// sum = 7
// (7)
// i = 3
// sum = 9
// (9)
// i = 4
// (undefined)
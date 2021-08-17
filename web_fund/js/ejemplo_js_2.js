function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<y; j++) {      
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);


let i = 1;
while(i <= z) {
    if(i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
    i++;
}

i=0;
do {
    const esPar = i%2;
    switch(esPar) {
        case 0:
            console.log(`El número ${i} es par`);
        break;
        default:
            console.log(`El número ${i} es impar`);
    }
    if(i > 10) {
        break;
    }

    i++;

} while( i <= z );

console.log(i);
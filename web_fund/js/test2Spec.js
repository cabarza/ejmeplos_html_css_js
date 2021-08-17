function suma(arreglo) {
    return arreglo.reduce((a, b) => a + b);
}

const valor = suma([2,5,3,1]);
console.log(valor);

describe("suma", function() { 
    it("Debe retornar la suma de los elementos del arreglo", function() { 
        expect(suma([1, 1, 1])).toEqual(3); 
    }); 
    it("Debe retornar la suma de los elemento del arreglo", function() { 
        expect(suma([10, 15, 100])).toEqual(125); 
    }); 
});
function hola(nombre) {
    return 'Hola ' + nombre;
}


const texto = hola('Ninjas');
console.log(texto);


describe("hola", function() { 
    it("Debe retornar Hola César cuando César es el parámetro", function() { 
        expect(hola('César')).toEqual('Hola César'); 
    }); 
    it("Debe retornar Hola Ninjas cuando Ninjas es el parámetro", function() { 
        expect(hola('Ninjas')).toEqual('Hola Ninjas'); 
    }); 
});
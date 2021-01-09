export {}

let list1 = [1, 2, 3, 4]
let list2 = []
let nomes = ['MARIA', 'JOAO', 'ANABELA']

// Map: aplica uma função a cada elemento da coleção original,
// retornando uma nova coleção com os elementos alterados

function dobro(x: number) : number {
    return x * 2;
}

function triplo(x: number) : number {
    return x * 3;
}

let m1 = list1.map(dobro);
let m2 = list1.map(triplo);
let m3 = list1.map(x => x * 2);

console.log("MAP -------------------------");
console.log(m1);
console.log(m2);
console.log(m3);

// Filter: retorna uma nova coleção contendo apenas aqueles elementos 
// da coleção original que satisfazem um dado predicado

function par(x: number) : boolean {
    return x % 2 == 0;
}

let f1 = list1.filter(par);
let f2 = list1.map(triplo).filter(par);
let f3 = list1.filter(x => x > 2);
let f4 = list1.filter(x => x % 2 != 0);

console.log("Filter ----------------------");
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);


// Reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function soma(x: number, y: number) : number{
    return x + y;
}

function produto(x: number, y: number) : number{
    return x * y;
}

let r1 = list1.reduce(soma);
let r2 = list1.reduce(produto);
// da erro!
//let r3 = list2.reduce(soma);
let r4 = list2.reduce(soma, 0);

console.log("REDUCE ----------------------");
console.log(r1)
console.log(r2)
console.log(r4)

// Sort: ordena a coleção conforme a função de comparação informada como parâmetro

function comparacaoPorTamanho(s1: string, s2: string) : number{
    return s1.length - s2.length;
}

console.log("SORT ------------------------");
nomes.sort(comparacaoPorTamanho);
console.log(nomes);

nomes.sort();
console.log(nomes);

nomes.sort((x, y) => x.length - y.length );
console.log(nomes);

//Etapa 1 - variáveis
let name = 'Silas';
let age = 26;
let height = 1.73;

console.log(name);
console.log(age);
console.log(height);

//Etapa 2 - Objetos

let pessoa = {
    name: 'Silas',
    age: 26,
    height: 1.73
};

console.log(pessoa);

//Etapa 3 - Arrays

let ages = [17,24,26,54,59,71];

console.log(ages);
console.log(ages[2]);
console.log(ages.length);

//Etapa 4 - Function 

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("branco", "gelo");
console.log(corSite);

let a = 2;
let b = 5; 

function multiplicadorValores(v1, v2){
    return v1*v2;
};

console.log(multiplicadorValores(a,b));
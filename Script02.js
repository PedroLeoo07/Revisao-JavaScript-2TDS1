// Exercício 1

let IdadeMinima = 7;
let idadeAluno = 7;
let PrimeiroAno = 6;
let SegundoAno = 7;
let TerceiroAno = 8;
let QuartoAno = 9;
let QuintoAno = 10;

if (idadeAluno>= IdadeMinima) {
    console.clear();
    console.log("Matrícula realizada com sucesso(;");
} else  {
    console.log("Matrícula não realizada):"); 
}

//Exercício 2

let QuantidadeDePalmas = 30;
let aplausos = ""

for (let i = 1; i <= QuantidadeDePalmas; i++) {
    aplausos += "👏"; 
    if ((i+ 1 ) % 5 === 0){
        aplausos += "🎉"
    }
}
    console.log(aplausos);

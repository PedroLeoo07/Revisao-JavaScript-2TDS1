let MetadeLivro = 5;
let livros = ["Biblia Sagrada, Uma vida com Propósito, Quebrando ciclos"];
let faltam = MetadeLivro - livros.length;

for (let i = 0; i < livros.length; i++);{
    console.log(livros[i])
}  if (livros > MetadeLivro){
    console.log("Meus Parabéns!!!")
}   else {
    console.log("Meus Parabéns, você conseguiu ler"+ livros + "Falta apenas" + faltam)
}
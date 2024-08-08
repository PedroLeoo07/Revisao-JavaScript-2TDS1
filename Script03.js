let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburguer = []

hamburguer.push(paes[1]);
hamburguer.push(molhos[0]);
hamburguer.push(saladas[0]);
hamburguer.push(carnes[0]);
hamburguer.push(queijos[0]);

for (let i = 0; i < hamburguer.length; i+=1){
    console.log(hamburguer[i]);
}
let armas = ["AK-47", "MP5", "Gelo Invertido", "G18", "Granada"];
let ataques = [];
let NomeRobo = "Fúria da Noite"

armas.push("Fúria da Noite");
armas.push(armas[0]);
armas.push(armas[1]);
armas.push(armas[2]);
armas.push(armas[3]);
armas.push(armas[4]);

    for (let i = 0; i < ataques.length; i++) {
        if (i == o) {
            console.log(`Nome do Robô: ${ataques[i]}`);
        } else{
            console.log(`Ataques ${i}: ${ataques[i]}`);
        }
    }
   
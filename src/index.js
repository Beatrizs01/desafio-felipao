//Desafio Classificado de nível Herói

let nomeDoHeroi = "Rhaenyra mãe de Dragão"
let nivelDeXp = 8500

if(nivelDeXp <= 1000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Ferro. Parabéns!")
} else if(nivelDeXp > 1001 && nivelDeXp <= 2000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Bronze. Parabéns!")
} else if(nivelDeXp >2001 && nivelDeXp <= 5000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Prata. Parabéns!")
} else if(nivelDeXp > 5001 && nivelDeXp <= 7000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Ouro. Parabéns!")
} else if(nivelDeXp > 7001 && nivelDeXp <= 8000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Platina. Parabéns!")
} else if(nivelDeXp > 8001 && nivelDeXp <= 9000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Ascendente. Parabéns!")
} else if(nivelDeXp > 9001 && nivelDeXp <= 10000){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Imortal. Parabéns!")
} else if(nivelDeXp >10001){
    console.log("O Herói de nome " + nomeDoHeroi + ", você esta no Radiante. Parabéns!")
}
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreDiCalcio = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

let array = [];

for (let i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i].puntiFatti = Math.floor(Math.random() * 100) + 1;
    squadreDiCalcio[i].falliSubiti = Math.floor(Math.random() * 100) + 1;
    array.push(squadreDiCalcio[i].nome);
    array.push(squadreDiCalcio[i].falliSubiti);
}

console.log(array);
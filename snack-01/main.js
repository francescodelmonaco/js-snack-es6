// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciDaCorsa = [
    {
        nome: "Bici da corsa 1",
        peso: 7.5 // peso in kg
    },
    {
        nome: "Bici da corsa 2",
        peso: 6.8 // peso in kg
    },
    {
        nome: "Bici da corsa 3",
        peso: 7.3 // peso in kg
    },
    {
        nome: "Bici da corsa 4",
        peso: 7.1 // peso in kg
    },
    {
        nome: "Bici da corsa 5",
        peso: 7.4 // peso in kg
    }
];

let biciLeggera = biciDaCorsa[0];

for (let i=0; i<biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciDaCorsa[i];
    }
}

console.log(`La bici più leggera è: ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`)
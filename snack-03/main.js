// Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).

const nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const a = 1;
const b = 4;

function estrazione(nomi, a, b) {
    const nomiEstratti = [];
    
    for (let i = ++a; i < b; i++) {
        nomiEstratti.push(nomi[i]);
    }

    return nomiEstratti;
}

console.log(estrazione(nomi, a, b));
function sum(...theArgs) {

    return theArgs.reduce((sum, value) => sum += value);
}

// "..." definisce REST O SPREAD OPERATOR.
// Il REST in questo caso raccoglie i dati (di un array o di un oggetto) raggruppandoli in un singolo elemento. 
// Questo elemento sarà un ulteriore oggetto (se raccoglie coppie chiave-valore) o un array (se raccoglierà elementi dello stesso tipo).
// Lo SPREAD esegue l'operazione inversa.

console.log(sum(1, 2, 3, 4, 5));
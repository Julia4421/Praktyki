function polacz(tab1, tab2) {
    for (let i = 0; i < tab2.length; i++) {
        tab1.push(tab2[i]);
    }

    return tab1;
}

const tab1 = ["Hania", "Ania"];
const tab2 = ["Gregor", "Henio"];

const tablica = polacz(tab1,tab2);

console.log(tablica);

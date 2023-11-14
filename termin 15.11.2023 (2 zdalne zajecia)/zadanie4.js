const oblicz = () => {
    var tab1 = [10, 11, "Hania", 11];
    var wynik = [];
    for (let i = 0; i < tab1.length; i++) {
        if (typeof(tab1[i]) === "number" && tab1[i] === 11) {
            wynik.push(tab1[i]);
        }
    }
    console.log(wynik);
}

oblicz();

const tab1 = ["Anna", "Maria"];
const tab2 = ["Adam", "Marek", "Bartek", "Tomek"];
const liczby = [1, 2, 3, 4, 5];

// 1. Łączenie tablic tablica1 oraz tablica2
const laczenie = [...tab1, ...tab2];
console.log("1. Łączenie tablic tablica1 oraz tablica2:", laczenie);

// 2. Ostatni element w tablicy
let ostatni;
if (laczenie.length > 0) {
    ostatni = laczenie[laczenie.length - 1];
} else {
    ostatni = "Tablica jest pusta";
}
console.log("2. Ostatni element w tablicy:", ostatni);

// 3. Zastosuj filter w tablicy tablica2
const filtrujTablice = (tablica, arg) => {
    const filtrowana = [];
    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i].includes(arg)) {
            filtrowana.push(tablica[i]);
        }
    }
    return filtrowana;
};
const filtrowana2 = filtrujTablice(tab2, "a");
console.log("3. Filter w tablicy tablica2:", filtrowana2);

// 4. Suma elementów w tablicy liczby
let suma = 0;
for (let i = 0; i < liczby.length; i++) {
    suma += liczby[i];
}
console.log("4. Suma elementów w tablicy liczby:", suma);

// 5. .map() 
const mapowane = [];
for (let i = 0; i < liczby.length; i++) {
    mapowane.push(liczby[i] ** 2 + 3);
}
console.log("5. .map() po tablicy liczby:", mapowane);


// Zadania dodatkowe
// 1. Filtruj tylko liczby parzyste w liczby
const parzyste = [];
for (let i = 0; i < liczby.length; i++) {
    if (liczby[i] % 2 === 0) {
        parzyste.push(liczby[i]);
    }
}
console.log("Dodatkowe 1. Filtruj tylko liczby parzyste w liczby:", parzyste);



// 2. Funkcja rekurencyjna strzałkowa (reduce) - znajdź najmniejszy element w tablicy liczby
let min = liczby.length > 0 ? liczby[0] : "Tablica jest pusta";
for (let i = 1; i < liczby.length; i++) {
    if (liczby[i] < min) {
        min = liczby[i];
    }
}
console.log("Dodatkowe 2. Najmniejszy element w tablicy liczby:", min);

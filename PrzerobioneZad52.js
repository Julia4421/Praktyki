const tab1 = ["Anna", "Maria"];
const tab2 = ["Adam", "Marek", "Bartek", "Tomek"];
const liczby = [1, 2, 3, 4, 5];

// 1. Łączenie tablic tab1 oraz tab2
const laczenie = tab1.concat(tab2);
console.log("1. Łączenie tablic tab1 oraz tab2:", laczenie);

// 2. Ostatni element w tablicy
const ostatni = [...laczenie].reverse()[0] || "Tablica jest pusta";
console.log("2. Ostatni element w tablicy:", ostatni);

// 3. Zastosuj filter w tablicy tab2
const filterArray = (array, arg) => array.filter(item => item.includes(arg));
const filtrowana2 = filterArray(tab2, "a");
console.log("3. Filter w tablicy tab2:", filtrowana2);

// 4. Suma elementów w tablicy liczby
const suma = liczby.reduce((acc, num) => acc + num, 0);
console.log("4. Suma elementów w tablicy liczby:", suma);

// 5. .map()
const mapowane = liczby.map(num => num ** 2 + 3);
console.log("5. .map() po tablicy liczby:", mapowane);

// Zadania dodatkowe
// 1. Filtruj tylko liczby parzyste w liczby
const parzyste = liczby.filter(num => num % 2 === 0);
console.log("Dodatkowe 1. Filtruj tylko liczby parzyste w liczby:", parzyste);

// 2. Funkcja rekurencyjna strzałkowa (reduce) - znajdź najmniejszy element w tablicy liczby
const findMin = (arr) => arr.reduce((min, num) => (num < min ? num : min), arr[0]);
const min = liczby.length > 0 ? findMin(liczby) : "Tablica jest pusta";
console.log("Dodatkowe 2. Najmniejszy element w tablicy liczby:", min);

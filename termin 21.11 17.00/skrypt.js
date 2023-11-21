// Zadanie 9
class Obietnica {
    constructor() {
      this.status = 'oczekująca';
      this.wartosc = null;
    }
  
    rozwiazanie(wartosc) {
      setTimeout(() => {
        this.status = 'wykonana';
        this.wartosc = wartosc;
        console.log(this.wartosc); // callback - wypisanie w konsoli
      }, 5000);
    }
  }
  
  const mojaObietnica = new Obietnica();
  mojaObietnica.rozwiazanie('Udało się!');
  
  // Zadanie 10
  const pomnozAsync = (x, y) => {
    return new Promise((resolve, reject) => {
      if (typeof x !== 'number' || typeof y !== 'number') {
        reject('Jeden z argumentów nie jest liczbą!');
      } else {
        resolve(x * y);
      }
    });
  };
  
  const callbackPomnoz = (wynik) => {
    console.log(wynik); // callback - wypisanie wyniku w konsoli
  };
  
  pomnozAsync(5, 10)
    .then(callbackPomnoz)
    .catch((error) => console.error('Błąd:', error));
  
  pomnozAsync('abc', 10)
    .then(callbackPomnoz)
    .catch((error) => console.error('Błąd:', error));
  
  // Zadanie 11
  const url = 'https://jsonplaceholder.typicode.com/posts';
  
  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Błąd pobierania danych');
      }
    })
    .then((data) => {
      // Destructuring obiektów do wypisania title i body każdego posta
      data.forEach(({ title, body }) => {
        console.log('Tytuł:', title);
        console.log('Treść:', body);
      });
    })
    .catch((error) => console.error(error.message));
  
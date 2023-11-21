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

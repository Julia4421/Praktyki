function szukaj() {
  const wyrazy = document.getElementById('wyrazy').value;
  const wynik = document.getElementById('wynik');
  
  const tablica = wyrazy.split(",").map(element => {
 
    return isNaN(element) ? element : parseFloat(element);
  });

  if (tablica.every(element => typeof element === 'number')) {
    
    const liczby = Array.from(new Set(tablica)).sort((a, b) => b - a);
    const najwieksza = liczby[1];

    wynik.textContent = `Drugi największy element: ${najwieksza}`;
  } 
  else if (tablica.every(element => typeof element === 'string')) {

    const stringi = tablica.sort((a, b) => b.length - a.length);
    const najdluzszy = stringi[1];

    wynik.textContent = `Drugi najdłuższy element: ${najdluzszy}`;
  } else {
    wynik.textContent = 'Tablica powinna zawierać tylko liczby lub tylko stringi.';
  }

  return false;
}

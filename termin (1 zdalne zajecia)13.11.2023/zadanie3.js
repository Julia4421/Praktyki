function porownaj(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
      return b - a;
  } else if (typeof a === 'string' && typeof b === 'string') {
      return b.length - a.length;
  }
  return 0;
}

function szukaj() {
  const wyraz = document.getElementById('wyraz');
  const wynikElement = document.getElementById('wynik');
  const slowo = wyraz.value;

  const tab = [];
  let sprawdzaneslowo = '';


  for (let i = 0; i < slowo.length; i++) {
      const znak = slowo[i];

      if (znak === ',') {
          tab.push(isNaN(sprawdzaneslowo) ? sprawdzaneslowo: parseFloat(sprawdzaneslowo));
          sprawdzaneslowo = ''; 
      } else {
        sprawdzaneslowo += znak; 
      }
  }

  tab.push(isNaN(sprawdzaneslowo) ? sprawdzaneslowo : parseFloat(sprawdzaneslowo));
  tab.sort(porownaj);

  const drugiElement = tab[1];
  if (typeof drugiElement === 'number') {
      wynikElement.textContent = `Drugi największy element: ${drugiElement}`;
  } else if (typeof drugiElement === 'string') {
      wynikElement.textContent = `Drugi najdłuższy element: ${drugiElement}`;
  } else {
      wynikElement.textContent = 'Tablica powinna zawierać tylko liczby lub tylko stringi.';
  }

  return false;
}

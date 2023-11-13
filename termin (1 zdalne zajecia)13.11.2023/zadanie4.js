function sprawdz() {
  const slowo1= document.getElementById('slowo1');
  const slowo2= document.getElementById('slowo2');
  const wynikElement = document.getElementById('wynik');

  if (czyAnagram(slowo1, slowo2)) {
      wynikElement.textContent = 'Słowa są anagramem.';
  } else {
      wynikElement.textContent = 'Słowa nie są anagramem.';
  }
  return false;
}

function czyAnagram(slowo1, slowo2) {
  if (slowo1.length !== slowo2.length) {
      return false;
  }
  const tab1 = [];
  const tab2 = [];

  for (let i = 0; i < slowo1.length; i++) {
      tab1.push(slowo1.charCodeAt(i));
      tab2.push(slowo2.charCodeAt(i));
  }

  for (let i = 0; i < tab1.length; i++) {
      if (tab1[i] !== tab2[i]) {
          return false;
      }
  }

  return true;
}

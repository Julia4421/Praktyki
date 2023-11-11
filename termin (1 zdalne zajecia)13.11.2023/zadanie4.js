function sprawdz() {
    const slowo1 = document.getElementById('slowo1').value;
    const slowo2 = document.getElementById('slowo2').value;

    const wynik = czyAnagramam(slowo1, slowo2);
  
    const wynikElement = document.getElementById('wynik');
    wynikElement.textContent = wynik ? 'Słowa są anagramami.' : 'Słowa nie są anagramami.';

    return false;
  }
  
  function czyAnagramam(slowo1, slowo2) {

    if (slowo1.length !== slowo2.length) {
      return false;
    }
  
    const sprawdz2 = slowo2.split('');
  
    for (let i = 0; i < slowo1.length; i++) {
      const indeksLitery = sprawdz2.indexOf(slowo1[i]);
  
      if (indeksLitery === -1) {
        return false;
      }

    }
  
    return true;
  }
  
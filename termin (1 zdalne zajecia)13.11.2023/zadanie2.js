
   function Palindrom(){
    const wyraz = document.getElementById('wprowadzonywyraz').value;
    const wynik = document.getElementById('wynik');
  
    if (wyraz === wyraz.split("").reverse().join("")) {
        wynik.textContent="palindrom";
    }else {
        wynik.textContent = 'nie palindrom';
    }
  
    return false;
  }
  
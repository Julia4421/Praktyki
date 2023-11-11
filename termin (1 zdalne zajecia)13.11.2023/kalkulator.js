function calculate(){
var a = parseFloat(document.getElementById('num1').value);
var b = parseFloat(document.getElementById('num2').value);
var dzialanie = document.getElementById('wybierz').value;
var wynik;

switch(dzialanie)
{
  case 'dodaj':
    wynik=a+b;
    break;

    case 'odejmij':
        wynik=a-b;
        break;

        case 'pomnoz':
            wynik=a*b;
            break;

            case 'podziel':
                if (b === 0 || a === 0) {
                  wynik = "Nie mozesz dzielic przez zero";
                } 
                
                else {
                  wynik = a / b;
                }
                break;
          
              default:
                wynik = "Blad";
 }

            document.getElementById('wynik').innerHTML = wynik;
}








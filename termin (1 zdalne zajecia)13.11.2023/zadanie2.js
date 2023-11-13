function Palindrom() {
    const wyraz = document.getElementById('wyraz');
    const slowo = wyraz.value;
    const wynikElement = document.getElementById('wynik');

    const tab1= [];

    for (let i = 0; i < slowo.length; i++) {
        tab1.push(slowo.charCodeAt(i));
    }

    let czyPalindrom = true;
    for (let i = 0; i <  tab1.length / 2; i++) {
        if ( tab1[i] !==  tab1[tab1.length - 1 - i]) {
            czyPalindrom = false;
            break;
        }
    }

    if (czyPalindrom) {
        wynikElement.textContent = "palindrom";
    } else {
        wynikElement.textContent = 'nie palindrom';
    }

    return false;
}

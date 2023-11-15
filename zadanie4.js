function sprawdz(form) {
    let slowo1 = sort(zamien(form.slowo1.value));
    let slowo2 = sort(zamien(form.slowo2.value));
    let sprawdz = true;
    const wynik = document.getElementById('wynik');
    
    
    for(let i = 0; i < slowo1.length; i++){
        if(slowo1[i] != slowo2[i]){
            sprawdz = false;
            break;
        }
    }
    if(sprawdz && slowo1.length == slowo2.length){
        document.getElementById("wynik").innerHTML = "Te słowa są anagrami";
        console.log(slowo1+"   "+slowo2);
    }else{
        document.getElementById("wynik").innerHTML = "Te słowa nie są anagrami";
        console.log(slowo1+"   "+slowo2);
    }
}

function zamien(slowo){
    let tab1 = [];
    for(let i=0; i<slowo.length; i++){
        tab1[i]=slowo.charCodeAt(i);
    }
    return tab1;
}

function sort(tab2){
    for (var i = 0; i < tab2.length; i++) { 
        for (var j = 0; j < (tab2.length - i - 1); j++) { 
            if (tab2[j] > tab2[j + 1]) { 
                var temp = tab2[j];
                tab2[j] = tab2[j + 1];
                tab2[j + 1] = temp;
            }
        }
    }
    return tab2;
}



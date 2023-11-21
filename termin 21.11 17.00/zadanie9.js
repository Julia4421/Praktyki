
class Promise {
    constructor() {
      this.status = 'oczekująca';
      this.wartosc = null;
    }
  
    rozwiazanie(wartosc) {
      setTimeout(() => {
        this.status = 'wykonana';
        this.wartosc = wartosc;
        console.log(this.wartosc); 
      }, 5000);
    }
  }
  
  const myPromise = new Promise();
  myPromise.rozwiazanie('Udało się!');
  
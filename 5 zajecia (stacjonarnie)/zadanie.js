let aktualny = 1;

 const wyswietl = (postId) => 
 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('tytul').textContent = post.title;
            document.getElementById('tekst').textContent = post.body;
        });
    
const cofnij = () => {
    if (aktualny > 1) {
        aktualny--;
        wyswietl(aktualny);
    }
};
const next = () => {
    aktualny++;
    wyswietl(aktualny);
};

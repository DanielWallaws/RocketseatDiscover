function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts') //essa é uma requisição GET (a padrão)
        .then(function(resultado) {
            console.log(resultado);
        })
        .catch(function(error){
            console.log("Deu problema!");
        
        
        });
}
document.addEventListener('DOMContentLoaded', () =>{
    // aqui van todas las funciones
    
    getPeliculas();
});



function getPeliculas(){
    console.log("esta es la funcion peliculas");
    const urlPeliculas = "data/movies.json";
    fetch(urlPeliculas)
    .then((response)=>{
        //console.log("esto es una promesa");
        //console.log(urlPeliculas);
        return response.json(); 
    })
    .then((data)=>{
        console.log(data);
        renderMovies(data);
    })
    function renderMovies(movies) {
        const contMovies = document.querySelector("#contenedorPelis");
        let html = '';
        movies.forEach(element => {
            const {Title,Year,Poster} = element;
            html += `
                <div class="card"  id="card">
                    <img src="${Poster}" alt="..." id="img">
                    <div class="card-body">
                        <h5 class="card-title">${Title}</h5>
                        <p class="card-text">Year ${Year}</p>

                        <a href="#" class="btn btn-primary">Detalles</a>
                    </div>
            </div>
            `;
        contMovies.innerHTML = html;
        });
            
    }

}




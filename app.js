document.addEventListener('DOMContentLoaded', () => {
    // aqui van todas las funciones    
    getPeliculas();
});

document.addEventListener('change',buscar);


function getPeliculas() {
    console.log("esta es la funcion peliculas");
    const urlPeliculas = "https://www.omdbapi.com/?apikey=fcdb07e5&s=batman";
    fetch(urlPeliculas)
        .then((response) => {
            //console.log("esto es una promesa");
            //console.log(urlPeliculas);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            renderMovies(data);
        })
    function renderMovies(movies) {
        const contMovies = document.querySelector("#contenedorPelis");
        let html = '';

        for (const x in movies.Search) {
            //console.log(x);
            const { Title, Year, Poster } = movies.Search[x];
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
            }
    }
}





function buscar() {
    const btnSearch = document.getElementById("text").value;
    const urlSearch = `https://www.omdbapi.com/?apikey=fcdb07e5&s=${btnSearch}`;
    alert(urlSearch);
    fetch(urlSearch)
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        renderMovies(data);
    })
function renderMovies(movies) {
    const contMovies = document.querySelector("#contenedorPelis");
    let html = '';
    for (const x in movies.Search) {
        const { Title, Year, Poster } = movies.Search[x];
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
        }
}
}
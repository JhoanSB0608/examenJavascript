// import { filtrarPorAño, filtrarPorActor, filtrarPorIMDb, consultarTitulos, consultarTitulosYAnios, consultarIdentificadoresYTitulos, consultarURLsYTipos, consultarInfoPeliculas } from "../js/modules/consult.js";

// console.log(await consultarTitulos())

let dataeRequest;
function getDataMovies(movies = '') {
    const URL = `https://search.imdbot.workers.dev/?q=${movies}`;
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        dataeRequest = data.description;
        console.log(dataeRequest);
        
        setInformation();    
    })
    .catch(error => {
        console.error('Error al obtener la información:', error);
    });
}

function setInformation() {
    const infoData = document.querySelector('.gallery');
    infoData.innerHTML = '';
    dataeRequest.forEach(element => {
        let tdv = document.createElement('div');
        tdv.setAttribute('class', 'card');
        tdv.innerHTML = `
        <h2>${element['#TITLE']}</h2>
        <img src="${element['#IMG_POSTER']}" alt="" width = "100px">
        <p><b>Rank:</b> ${element['#RANK']} </p>
        <p class="actors"><b>Actores:</b> ${element['#ACTORS']} </p>
        <p><b>${element['#YEAR']} </b></p>
        `;
        infoData.appendChild(tdv);
    });
    getDataClick();
}

function getDataClick() {
    const showInformation = document.querySelectorAll('.card');
    showInformation.forEach(item=> {
        item.addEventListener('click',()=> {
            showData(item.querySelector('h2').textContent); 
        });
        
    })
}
function showData(name){
    dataeRequest.forEach(item=>{
        if(item['#TITLE'] == name){
            const writeData = document.getElementById('dataMovie');
            writeData.innerHTML = `
            <h2>${item['#TITLE']}</h2>
            <p>Year: ${item['#YEAR']}</p>
            <p>IMBD ID: ${item['#IMDB_ID']}</p>
            <p>RANK: ${item['#RANK']}</p>
            <p>ACTORS: ${item['#ACTORS']}</p>
            <p>AKA: ${item['#AKA']}</p>
            <p>IMDB URL: ${item['#IMDB_URL']}</p>
            <p>IMDB IV: ${item['#IMDB_IV']}</p>`;
        }

    });
}
function showFilter(item) {
    const infoData = document.querySelector('.gallery');
    infoData.innerHTML = '';
    dataeRequest.forEach(element => {
        if(element['#TITLE'] == item) {
            let tdv = document.createElement('div');
            tdv.setAttribute('class', 'card');
            tdv.innerHTML = `
            <h2>${element['#TITLE']}</h2>
            <img src="${element['#IMG_POSTER']}" alt="" width = "100px">
            `;
            infoData.appendChild(tdv);
        }
    });
    getDataClick();
}

let search = document.getElementById('search');
search.addEventListener('click',()=> {
    const inputMovie = document.getElementById('inputMovie');
    getDataMovies(inputMovie.value);
});

getDataMovies();

let year = document.getElementById('YEAR');

year.addEventListener('click',()=> {
    const title = document.querySelector('.searchs');
    title.innerHTML = `
    <input id = "inputMovie" type="text" placeholder="Age">
    <button id="filterYear">Filter</button>`;
    filterYear();
});

function filterYear() {
    let filterYear = document.getElementById('filterYear');
    filterYear.addEventListener('click',()=> {
        const inputMovie = document.getElementById('inputMovie');
        dataeRequest.forEach(item => {
            if(item['#YEAR'] == inputMovie.value) {
                showFilter(item['#TITLE']);
            }
        });
    });
}

let actor = document.getElementById('ACTORS');
actor.addEventListener('click',()=> {
    const title = document.querySelector('.searchs');
    title.innerHTML = `
    <input id = "inputMovie" type="text" placeholder="Actor">
    <button id="filterActor">Filter</button>`;
    filterActor();
});
function filterActor() {
    let filterActor = document.getElementById('filterActor');
    filterActor.addEventListener('click',()=> {
        const inputMovie = document.getElementById('inputMovie');
        dataeRequest.forEach(item => {
            if(item['#ACTORS'] == inputMovie.value) {
                showFilter(item['#TITLE']);
            }
        });
    });
}
let rank = document.getElementById('RANK');
rank.addEventListener('click',()=> {
    const title = document.querySelector('.searchs');
    title.innerHTML = `
    <input id = "inputMovie" type="text" placeholder="Rank">
    <button id="filterRank">Filter</button>`;
    filterRank();
});
function filterRank() {
    let filterRank = document.getElementById('filterRank');
    filterRank.addEventListener('click',()=> {
        const inputMovie = document.getElementById('inputMovie');
        dataeRequest.forEach(item => {
            if(item['#RANK'] == inputMovie.value) {
                showFilter(item['#TITLE']);
            }
        });
    });
}



// Consulta los títulos de todas las películas.
export const consultarTitulos = async () => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let titulos = data.description.map(pelicula => pelicula["#TITLE"]);
        return titulos;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}

// Consulta los títulos y años de lanzamiento originales de todos los contenidos (películas y programas de TV).
export const consultarTitulosYAnios = async () => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let info = data.description.map(item => {
            return {
                title: item["#TITLE"],
                year: item["#YEAR"]
            };
        });
        return info;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}

// Consulta los identificadores y títulos de todas las películas.
export const consultarIdentificadoresYTitulos = async () => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let info = data.description.map(item => {
            return {
                id: item["#IMDB_ID"],
                title: item["#TITLE"]
            };
        });
        return info;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}

// Consulta las URL completas y los tipos de objetos (películas y programas de TV).
export const consultarURLsYTipos = async () => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let info = data.description.map(item => {
            return {
                url: item["#IMDB_URL"],
                type: item.hasOwnProperty("#YEAR") ? "Movie" : "TV Show"
            };
        });
        return info;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}

// Consulta los títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas.
export const consultarInfoPeliculas = async () => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let infoPeliculas = data.description.filter(item => item.hasOwnProperty("#YEAR")).map(item => {
            return {
                title: item["#TITLE"],
                year: item["#YEAR"],
                type: "Movie"
            };
        });
        return infoPeliculas;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}
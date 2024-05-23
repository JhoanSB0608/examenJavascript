// Filtrar películas por año.
export const filtrarPorAño = async (año) => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let películasFiltradas = data.description.filter(pelicula => {
            return pelicula["#YEAR"] === año; 
        });
        let nombresPelículas = películasFiltradas.map(pelicula => {
            return {
                name: pelicula["#TITLE"]
            };
        });
        return nombresPelículas;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}

// Filtrar películas por actor
export const filtrarPorActor = async (actor) => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let películasFiltradas = data.description.filter(pelicula => {
            return pelicula["#ACTORS"].includes(actor); 
        });
        let nombresPelículas = películasFiltradas.map(pelicula => {
            return {
                title: pelicula["#TITLE"],
                year: pelicula["#YEAR"],
            };
        });
        return nombresPelículas;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
}

// Filtrar películas por rango de IMDb.
export const filtrarPorIMDb = async (rangoMin, rangoMax) => {
    try {
        let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
        let data = await res.json();
        let películasFiltradas = data.description.filter(pelicula => {
            let rank = parseInt(pelicula["#RANK"]);
            return rank >= rangoMin && rank <= rangoMax;
        });
        return películasFiltradas;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
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
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js"

let btn = document.querySelectorAll("button");
let report__menu = document.querySelectorAll(".side-dropdown li button");
let report__details = document.querySelector(".report__details");

btn.forEach(val => {
    val.addEventListener("click", (e) => {
        for (let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        if (e.target.innerHTML == "Películas por año de lanzamiento.") {
            report__details.innerHTML = /*html*/`
                <my-details logic="filter_1" text="1. Filtrar películas por año."></my-details>
            
            `
        }
        if (e.target.innerHTML == "Películas por actor") {
            report__details.innerHTML = /*html*/`
                <my-details logic="filter_2" text="1. Filtrar películas por actor"></my-details>
              
            `
        }
        if (e.target.innerHTML == "Películas por rango de IMDb.") {
            report__details.innerHTML = /*html*/`
                <my-details logic="filter_3" text="1. Filtrar películas por rango de IMDb."></my-details>
            `
        }
        if (e.target.innerHTML == "Títulos de todas las películas.") {
            report__details.innerHTML = /*html*/`
                <my-details logic="consult_1" text="1. Consulta los títulos de todas las películas."></my-details>
               
            `
        }
        if (e.target.innerHTML == "Títulos y años de lanzamiento originales de todos los contenidos.") {
            report__details.innerHTML = /*html*/`
                <my-details logic="consult_2" text="1. Consulta los títulos y años de lanzamiento originales de todos los contenidos (películas y programas de TV)."></my-details>
                
            `
        }
        if (e.target.innerHTML == "Identificadores y títulos de todas las películas.") {
            report__details.innerHTML = /*html*/`
                <my-details logic="consult_3" text="1. Consulta los identificadores y títulos de todas las películas."></my-details>

            `
        }
        if (e.target.innerHTML == "URL completas y los tipos de objetos (películas y programas de TV).") {
            report__details.innerHTML = /*html*/`
                <my-details logic="consult_4" text="1. Consulta las URL completas y los tipos de objetos (películas y programas de TV)."></my-details>
            `
        }
        if (e.target.innerHTML == "Títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas.") {
            report__details.innerHTML = /*html*/`
                <my-details logic="consult_5" text="1. Consulta los títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas."></my-details>
            `
        }
    })
})

let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)
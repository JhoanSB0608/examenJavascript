import {
    filtrarPorAño, filtrarPorActor, filtrarPorIMDb, consultarTitulos, consultarTitulosYAnios, 
    consultarIdentificadoresYTitulos, consultarURLsYTipos, consultarInfoPeliculas 
} from "../modules/consult";


export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    async filtrarPorAñoDesign() {
        let data = await filtrarPorAño();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                </div>
            `
        })
    }
    async filtrarPorActorDesign() {
        let data = await filtrarPorActor();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    async filtrarPorIMDbDesign() {
        let data = await filtrarPorIMDb();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    async consultarTitulosDesign() {
        let data = await consultarTitulos();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    async consultarTitulosYAniosDesign() {
        let data = await consultarTitulosYAnios();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    async consultarIdentificadoresYTitulosDesign() {
        let data = await consultarIdentificadoresYTitulos();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    async consultarURLsYTiposDesign() {
        let data = await consultarURLsYTipos();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }
    async consultarInfoPeliculasDesign() {
        let data = await consultarInfoPeliculas();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo del cliente y su representante de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if (name == "logic" && now == "filter_1") this.filtrarPorAñoDesign()
        if (name == "logic" && now == "filter_2") this.filtrarPorActorDesign()
        if (name == "logic" && now == "filter_3") this.filtrarPorIMDbDesign()
        if (name == "logic" && now == "consult_1") this.consultarTitulosDesign()
        if (name == "logic" && now == "consult_2") this.consultarTitulosYAniosDesign()
        if (name == "logic" && now == "consult_3") this.consultarIdentificadoresYTitulosDesign()
        if (name == "logic" && now == "consult_4") this.consultarURLsYTiposDesign()
        if (name == "logic" && now == "consult_5") this.consultarInfoPeliculasDesign()
    }
}
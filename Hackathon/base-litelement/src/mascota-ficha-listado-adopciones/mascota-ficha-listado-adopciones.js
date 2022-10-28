import { LitElement, html } from 'lit-element';
import sandbox from '../sandbox/sandbox.js';

class MascotaFichaListadoAdopciones extends LitElement {

    static get properties() {
        return {
            nombre: {type: String},
            id: {type: Number},
            mascota: {type:Object},
            image:{type:Object}
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <div class="card h-100 ml-3">
                <img src="${this.image}" height="100" width="100" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                </div>
                <div class="card-footer row">
				    <button @click="${this.deleteAdopcion}" class="btn btn-danger col-6" data-toggle="modal" data-target="#exampleModalCenter"><strong>Borrar</strong></button>
                    <button @click="${this.infoQueso}" class="btn btn-primary col-6"><strong>Info</strong></button>
			    </div>                
            </div>            
        `;
    }

    // infoQueso(e) {
    //     console.log("newPerson en persona-sidebar");
    //     console.log("Se va a crear una nueva persona");
	// 	sandbox.dispatch('info-queso',{queso: {id:this.id,name:this.name,description:this.description,age:this.age,image:this.image,recommended:this.recommended}},this);
    // }

    deleteAdopcion(e) {
        console.log(this.id);
        sandbox.dispatch('abrir-modal',{id:this.id},this);
    }
}

customElements.define('mascota-ficha-listado-adopciones', MascotaFichaListadoAdopciones)
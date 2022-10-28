import { LitElement, html, css } from 'lit-element'; 


import sandbox from '../sandbox/sandbox.js';

class MascotaCardPostulation extends LitElement {  
    static get properties() {		
		return {
            id: {type: Number},
			name: {type: String},
            urlImg: {type: String},
            description: {type: String},
            age:{type:Number},
            createdAt:{type:String}

		};
	}	
    static get styles(){
        return css `
        .card {display:inline-block;}
        `;
    }
    constructor() {
        super();  
        this.id = 0;
        this.name = '';
        this.urlImg = '';
        this.description = '';
        this.age = 0;
        this.createdAt = '';
    }
    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <div class="card border-info mb-3" style="max-width: 18rem;">
                <img src="${this.urlImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${this.name}</h5>
                    <p class="card-text">Reseña: ${this.description}</p>
                    <p class="card-text">Edad: ${this.age} años</p>
                    <a href="#" class="btn btn-primary">Editar</a>
                    <button class="btn btn-danger" @click="${this._deleteAdopcion}">Cancelar Postulación</button>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${this.createdAt}</small>
                </div>
            </div>
        `;
    }
    _deleteAdopcion(){
        sandbox.dispatch('abrir-modal-adopcion',{
            id:this.id
        },this);
    }
}

customElements.define('mascota-card-postulation', MascotaCardPostulation);
import { LitElement, html, css } from 'lit-element'; 


import sandbox from '../sandbox/sandbox.js';

class MascotaCard extends LitElement {  
    static get properties() {		
		return {
            id: {type: Number},
			name: {type: String},
            urlImg: {type: String},
            description: {type: String},
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
        this.createdAt = '';
    }
    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <div class="card border-info mb-3" style="max-width: 18rem;">
                <img src="${this.urlImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">"${this.description}"</p>
                    <button class="btn btn-primary" @click="${this._infoAdopcion}">Info</button>
                    <button class="btn btn-danger" @click="${this._deleteAdopcion}">Cancelar adopcion</button>
                </div>
                <div class="card-footer">
                <small class="text-muted">${this.createdAt}</small>
                </div>
            </div>
        `;
    }
    _infoAdopcion(){
        sandbox.dispatch('info-modal-adopcion',{
            id:this.id,
            name:this.name,
            description: this.descriptionurl,
            url:this.urlImg
        },this);
    }
    _deleteAdopcion(){
        sandbox.dispatch('abrir-modal-adopcion',{
            id:this.id
        },this);
    }
    
}

customElements.define('mascota-card', MascotaCard);
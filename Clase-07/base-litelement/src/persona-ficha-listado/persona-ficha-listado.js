import { LitElement, html } from 'lit-element';

class PersonaFichaListado extends LitElement {

    static get properties() {
        return {
            fname: {type: String},
            yearsInCompany: {type: Number},
            profile: {type: String},
            photo: {type: Object}
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <div class="card h-100">
                <img src="${this.photo.src}" alt="${this.photo.alt}" height="200" width="50" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${this.fname}</h5>
                    <p class="card-text">${this.profile}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${this.yearsInCompany} años en la empresa</li>
                    </ul>
                </div> 
                <div class="card-footer">
                    <button @click="${this.deletePerson}" class="btn btn-danger col-5"><strong>X</strong></button>
                </div>	               
            </div>            
        `;
    }
    deletePerson(e) {
        console.log("deletePerson en persona-ficha-listado");
        console.log("Se va a borrar la persona de nombre " + this.fname); 
        
            this.dispatchEvent(
                new CustomEvent("delete-person", {
                        detail: {
                            name: this.fname
                        }
                    }
                )
            );
        }
}

customElements.define('persona-ficha-listado', PersonaFichaListado)
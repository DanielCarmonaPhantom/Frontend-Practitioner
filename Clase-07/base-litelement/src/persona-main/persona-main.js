import { LitElement, html } from 'lit-element';
import '../persona-ficha-listado/persona-ficha-listado.js';
import '../persona-form/persona-form.js'

class PersonaMain extends LitElement {
    
    static get properties() {
        return {
            people: {type: Array},
            showPersonForm: {type: Boolean}
        };
    }

    constructor() {
        super();

        this.people = [
            {
                name: "Ellen Ripley",
                yearsInCompany: 10,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Ellen Ripley"
                }, 
                profile: "Lorem ipsum dolor sit amet."
            }, {
                name: "Bruce Banner",
                yearsInCompany: 2,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Bruce Banner"
                }, 
                profile: "Lorem ipsum."
            }, {
                name: "Éowyn",
                yearsInCompany: 5,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Éowyn"
                }, 
                profile: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                name: "Turanga Leela",
                yearsInCompany: 9,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Turanga Leela"
                }, 
                profile: "Lorem ipsum dolor sit amet, consectetur adipisici elit."
            }, {
                name: "Tyrion Lannister",
                yearsInCompany: 1,
                photo: {
                    "src": "./img/persona.jpg",
                    "alt": "Tyrion Lannister"
                }, 
                profile: "Lorem ipsum."
            }
        ];
        this.showPersonForm = false;
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <h2 class="text-center">Personas</h2>
            <div class="row" id="peopleList">
                <div class="row row-cols-1 row-cols-sm-4">
                ${this.people.map(
                    person => html`<persona-ficha-listado 
                                        fname="${person.name}" 
                                        yearsInCompany="${person.yearsInCompany}"
                                        profile="${person.profile}"
                                        .photo="${person.photo}"
                                        @delete-person="${this.deletePerson}">
                                    >
                                </persona-ficha-listado>`
                )}
                </div>
            </div>
            <div class="row">
                <persona-form id="personForm" class="d-none border rounded border-primary"
                    @persona-form-close="${this.personFormClose}"
                    @persona-form-store="${this.personFormStore}" >
                </persona-form>
            </div>
        `;
    }
    deletePerson(e) { 
        console.log("deletePerson en persona-main");
        console.log("Se va a borrar la persona de nombre " + e.detail.name);
      
        this.people = this.people.filter(
            person => person.name != e.detail.name
        );
    }
    updated(changedProperties) { 
        console.log("updated");	
        if (changedProperties.has("showPersonForm")) {
            console.log("Ha cambiado el valor de la propiedad showPersonForm en persona-main");
            if (this.showPersonForm === true) {
                this.showPersonFormData();
            } else {
                this.showPersonList();
            }
        }
    }
    showPersonList() {
        console.log("showPersonList");
        console.log("Mostrando listado de personas");
        this.shadowRoot.getElementById("peopleList").classList.remove("d-none");
        this.shadowRoot.getElementById("personForm").classList.add("d-none");	
    }  
    showPersonFormData() {
        console.log("showPersonFormData");
        console.log("Mostrando formulario de persona");
        this.shadowRoot.getElementById("personForm").classList.remove("d-none");	  
        this.shadowRoot.getElementById("peopleList").classList.add("d-none");	
    } 
    personFormClose() {
        console.log("personFormClose");
        console.log("Se ha cerrado el formulario de la persona");
        this.showPersonForm = false;
    }
    personFormStore(e) {
        console.log("personFormStore");
        console.log("Se va a almacenar una persona");	
                            
        this.people.push(e.detail.person);
      
        console.log("Persona almacenada");	
        this.showPersonForm = false;
    }
}

customElements.define('persona-main', PersonaMain)
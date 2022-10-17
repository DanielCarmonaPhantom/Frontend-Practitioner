import { LitElement, html } from 'lit-element';  
class PersonaForm extends LitElement {
	static get properties() {
		return {	
            person: {type: Object}		
		};
	}

    constructor() { 
        super();		
        this.person = {};
    }

	render() {
		return html`	
			<!-- Enlace Bootstrap -->		
			<div>
                <form>
                    <div class="form-group">
                        <label>Nombre Completo</label>
                        <input type="text" @input="${this.updateName}" id="personFormName" class="form-control" placeholder="Nombre Completo"/>
                    <div>
                    <div class="form-group">
                        <label>Perfil</label>
                        <textarea @input="${this.updateProfile}" class="form-control" placeholder="Perfil" rows="5"></textarea>
                    <div>
                    <div class="form-group">
                        <label>Años en la empresa</label>
                        <input type="text" @input="${this.updateYearsInCompany}" class="form-control" placeholder="Años en la empresa"/>
                    <div>
                    <button @click="${this.goBack}" class="btn btn-primary"><strong>Atrás</strong></button>
                    <button @click="${this.storePerson}" class="btn btn-success"><strong>Guardar</strong></button>
                </form>
			</div>
		`;
	}    
    goBack(e) {
        console.log("goBack");	  
        e.preventDefault();	
        this.dispatchEvent(new CustomEvent("persona-form-close",{}));	
    }
    updateName(e) {
        console.log("updateName");
        console.log("Actualizando la propiedad name con el valor " + e.target.value);
        this.person.name = e.target.value;
    }
    updateProfile(e) {
        console.log("updateProfile");
        console.log("Actualizando la propiedad profile con el valor " + e.target.value);
        this.person.profile = e.target.value;
    }
    updateYearsInCompany(e) {
        console.log("updateYearsInCompany");
        console.log("Actualizando la propiedad yearsInCompany con el valor " + e.target.value);
        this.person.yearsInCompany = e.target.value;
    }
    storePerson(e) {
        console.log("storePerson");
        e.preventDefault();
        
        this.person.photo = {
            "src": "./img/persona.jpg",
            "alt": "Persona"
        };
            
        console.log("La propiedad name vale " + this.person.name);
        console.log("La propiedad profile vale " + this.person.profile);
        console.log("La propiedad yearsInCompany vale " + this.person.yearsInCompany);	
            
        this.dispatchEvent(new CustomEvent("persona-form-store",{
            detail: {
                person:  {
                        name: this.person.name,
                        profile: this.person.profile,
                        yearsInCompany: this.person.yearsInCompany,
                        photo: this.person.photo
                    }
                }
            })
        );
    }
    
}  
customElements.define('persona-form', PersonaForm)  
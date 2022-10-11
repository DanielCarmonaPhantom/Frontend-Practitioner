import { LitElement, html } from 'lit-element';
  
class FichaPersona extends LitElement {
    static get properties() {
		return {
			name: {type: String},			
			yearsInCompany: {type: Number},
            personInfo: {type: String},			
			photo: {type: Object}			
		};
	}
    constructor() {
		// Always calls super() first.
		super();
	
		this.name = "Prueba Nombre";		
		this.yearsInCompany = 12;
        this.updatePersonInfo();
		this.photo = {
			src: "./img/persona.jpg",
			alt: "foto persona"			
		};			
	}
	render() {
		return html`
			<div>
                <h1>Hola ${this.name}</h1>
				<label for="fname">Nombre Completo</label>
				<input type="text" id="fname" name="fname" value="${this.name}" @input="${this.updateName}"></input>
				<br />						
				<label for="yearsInCompany">Años en la empresa</label>
				<input type="text" name="yearsInCompany" value="${this.yearsInCompany}" @input="${this.updateyearsInCompany}"></input>
				<br />			
                <input type="text" name="personInfo" value="${this.personInfo}" disabled></input>
			    <br />
				<img src="${this.photo.src}" height="200" width="200" alt="${this.photo.alt}">			
			</div>
		`;
	}
    // changedProperties is a Map. 
    updated(changedProperties) {
        if (changedProperties.has("name")) {
            console.log("Propiedad name cambiada anterior era " + changedProperties.get("name") + " nuevo es " + this.name);
        }
        if (changedProperties.has("yearsInCompany")) {
            console.log("Propiedad yearsInCompany cambiada valor anterior era " + changedProperties.get("yearsInCompany") + " nuevo es " + this.yearsInCompany);
            this.updatePersonInfo();
        }
    }
    updateName(e) {
        console.log("updateName");
        this.name = e.target.value;
    }
    updateyearsInCompany(e) {
        console.log("updateyearsInCompany");
        this.yearsInCompany = e.target.value;
    }
    updatePersonInfo() {

        console.log("updatePersonInfo");
        console.log("yearsInCompany vale " + this.yearsInCompany);
    
        if (this.yearsInCompany >= 7) {
            this.personInfo = "lead";
        } else if (this.yearsInCompany >= 5) {
            this.personInfo = "senior";
        } else if (this.yearsInCompany >= 3) {
            this.personInfo = "team";
        } else {
            this.personInfo = "junior";
        }
    }
}  
customElements.define('ficha-persona', FichaPersona) 
import { LitElement, html, css } from 'lit-element'; 

import './mascotas-card-adopted.js'

import sandbox from '../sandbox/sandbox.js';



export class MascotasApp extends LitElement {  
    static get properties() {		
		return {
			src:{type:String},
            mascotas:{type:Array},


		};
	}	
    static get styles(){
        return css `

        `;
    }
    constructor() {
        super();  
        this.src = "";
        this.mascotas=[];

        sandbox.on('update-pets',this._updatePets.bind(this)); 

    }
    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

            <div class='container mt-4'>
            <h1>Adopta una mascota</h1>
                <div class="row">
                    <div class='col-12'
                        <ul>
                        ${this.mascotas.map(function (mascota) {
                            return html `                            
                                <mascota-card-adopted name="${mascota.name}" urlImg='${mascota.image.src}' description='${mascota.description}' age='${mascota.age}' createdAt='${mascota.createdAt}'></mascota-card-adopted>
                            `;
                        })}
                        </ul>
                    </div>
                </div>
            </div>
            
        `;
    }
    updated(changedProperties){
        if(changedProperties.has("src")) {
            this._pintarMascotas()                
        }
    }
    _pintarMascotas(){
        this.mascotas=[];
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let apiResponse = JSON.parse(xhr.responseText);
            this.mascotas = apiResponse.filter(item => item.status==="postulate")           
        }
        }.bind(this);
        console.log(this.src+'/mascotas')
        xhr.open("GET",this.src+'/mascotas');
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.send();
    }
    _updatePets(){
        this.mascotas=[];
        this._pintarMascotas()    
    }
}

customElements.define('mascotas-app', MascotasApp); 


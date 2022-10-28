

import { LitElement, html, css } from 'lit-element'; 
import sandbox from '../sandbox/sandbox.js';

import '../mascotas/mascota-card.js'
import '../mascotas/mascotas-card-postulation.js'

import '../profile/postulate.js'
import '../my-app/app-link.js'

import '../modals/eliminated-modal.js'
import '../modals/info-modal.js'

class ProfileApp extends LitElement {  
    static get properties() {		
		return {
			src:{type:String},
            idUser:{type:String},
            srcProfile:{type:String},
            adopciones:{type:String},
            postulaciones:{type:Array},
		};
	}	
    static get styles(){
        return css `

        `;
    }
    constructor() {
        super();  
        this.src = "";
        this.idUser = 0;
        this.srcProfile = '';
        this.adopciones=[];
        this.postulaciones=[];

        sandbox.on('delete-adoption',this._obtenerAdopciones.bind(this)); 

        sandbox.on('update-postulations',this._updatePets.bind(this)); 

    }

    showDialog(id){
        let modalEliminar = this.shadowRoot.getElementById("modalEliminar");
        modalEliminar.classList.add('show');
        modalEliminar.style.display="block";
        this.id=id;
      }
    
    
    esconderDialog(){
        var modalElimiar = this.shadowRoot.getElementById("modalEliminar");
        modalElimiar.classList.remove('show');
        modalElimiar.style.display="none";
      }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            

            <div class='container mt-4'>
            <h1>Perfil</h1>
                <div class="row">
                    <div class='col-12 mt-3'>
                    <h2>Adopciones</h2>
                        <ul class='mt-4'>
                        ${this.adopciones.map(function (mascota) {
                            return html `                            
                                <mascota-card id="${mascota.id}" name="${mascota.name}" urlImg='${mascota.image.src}' age='${mascota.age}' description='${mascota.description}' createdAt='${mascota.createdAt}'></mascota-card>
                            `;
                        })}
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class='col-12 mt-3'>
                    <h2>Postulaciones</h2>
                        <ul class='mt-4'>
                        ${this.postulaciones.map(function (mascota) {
                            return html `                            
                                <mascota-card-postulation id="${mascota.id}" name="${mascota.name}" urlImg='${mascota.image.src}' age='${mascota.age}' description='${mascota.description}' createdAt='${mascota.createdAt}'></mascota-card-postulation>
                            `;
                        })}
                        </ul>
                    </div>
                </div>
            </div>
            <eliminated-modal></eliminated-modal>
            <info-modal></info-modal>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
        `;
    }
    updated(changedProperties){        
        
        if(changedProperties.has("srcProfile")) {
            this._obtenerAdopcionesPostulaciones(this.idUser)              
        }
        
    }
    _obtenerAdopcionesPostulaciones(id){       
        console.log("Entro a postulaciones") 
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let apiResponse = JSON.parse(xhr.responseText);            
            let user = apiResponse;
            this._pintarAdopciones(user.adopciones)
            this._pintarPostulaciones(user.postulaciones)
        }
        }.bind(this);
        xhr.open("GET",this.srcProfile + '/users/' + id);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.send();
    }
    _pintarAdopciones(array){
        array.forEach(element => {
            
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status === 200){
                    let apiResponse = JSON.parse(xhr.responseText);                    
                    this.adopciones = [...this.adopciones, apiResponse]                   
                                    
                }
            }.bind(this);
            xhr.open("GET", this.srcProfile + '/mascotas/' + element);
            xhr.setRequestHeader('Cache-Control', 'no-cache');
            xhr.send();
        });       
        
    }
    _pintarPostulaciones(array){
        array.forEach(element => {            
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status === 200){
                    let apiResponse = JSON.parse(xhr.responseText);                    
                    this.postulaciones = [...this.postulaciones, apiResponse]                   
                                    
                }
            }.bind(this);
            xhr.open("GET", this.srcProfile + '/mascotas/' + element);
            xhr.setRequestHeader('Cache-Control', 'no-cache');
            xhr.send();
        });       
        
    }
    _obtenerAdopciones(e){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let apiResponse = JSON.parse(xhr.responseText);            
            let user = apiResponse;
            this._eliminatedAdoption(this.idUser, e.id,  user.adopciones)
            
        }
        }.bind(this);

        xhr.open("GET",this.srcProfile + '/users/' + this.idUser);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.send();
    }
    _eliminatedAdoption(idUser, idMascota,  adopcionesAntiguas){

        var adopcionesNuevas = adopcionesAntiguas.filter(function(adoptions)
        {
                return adoptions!=idMascota.id;
        });
        console.log(adopcionesNuevas)
        var body = {'adopciones': adopcionesNuevas}

		let xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if (xhr.status === 200){
				let apiResponse = JSON.parse(xhr.responseText); 
                this.adopciones=[];
                this.postulaciones=[];
                this._updatePet(idMascota)
                this._obtenerAdopcionesPostulaciones(idUser)            
			}
		}.bind(this);
		xhr.open("PATCH", this.srcProfile + '/users/' + idUser);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(body));
    }
    _updatePet(idMascota){

        var body = {"status": "postulate"}

		let xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if (xhr.status === 200){
				let apiResponse = JSON.parse(xhr.responseText);    
                sandbox.dispatch('update-pets',{},this);

			}
		}.bind(this);

		xhr.open("PATCH", this.srcProfile + '/mascotas/' + idMascota.id);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(body));
    }
    _updatePets(){
        this.adopciones=[];
        this.postulaciones=[];            
        this._obtenerAdopcionesPostulaciones(this.idUser)
    }

    
}

customElements.define('profile-app', ProfileApp);


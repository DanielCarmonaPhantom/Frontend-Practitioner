import {LitElement, html, css} from 'lit-element';

import './postulate-input.js'

import sandbox from '../sandbox/sandbox.js';

class PostulatePet extends LitElement{
    static get properties() {
		return {
            src:{type:String},
            idUser:{type:String}
		};
	}

    static get styles (){
        return css `
            

    `}
    constructor(){
        super();

        sandbox.on('add-postulation',this._postPet.bind(this)); 
        this.src = "http://localhost:3000"
        this.idUser = 0;


    }
    render (){    
        return html `
            <postulate-pet-input></postulate-pet-input>
        `
    }
    _postPet(e){
        
		var body =JSON.stringify(e);

		let xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if (xhr.status === 201){
				let apiResponse = JSON.parse(xhr.responseText);
                let idMascota = apiResponse.id
                this._obtenerPostulaciones(this.idUser, idMascota)
                
			}
		}.bind(this);
		xhr.open("POST", this.src + '/mascotas');
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(body);
	}

    
    _obtenerPostulaciones(idUser, idMascota){        
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let apiResponse = JSON.parse(xhr.responseText);            
            let user = apiResponse;
            console.log(user.postulaciones)
            this._linkpet(idUser, idMascota,  user.postulaciones)
            
        }
        }.bind(this);
        
        xhr.open("GET",this.src + '/users/' + idUser);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.send();
    }


    _linkpet(idUser, idMascota,  postulacionesAntiguas){
        
        var postulacionesNuevas = [...postulacionesAntiguas, idMascota]

        var body = {'postulaciones': postulacionesNuevas}

		let xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if (xhr.status === 200){
				let apiResponse = JSON.parse(xhr.responseText); 
                sandbox.dispatch('postulation-created',{

                },this);               
			}
		}.bind(this);
		xhr.open("PATCH", this.src + '/users/' + idUser);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(body));
    }
    

}


customElements.define('postulate-pet', PostulatePet)
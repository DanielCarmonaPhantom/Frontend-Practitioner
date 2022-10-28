import {LitElement, html, css} from 'lit-element';
import sandbox from '../sandbox/sandbox.js';


class PostulatePetInput extends LitElement{
    static get properties() {
		return {
		name: { type: String },
        description: { type: String },
        type: { type: String },
        age: { type: Number },
		};
	}

    static get styles (){
        return css `


    `}
    constructor(){
        super();

        this.name = '';
        this.description = '';
        this.type = '';
        this.password = '';
        this.age = 0;
 


    }
    render (){    
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    </form>
                    <form class='mt-3'>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre de la mascota</label>
                        <input type="text" class="form-control" id="name"  @input="${this.updateName}">  
                    </div>                
                    <div class="mb-3">
                        <label for="description" class="form-label">Informacion</label>
                        <textarea class="form-control"" id="description" style="height: 100px" @input="${this.updateDescription}"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="type" class="form-label">Especie</label>
                        <input type="text" class="form-control" id="type" @input="${this.updateType}">   
                    </div>

                    <div class="mb-3">
                        <label for="age" class="form-label">Años de la mascota</label>
                        <input type="text" class="form-control" id="age" @input="${this.updateAge}">  
                    </div>
                    
                    <div class="d-grid gap-2 mt-3">
                        <button class="btn btn-secondary" type="button" @click="${this._addPostulation}">Crear postulacion</button>
                    </div>

                    </form>
                </div>
            </div>
        </div>
        `
    }
    _addPostulation(){
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();

        sandbox.dispatch('add-postulation',{
            'name':this.name,            
            'description':this.description,
            "age": this.age,
            'type':this.type,
            "status": "postulate",
            "createdAt": "Postulado el "+ day + '/' + month + '/' + year,
            "image": {
                "src": "./img/perro.jpg"
              }

        },this);	
    }
    updateName(e){
        this.name=e.target.value;
    }
    updateDescription(e){
        this.description=e.target.value;
    }
    updateType(e){
        this.type=e.target.value;
    }
    updateAge(e){
        this.age=e.target.value;
    }


}


customElements.define('postulate-pet-input', PostulatePetInput)
import { LitElement, html } from 'lit-element';
import '../mascota-ficha-listado-adopciones/mascota-ficha-listado-adopciones.js';
// import '../queso-ficha-listado/queso-ficha-listado.js';
// import '../queso-form/queso-form.js'

import '../mascota-eliminar-dialog-adopciones/mascota-eliminar-dialog-adopciones.js';
import sandbox from '../sandbox/sandbox.js';
// import '../persona-form/persona-form.js'
class MascotaPrincipal extends LitElement {
    
    static get properties() {
        return {
            src:{type:String},
            adopcionesUsuario: {type: Array},
            postulacionesUsuario:{type:Array},
            showPersonForm: {type: Boolean},
            auxiliar: {type:Object},
            quesos:{type:Array},
            userId:{type:Number},
        };
    }

    constructor() {
        super();
        this.src="";
        this.quesos=[];
        this.adopcionesUsuario=[];
        this.postulacionesUsuario=[];
        this.showPersonForm = false;
        this.userId=1;
        sandbox.on('new-queso',this.setShowPersonForm.bind(this));
        sandbox.on('info-queso',this.setShowPersonForm.bind(this));
        sandbox.on('delete-mascota-adopciones',this.eliminarAdopciones.bind(this));
        sandbox.on('delete-mascota-postulaciones',this.eliminarPostulaciones.bind(this));
    }

    setShowPersonForm(queso){
        this.showPersonForm = true;
        this.auxiliar = queso;
        if(Object.entries(queso).length ==! 0){
             sandbox.dispatch('datos-queso',queso,this);
        }
    }

    
    render() {
        return html`
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
             <h2 class="Adopciones">Mis adopciones</h2>
            <div class="mt-2" id="quesoList">
                <div class="row row-cols-1 row-cols-sm-4 m-4">
                    ${this.adopcionesUsuario.map(
                    function(element)
                        {
                            return html `
                                <mascota-ficha-listado-adopciones
                                    nombre="${element.nombre}"
                                    .image="${element.image.src}"
                                    id="${element.id}"
                                ></mascota-ficha-listado-adopciones>`;
                        }.bind(this)
                    )}
                </div>
            </div>
            <h2 class="Adopciones">Mis postulaciones</h2>
            <div class="mt-2" id="quesoList">
                <div class="row row-cols-1 row-cols-sm-4 m-4">
                    ${this.postulacionesUsuario.map(
                    function(element)
                        {
                            return html `
                                <mascota-ficha-listado-adopciones
                                    nombre="${element.nombre}"
                                    .image="${element.image.src}"
                                    id="${element.id}"
                                ></mascota-ficha-listado-adopciones>`;
                        }.bind(this)
                    )}
                </div>
            </div>
            <div class="row">
                    <queso-form id="quesoForm" class="d-none col-10 container"
                        @queso-form-close="${this.quesoFormClose}"
                        @queso-form-store="${this.agregar}"
                        @queso-form-edit="${this.editar}">
                    </queso-form>
            </div>
            <mascota-eliminar-dialog-adopciones></mascota-eliminar-dialog-adopciones>
            <mascota-aliminar-dialog-postulaciones></mascota-aliminar-dialog-postulaciones>
        `;
    }

    updated(changedProperties){
        this.dispatchCount();
        if(changedProperties.has("src")) {
            this.getAdopciones(this.userId);
            this.getPostulaciones(this.userId);
        }
        if (changedProperties.has("showPersonForm")) {
            if (this.showPersonForm === true) {
                this.showPersonFormData();
            } else {
                this.showPersonList();
            }
        }
    }

    getAdopciones(idUser){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            let rutas = APIResponse.adopciones;
            rutas.forEach(id => this.getMascostaAdop(id) );
            this.requestUpdate();
        }
        }.bind(this);
        xhr.open("GET",this.src+"/"+"Users/"+idUser);
        xhr.send();
    }

    getMascostaAdop(ruta){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            this.adopcionesUsuario=[...this.adopcionesUsuario,APIResponse];
        }
        }.bind(this);
        xhr.open("GET",ruta);
        xhr.send();
    }

    getPostulaciones(idUser){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            let rutas = APIResponse.postulaciones;
            //console.log(rutas);
            rutas.forEach(ruta => this.getMascotaPostu(ruta) );
            this.requestUpdate();
        }
        }.bind(this);
        xhr.open("GET",this.src+"/"+"Users/"+idUser);
        xhr.send();
    }

    getMascotaPostu(ruta){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            this.postulacionesUsuario=[...this.postulacionesUsuario,APIResponse];
        }
        }.bind(this);
        xhr.open("GET",ruta);
        xhr.send();
    }

    

    agregar(e)
    {
        var queso={"name":e.detail.name,"description":e.detail.description,"age":e.detail.age,"image":e.detail.image,"recommended":e.detail.recommended};
        this.addQueso(queso);
    }

    addQueso(queso){
        var body = JSON.stringify(queso);
        let xhr = new XMLHttpRequest();
        xhr.onload =function(){
            if(xhr.status === 201){
            let APIResponse = JSON.parse(xhr.responseText);
              this.quesos.push(APIResponse);
              this.getQuesos();
              this.showPersonForm = false;
            }
        }.bind(this);
        xhr.open("POST",this.src);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }

    editar(e){
        console.log("entrando a la funcion editar");
        var queso={"id":e.detail.id,"name":e.detail.name,"description":e.detail.description,"age":e.detail.age,"image":e.detail.image,"recommended":e.detail.recommended};
        this.editarQueso(queso);
    }

    editarQueso(queso){
        var body = JSON.stringify(queso);
        let xhr = new XMLHttpRequest();
        xhr.onload =function(){
            if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            console.log(APIResponse);
              this.getQuesos();
              this.showPersonForm = false;
            }
        }.bind(this);
        xhr.open("PUT",this.src+"/"+queso.id);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }

    eliminarAdopciones(e){
        this.crearUsuarioModificadoAdopciones(e.id.id,this.userId);
    }

    crearUsuarioModificadoAdopciones(idAdopcion,userId){
        let rutaAdopcion = this.src + "/mascotas/"+idAdopcion;
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            let usuarioActual = APIResponse;
            let arregloAdopcionesActual =APIResponse.adopciones;
            let arregloAdopcionesNuevo = arregloAdopcionesActual.filter(element => element !== rutaAdopcion);
            var usuarioNuevo={"id":usuarioActual.id,"password":usuarioActual.password,"adopciones":arregloAdopcionesNuevo,"postulaciones":usuarioActual.postulaciones};
            this.deleteAdopcion(usuarioNuevo);
        }
        }.bind(this);
        xhr.open("GET",this.src+"/"+"Users/"+userId);
        xhr.send();
    }

    deleteAdopcion(user){
        console.log(this.src+"/"+user.id);
        var body = JSON.stringify(user);
        let xhr = new XMLHttpRequest();
        xhr.onload =function(){
            if(xhr.status === 200){
              let APIResponse = JSON.parse(xhr.responseText);
              this.adopcionesUsuario=[];
              this.getAdopciones(user.id);
              this.showPersonForm = false;
            }
        }.bind(this);
        xhr.open("PUT",this.src+"/users/"+user.id);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }

    eliminarPostulaciones(){
        this.crearUsuarioModificadoPostulaciones(e.id.id,this.userId);
    }

    crearUsuarioModificadoPostulaciones(idPostulacion,userId){
        let rutaPostulacion = this.src + "/mascotas/"+idPostulacion;
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        if(xhr.status === 200){
            let APIResponse = JSON.parse(xhr.responseText);
            let usuarioActual = APIResponse;
            let arregloPostulacionesActual =APIResponse.postulaciones;
            let arregloPostulacionesNuevo = arregloPostulacionesActual.filter(element => element !== rutaPostulacion);
            var usuarioNuevo={"id":usuarioActual.id,"password":usuarioActual.password,"adopciones":usuarioActual.adopciones,"postulaciones":arregloPostulacionesNuevo};
            this.deletePostulacion(usuarioNuevo);
        }
        }.bind(this);
        xhr.open("GET",this.src+"/"+"Users/"+userId);
        xhr.send();
    }

    deletePostulacion(user){
        //console.log(this.src+"/"+user.id);
        var body = JSON.stringify(user);
        let xhr = new XMLHttpRequest();
        xhr.onload =function(){
            if(xhr.status === 200){
              let APIResponse = JSON.parse(xhr.responseText);
              this.postulacionesUsuario=[];
              this.getPostulaciones(user.id);
              this.showPersonForm = false;
            }
        }.bind(this);
        xhr.open("PUT",this.src+"/users/"+user.id);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }


    quesoFormClose() {
        console.log("Se ha cerrado el formulario de la persona");
        this.showPersonForm = false;
    }

    showPersonList() {
        this.shadowRoot.getElementById("quesoList").classList.remove("d-none");
        this.shadowRoot.getElementById("quesoForm").classList.add("d-none");	
    }

    showPersonFormData() {
        this.shadowRoot.getElementById("quesoForm").classList.remove("d-none");	  
        this.shadowRoot.getElementById("quesoList").classList.add("d-none");
    }

    dispatchCount(){
        sandbox.dispatch('count-quesos',{'count':this.quesos.length},this);
     }
}

customElements.define('mascota-principal', MascotaPrincipal)
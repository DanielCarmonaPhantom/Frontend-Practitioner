import { LitElement, html, css } from 'lit-element';  
import sandbox from '../sandbox/sandbox.js';



class SignUpInput extends LitElement {  
    
    
    static get styles(){
        return css `
            .form{
                background-color: #fff;
                border-radius: 5px;
                padding: 60px 60px;
            }
        `;
    }
    constructor() {
        super();

        this.name = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.addres = '';
        this.city = '';
        this.house = '';
        this.housechecket = false;
        this.pets = false;
        this.photos = false;
        this.adopciones = [],
        this.postulaciones = [];

    }
    render() {
        return html`
            <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <div class ='form'>
                <h1>Registrarse</h1>
                
                <form class='mt-3'>
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name"  @input="${this.updateName}">  
                </div>                
                <div class="mb-3">
                    <label for="lastName" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="lastName" @input="${this.updateLastName}">  
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" @input="${this.updateEmail}">   
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" @input="${this.updatePassword}">
                </div>
                <div class="mb-3">
                    <label for="addres" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="addres" @input="${this.updateAddres}">  
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">Ciudad</label>
                    <input type="text" class="form-control" id="city" @input="${this.updateCity}">  
                </div>  
                <div class="mb-3">
                    <label for="house" class="form-label">¿Por qué deseas adoptar?</label>
                    <input type="text" class="form-control" id="house" @input="${this.updateHouse}">  
                </div>
                <div class="mb-3">
                    <label class="form-label">Casa propia o rentada</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @input="${this.updateHouseChecket}">
                        <label class="form-check-label" for="flexRadioDefault1">
                        Propia
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked @input="${this.updateHouseChecket}">
                        <label class="form-check-label" for="flexRadioDefault2">
                        Rentada
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">¿Otras mascotas?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" @input="${this.updatePets}">
                        <label class="form-check-label" for="flexRadioDefault3">
                        Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" checked @input="${this.updatePets}">
                        <label class="form-check-label" for="flexRadioDefault4">
                        No
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Aceptas mandar fotos cada mes </label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" @input="${this.updatePhotos}">
                        <label class="form-check-label" for="flexRadioDefault3">
                        Si
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault4" checked @input="${this.updatePhotos}">
                        <label class="form-check-label" for="flexRadioDefault4">
                        No
                        </label>
                    </div>
                </div>                
                
                <div class="mb-3 form-check mb-5">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Acepta Terminos y Condiciones</label>
                </div>
                <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-secondary" type="button" @click="${this.addUser}">Registrarse</button>
                </div>
                </form>
            </div>
        `;
    }
    addUser(){
        sandbox.dispatch('add-user',{
            'name':this.name,            
            'lastName':this.lastName,
            'email':this.email,
            'password': this.password,
            'addres':this.addres,
            'city':this.city,
            'house':this.house,
            'housechecket':this.housechecket,
            'pets':this.pets,
            'photos':this.photos,
            'adopciones':this.adopciones,
            'postulaciones':this.postulaciones
        },this);	
    }
    updateName(e){
        this.name=e.target.value;
    }
    updateLastName(e){
        this.lastName=e.target.value;
    }
    updateEmail(e){
        this.email=e.target.value;
    }
    updatePassword(e){
        this.password=e.target.value;
    }
    updateAddres(e){
        this.addres=e.target.value;
    }
    updateCity(e){
        this.city=e.target.value;
    }
    updateHouse(e){
        this.house=e.target.value;
    }
    updateHouseChecket(e){
        this.housechecket=e.target.value;
    }
    updatePets(e){
        this.pets=e.target.value;
    }
    updatePhotos(e){
        this.photos=e.target.value;
    } 
}

customElements.define('sign-up-input', SignUpInput)
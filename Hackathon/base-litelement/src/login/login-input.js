import { LitElement, html, css } from 'lit-element';  
import sandbox from '../sandbox/sandbox.js';



class LoginInputDos extends LitElement {  
    
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

        this.email = '';
        this.password = '';        
    }
    render() {
        return html`
            <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <div class ='form'>
                <h1>Login</h1>                
                <form class='mt-5'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" @input="${this.updateEmail}">   
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" @input="${this.updatePassword}">
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button" @click="${this.login}">Ingresar</button>
                    </div>
                    <div class="d-grid gap-2 mt-2 mb-2">
                        <button class="btn btn-secondary" type="button" @click="${this._refresh}">Registrarse</button>
                    </div>
                    <p>Si no cuentas con alguna cuenta, puedes registrarte</p>
                </form>
            </div>
        `;
    }
    updateEmail(e){
        this.email=e.target.value;
    }
    updatePassword(e){
        this.password=e.target.value;
    }
    login(){
        sandbox.dispatch('login-user',{
            'email':this.email,
            'password':this.password,
        },this);
    }
    _refresh(){
        sandbox.dispatch('refres-profile',{

        },this);
    }

 
}

customElements.define('login-input', LoginInputDos)
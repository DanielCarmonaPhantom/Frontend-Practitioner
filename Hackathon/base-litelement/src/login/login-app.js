import { LitElement, html, css } from 'lit-element';  
import "./login-input.js"
import "./sidenav.js"


import sandbox from '../sandbox/sandbox.js';

class LoginApp extends LitElement {  
    static get properties() {		
		return {
			src:{type:String}
		};
	}	
    static get styles(){
        return css `

        `;
    }
    constructor() {
        super();  
        this.src = "http://localhost:3000/users/"
        sandbox.on('login-user',this._auth.bind(this)); 
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            
            <div class='row justify-content-center mt-5'>
                
                <div class='col-12 col-md-6' >
                    <login-input></login-input>                    
                </div>
            </div>
        `;
    }
    _auth(e){

        let xhr = new XMLHttpRequest();
		xhr.onload = function(){
			if(xhr.status === 200){
				let apiResponse = JSON.parse(xhr.responseText);
                let result = apiResponse.filter(item => item.email===e.email)
                if (result[0].password == e.password){
                    console.log("Autentificado")
                    this._login(result[0].id, result[0].name)
                }                
			}
		}.bind(this);
	
		xhr.open("GET", this.src);
		xhr.setRequestHeader('Cache-Control', 'no-cache');
		xhr.send();
        
    }
    _login(id,name){
        sandbox.dispatch('user-id',{
            'id': id,
            'name': name
        },this);
    }


    
}

customElements.define('login-app', LoginApp);
import { LitElement, html, css } from 'lit-element';  
import "./sing-up-input.js"
import sandbox from '../sandbox/sandbox.js';

class SignUp extends LitElement {  
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
        sandbox.on('add-user',this.postUser.bind(this)); 
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

            <div class='row justify-content-center mt-5'>                
                <div class='col-12 col-lg-6' >                    
                    <sign-up-input></sign-up-input>                    
                </div>
            </div>
        `;
    }

    postUser(e){
		var body =JSON.stringify(e);

		let xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if (xhr.status === 201){
				let apiResponse = JSON.parse(xhr.responseText);
                this._login(apiResponse.id, apiResponse.name)
			}
		}.bind(this);
		xhr.open("POST", this.src);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(body);
	}
    _login(id,name){
        sandbox.dispatch('user-id',{
            'id': id,
            'name': name
        },this);
    }
    
    
}

customElements.define('sign-up', SignUp);
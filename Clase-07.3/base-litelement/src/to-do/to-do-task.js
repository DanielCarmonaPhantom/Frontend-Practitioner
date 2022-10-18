import { LitElement, html, css } from 'lit-element';  
import sandbox from '../sandbox/sandbox.js';

export class ToDoTask extends LitElement {    
	
	static get properties() {
                return {
			
			id:{type: Number},
                        tarea: {type: String},
			prioridad: {type: Number}
                };
        }

	static get styles()
	{
		return css `

                        li:hover{ background:#999; color:#fff;}
			.card {display:inline-block;}
			
		`;
	}


        constructor() {
                // Always calls super() first.
                super();
                this.id=0;
		this.tarea='';
		this.prioridad=0;
		
        }
	
	// Properties code up here	   
	render() {
			
	return html`
         	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">		
		<div class="card border-info mb-3" style="max-width: 18rem;">
  		<div class="card-header">Tarea #${this.id} - Prioridad ${this.prioridad}</div>
  		<div class="card-body text-info">
    		<h5 class="card-title">Tarea Pendiente</h5>
    		<p class="card-text">${this.tarea}</p>
		<a href="#" class="btn btn-primary" @click="${this.removerTarea}">Remover</a>
  		</div>
		</div>
		`;
	}

	
        removerTarea()
        {
                sandbox.dispatch('remover-tarea',{'id':this.id},this);
        }
	

}

customElements.define('to-do-task', ToDoTask);

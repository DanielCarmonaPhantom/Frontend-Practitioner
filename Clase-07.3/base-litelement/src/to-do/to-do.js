import { LitElement, html, css } from 'lit-element';  
import './to-do-task.js';
import './to-do-input.js'
import sandbox from '../sandbox/sandbox.js';

class ToDo extends LitElement {    
	
	//Bind
	static get properties() {		
		return {
			title:{type:String},			
			tareas:{type:Array}
		};
	}	


	/*static get styles()	
	{
		return css `

			ul{list-style-type:none;
			padding: 0;}
		`;
	}*/


	constructor() {
		// Always calls super() first.
		super();

		this.title="";
		this.tareas=[];

		sandbox.on('remover-tarea',this.eliminar.bind(this));
		sandbox.on('agregar-tarea',this.agregar.bind(this));
	}


	// Properties code up here	   
	render() {

	
	return html`

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

		<div>
			<h3>${this.title}</h3>
			<to-do-input></to-do-input>

			<ul>
			
			${this.tareas.sort(function(a,b){return a.prioridad-b.prioridad;}).map(
				function(tarea)
				{
					return html `<to-do-task id="${tarea.id}" tarea="${tarea.texto}" prioridad="${tarea.prioridad}"></to-do-task>`;
				}.bind(this)
			)}
			</ul>

		`;
	}


	agregar(e)
        {
		//console.log(e.detail);
		var tarea={"id": this.getId(),"texto":e.texto,"prioridad":e.prioridad};
                this.tareas=[...this.tareas, tarea];
        }


        eliminar(e)
        {
                this.tareas=this.tareas.filter(function(tarea)
                {
                        return tarea.id!=e.id;
                });
        }

	updated()
	{
		this.dispatchCount();
	}	


	getId()
	{
		return Math.trunc(Math.random()*1000000);
	}

	dispatchCount()
	{
		sandbox.dispatch('count-tarea',{'count':this.tareas.length},this);
	}


}

customElements.define('to-do', ToDo);


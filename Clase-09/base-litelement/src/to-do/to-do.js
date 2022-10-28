import { LitElement, html, css } from 'lit-element';  
import './to-do-task.js';
import './to-do-input.js'
import sandbox from '../sandbox/sandbox.js';

class ToDo extends LitElement {    
	
	//Bind
	static get properties() {		
		return {
			title:{type:String},			
			tareas:{type:Array},
			src:{type:String}
		};
	}	
	constructor() {
		// Always calls super() first.
		super();

		this.title="";
		this.tareas=[];

		this.src = '';

		sandbox.on('remover-tarea',this.elimTarea.bind(this)); 
		sandbox.on('agregar-tarea',this.postTarea.bind(this));    
	}
  
	render() {	
		return html`
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
			<div>
				<h3>${this.title}</h3>
				<to-do-input></to-do-input>
				<ul>			
					${this.tareas.sort(function(a,b){return a.prioridad-b.prioridad;}).map(
						function(tarea){
							return html `<to-do-task id="${tarea.id}" tarea="${tarea.texto}" prioridad="${tarea.prioridad}"></to-do-task>`;
						}.bind(this)
					)}
				</ul>
		`;
	}
	agregar(e){
		//console.log(e.detail);
		var tarea={"id": this.getId(),"texto":e.texto,"prioridad":e.prioridad};
		this.tareas=[...this.tareas, tarea];
		
    }
	eliminar(e){
		this.tareas=this.tareas.filter(function(tarea){
			return tarea.id!=e.id;
        });
    }
	getId(){
		return Math.trunc(Math.random()*1000000);
	}
	updated(changeProperties){
		this.dispatchCount();
		
		if (changeProperties.has("src")) {

			this.getTareas();
		}
	}
	dispatchCount(){
		sandbox.dispatch('count-tarea',{'count':this.tareas.length},this);
	}
	postTarea(e){
		var body =JSON.stringify(e);

		let xhr = new XMLHttpRequest();
		xhr.onload = function (){
			if (xhr.status === 201){
				let apiResponse = JSON.parse(xhr.responseText);
				this.agregar(e)
				this.getTareas();
			}
		}.bind(this);
		xhr.open("POST", this.src);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(body);
		console.log("Almacenado");
	}
	getTareas(){
		let xhr = new XMLHttpRequest();
	
		xhr.onload = function(){
			if(xhr.status === 200){
				let apiResponse = JSON.parse(xhr.responseText);
				this.tareas = apiResponse;
				console.log(this.tareas);
			}
		}.bind(this);
	
		xhr.open("GET", this.src);
		xhr.setRequestHeader('Cache-Control', 'no-cache');
		xhr.send();
	}
	elimTarea(e){		
	
		let xhr = new XMLHttpRequest();
	
		xhr.onload = function(){
			if(xhr.status === 200){
				let apiResponse = JSON.parse(xhr.responseText);
				console.log(apiResponse);
				this.eliminar(e);
				console.log("Borrado");
			}
		}.bind(this);
	
		xhr.open("DELETE", this.src + e.id);
		xhr.setRequestHeader('Cache-Control', 'no-cache');
		xhr.send();


	}


}

customElements.define('to-do', ToDo);


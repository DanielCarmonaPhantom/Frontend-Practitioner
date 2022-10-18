import { LitElement, html, css } from 'lit-element';  
import '../to-do/to-do.js';
import sandbox from '../sandbox/sandbox.js';


class MainApp extends LitElement {   

	static get styles()
	{
		return css `
			div
			{
			   margin-top:100px;	
			}
		`;
	}

	constructor()
	{
		super();
		sandbox.on('agregar-tarea',this.log.bind(this));
	}

	render() {
		return html`
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
			<div class='container'>
				<to-do title='Lista de tareas' 
				tareas='[{"id":123456,"texto":"Tarea 1","prioridad":3},
					 {"id":125674,"texto":"Tarea 2","prioridad":2},
					 {"id":126789,"texto":"Tarea 3","prioridad":1}]'></to-do>
			</div>
		`;
	}

	
	log(e)
	{
		console.log(e.texto);
	}

}  

customElements.define('main-app', MainApp); 

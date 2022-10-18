import { LitElement, html } from 'lit-element';  
import './header-app.js';
import './main-app.js';
import './footer-app.js';

export class MyApp extends LitElement {   

	constructor()
	{
		super();
	}

	render() {
		return html`
			<header-app></header-app>
			<main-app @agregar-tarea="${this.log}"></main-app>
			<footer-app></footer-app>
		`;
	}

	log()
	{
		console.log('agegar');
	}

}  

customElements.define('my-app', MyApp); 
 

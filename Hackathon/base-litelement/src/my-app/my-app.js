import { LitElement, html } from 'lit-element'; 
import { router } from "lit-element-router";

import './header-app.js';
import './header-login-app.js';
import './app-main.js';
import './footer';

import '../sing-up/sing-up.js'
import '../login/login-app.js'

import '../profile/profile-app.js'

import '../mascotas/mascotas-app.js'

import sandbox from '../sandbox/sandbox.js';

export class MyApp extends router(LitElement) {   
	static get properties() {
		return {
		route: { type: String },
		params: { type: Object },
		query: { type: Object },
		data: { type: Object },
		success: {type: Boolean},

		idUser:{type:Number},
		nameUser: {type: String},

		srcProfile: {type: String},
		postulationRefresh:{type:Boolean}
		};
	}
	constructor()
	{
		super();

		this.success = false;
		this.success2 = false;

		this.idUser = 0;
		this.nameUser = '';

		this.srcProfile = '';

		this.postulationRefresh = false;


		sandbox.on('user-id',this._auth.bind(this)); 
		sandbox.on('logout-user',this._logout.bind(this)); 
		sandbox.on('refresh-profile',this._refresh.bind(this)); 
		sandbox.on('postulation-created',this._postulationCreated.bind(this)); 
	}
	static get routes() {
		return [
		{
			name: "home",
			pattern: "",
			data: { title: "Home" }
		},
		{
			name: "login",
			pattern: "login"
		},
		{
			name: "registro",
			pattern: "registro"
		},
		{
			name: "perfil",
			pattern: "perfil",
			srcProfile: 'Hola'
		},
		{
			name: "adopciones",
			pattern: "adopciones"
		},
		{
			name: "postulate",
			pattern: "postulate"
		},

		];
	}
	
	router(route, params, query, data) {
		this.route = route;
		this.params = params;
		this.query = query;
		this.data = data;
		console.log(route, params, query, data);
	}

	render() {
		return html`

			${ this.success
			? html `
				<header-login-app nameUserHeader='${this.nameUser}'></header-login-app>
				<app-main active-route=${this.route}>
					<div route="adopciones">				
						<mascotas-app src="http://localhost:3000" postulationRefresh='${this.postulationRefresh}'></mascotas-app>						
					</div>
					<div route="perfil">						
						<profile-app srcProfile="${this.srcProfile}" idUser='${this.idUser}'></profile-app>
					</div>
					<div route="postulate">						
						<postulate-pet idUser='${this.idUser}'></postulate-pet>
					</div>
					
				</app-main>	
				<mascota-footer></mascota-footer>
			`
			: html `
			<header-app></header-app>
			
			<app-main active-route=${this.route}>
				<div route="home">					
					<login-app></login-app>
				</div>			
				<div route="registro">
					<sign-up></sign-up>
				</div>

			</app-main>	
			<mascota-footer></mascota-footer>
			`}

			
			
		`;
	}
	_auth(e){		
		this.idUser = e.id
		this.nameUser = e.name
		this.route = 'adopciones'
		this.success = true;
		
	}
	_logout(e){
		this.nameUser = ''
		this.route = 'home'
		this.success = false;
		
	}
	_refresh(){
		console.log("Refresh")
		this.srcProfile = 'http://localhost:3000'
		
	}
	_postulationCreated(){
		sandbox.dispatch('update-postulations',{},this);
		this.srcProfile = 'http://localhost:3000'
		this.route = 'perfil'
	}

	

}  

customElements.define('my-app', MyApp); 
 

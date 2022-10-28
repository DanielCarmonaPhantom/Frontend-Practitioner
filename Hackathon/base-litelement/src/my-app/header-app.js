
import { LitElement, html, css } from "lit-element";
import { router } from "lit-element-router";

import "./app-link";
import "./app-main";


class HeaderApp extends router(LitElement) {
	static get properties() {
		return {
		route: { type: String },
		params: { type: Object },
		query: { type: Object },
		data: { type: Object }
		};
	}
	static get styles(){
        return css `
			.navbar{
				background-color: #333;
			}
        `;
    }


	static get routes() {
		return [
		{
			name: "login",
			pattern: "login"
		},
		{
			name: "registro",
			pattern: "registro"
		},
		];
	}

	constructor() {
		super();
		this.route = "";
		this.params = {};
		this.query = {};
		this.data = {};
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
			<!-- CSS only -->
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
			
			<nav class="navbar navbar-expand-lg navbar-dark" style='background-color: #483D8B'>
				<div class="container-fluid">
					<app-link class="navbar-brand" href="/login">Home</app-link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarScroll">
						<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">               
							<li class="nav-item">
							<app-link class="nav-link" href="/registro">Registro</app-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>	
			
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

		`;
	}
}

customElements.define("header-app", HeaderApp);

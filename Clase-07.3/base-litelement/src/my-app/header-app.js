import { LitElement, html, css} from 'lit-element';  
import sandbox from '../sandbox/sandbox'

export class HeaderApp extends LitElement {   

	static get properties() {
                return {
                        total:{type:Number}
                };
        }

	static get styles()
	{
		return css `
			.count
			{
				color:white;
			}
		
		`;
	}

	constructor()
	{
		super();
		this.total=0;
		sandbox.on('count-tarea',this.setTotal.bind(this));
	}

	setTotal(e)
	{
		this.total=e.count;
	}

	render() {
		return html`
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
			<nav class="navbar navbar-inverse fixed-top bg-dark">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <a class="navbar-brand" href="">To Do APP</a>
			      <span class='count'>${this.total} tareas restantes</span>  	
			    </div>
  			</div>
			</nav>
		`;
	}

}  

customElements.define('header-app', HeaderApp); 

import {LitElement, html, css} from 'lit-element';
import sandbox from '../sandbox/sandbox.js';

class HeaderApp extends LitElement {
    static get properties(){
        return {
            total:{type:Number}
        };    
    }
    static get styles()
    {
    return css `
        .count{
            color:white;
        }
        `;
    }
    constructor (){        
        super();
        
        this.total = 0;
        sandbox.on('count-tarea', this.setTotal.bind(this))
    }
    setTotal(e){
        this.total = e.count;
    }
    render (){
        return html `
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">To Do APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            Tareas restantes (${this.total})
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>            
        `;
    }
}
customElements.define ('header-app', HeaderApp)
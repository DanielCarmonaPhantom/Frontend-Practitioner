import {LitElement, html, css} from 'lit-element';
import sandbox from '../sandbox/sandbox.js';


class ToDoTask extends LitElement {
    static get properties(){
        return {
            id: {type:Number},
            texto: {type:String},
            prioridad: {type: Number},
        }; 
    }
    static get styles()
    {
        return css `


                    `;
    }
    constructor(){
        super();
        this.id=0;
        this.texto=[];
        this.prioridad=0;
        
        
    }
render (){
    return html `
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <div>
        <div class="card border-info mb-3" style="max-width: 18rem;">
        <br><br>
            <div class="card-header">Tarea #${this.id} - Prioridad ${this.prioridad}</div>
            <div class="card-body text-info">
                <h3 class="card-title">Tarea Pendiente</h3>
                <p class="card-text"">${this.texto}</p>
                <a href="#" class="btn btn-danger" @click="${this.removerTarea}">Remover</a>
            </div>    
        </div>
    </div>
   
    `;
}

    removerTarea(){
        // this.dispatchEvent(new CustomEvent('remover-texto',{detail:{'id':this.id}}));
        sandbox.dispatch('remover-tarea',{
            'id': this.id
        }, this);
    }

}
customElements.define('to-do-task', ToDoTask);
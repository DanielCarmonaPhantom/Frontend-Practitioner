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
            ul{list-style-type:none; padding:0px;}
            li
            {
                width: 100%;
                height:30px;
                line-heigth:30px;
                border-bottom:1px solid #ccc;
            }
            li:hover{background:#999; color:#fff;}
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap/4.3.1/css/bootstrap.min.css">
        <div class="card border-info mb-3" style="max-width: 18rem;">
        <br><br>
            <div class="card-header">Tarea #${this.id} - Prioridad ${this.prioridad}</div>
            <div class="card-body text-info">
                <h3 class="card-title">Tarea Pendiente</h3>
                <p class="card-text"">${this.texto}</p>
                <a href="#" class=btn btn-primary" @click="${this.removerTarea}">Remover</a>
            </div>    
        </div>
   
    `;
}

removerTarea()
{
    // this.dispatchEvent(new CustomEvent('remover-texto',{detail:{'id':this.id}}));
    sandbox.dispatchE('remover-tarea',{
        'id': this.id
    }, this);
}

}
customElements.define('to-do-task', ToDoTask);
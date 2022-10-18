import {LitElement, html, css} from 'lit-element';
import sandbox from '../sandbox/sandbox.js';


class ToDoInput extends LitElement {
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
        this.texto=[];
        this.prioridad=0;
    }
    render (){
        return html `
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        
        <form>
        <div class="mb-3">
            <label for="texto" class='form-label'>Tareas para agregar</label>
            <input class='form-control' value="${this.texto}" type="text" id="texto" name="texto" @change=${this.atexto}></input>

            <div id="textoHelp" class="form-text">Debes nombrar la tarea</div>
        </div>
        <div class="mb-3">
            <label class='form-label' for="prioridad">PRIORIDAD</label>
            <select class='form-control' name="prioridad" @change=${this.aprioridad}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>

        <input class='btn btn-primary' type="button" value='Agregar' @click="${this.agregarTarea}"/>
        </form>  
         

        `;
    }

    agregarTarea()
    {
        // this.dispatchEvent(new CustomEvent('agregar-tarea',{detail:{'texto':this.texto, 'prioridad': this.prioridad}}));
        sandbox.dispatch('agregar-tarea', {'texto':this.texto, 'prioridad': this.prioridad}, this);
    }
    atexto(e){
        this.texto = e.target.value; 
    }
    aprioridad(e){
        this.prioridad=e.target.value;
    }
}
customElements.define('to-do-input', ToDoInput)
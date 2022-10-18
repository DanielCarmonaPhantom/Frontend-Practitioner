import {LitElement, html, css} from 'lit-element';
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
        <label for="text">Tareas para agregar</label>
        <input value="${this.texto}" type="text" id="texto" id="texto" name="texto" @change=${this.atexto}></input>
        <label for="prioridad">PRIORIDAD</label>
        <select name="prioridad" @change=${this.aprioridad}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
        <input type="button" value='Agregar' @click="${this.agregarTarea}"/>
    `;
}

agregarTarea()
{
    this.dispatchEvent(new CustomEvent('agregar-tarea',{detail:{'texto':this.texto, 'prioridad': this.prioridad}}));
}
atexto(e){
   this.texto = e.target.value; 
}
aprioridad(e){
    this.prioridad=e.target.value;
}
}
customElements.define('to-do-input', ToDoInput)
import { LitElement, html, css } from 'lit-element';

class ToDoTask extends LitElement{
    static get properties(){
        return {
            id: {type: Number},
            tarea: {type: String},
            prioridad: {type: Number}
        }
    }

    static get styles(){
        return css `
            li {
                width: 100%;
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid #ccc;
            }
            li :hover{
                background-color: #999;
                color: #ccc;
          }
        `;
    }
    constructor(){
        super()

        this.id = 0;
        this.tarea = '';
        this.prioridad = 0;
    }
    render(){
        return html `
            <li>
            ${this.id} - ${this.tarea}  - ${this.prioridad} <input type ="button" value='X' @click="${this.removerTarea}"  />
            </li>
        `;
    }
    removerTarea(){
        console.log("Se remueve la tarea")
        this.dispatchEvent(new CustomEvent('remover-tarea' ,{
            detail:{
                'id': this.id
                }
            }
        ));
    }
}
customElements.define('to-do-task', ToDoTask)

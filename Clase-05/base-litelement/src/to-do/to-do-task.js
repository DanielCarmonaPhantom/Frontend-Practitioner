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
                ${this.id} - ${this.area} } - ${this.prioridad}
            </li>
        `;
    }
}
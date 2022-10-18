import {LitElement, html, css} from 'lit-element';
import '../to-do/to-do.js';


class MainApp extends LitElement{
    static get properties(){
        return {

        };
    }

    static get styles(){
        return css `div {
            text-align: center;        
        }`;
    }

    constructor () 
    {
        super();
    }

    render (){
        return html `
        <div class='main'>
            <to-do title="Lista de tareas" tareas = '[
                    {"texto" : "ESTA ES LA 2DA TAREA", "prioridad":2, "id": "123"},
                    {"texto" : "ESTA ES LA 1ra TAREA", "prioridad":1, "id": "345"}
                
            ]'>

            </to-do>
        </div>

        `;
    }
}
customElements.define('main2-app', MainApp);

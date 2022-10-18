import {LitElement, html, css} from 'lit-element';
import '../to-do/to-do.js';

class MainApp extends LitElement {

    static get properties(){

        return {

        };
    }

    static get styles(){
        return css
            `div {
                text-align:center;
            }
        `;
    }

    constructor (){
        super();
    }
    render (){
        return html `<div class='main'>
                <to-do title='Lista' tareas = '
                [
                    {"id": 1 ,"texto": "Pasear el perro", "prioridad":2},
                    {"id": 2 ,"texto": "Lavar el auto", "prioridad":1},
                    {"id": 3 ,"texto": "Pintar la casa", "prioridad":1}
                ]
                '></to-do>
            </div>
        `;
    }
}
customElements.define ('main-app', MainApp)

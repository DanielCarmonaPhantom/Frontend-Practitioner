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
            <to-do title="Lista de tareas">

            </to-do>
        </div>

        `;
    }
}
customElements.define('main2-app', MainApp);

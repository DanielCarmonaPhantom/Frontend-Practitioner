import { LitElement, html } from 'lit-element';
import '../persona-header/persona-header.js';
import '../persona-main/persona-main.js';
import '../persona-footer/persona-footer';
import '../persona-sidebar/persona-sidebar.js'


class PersonaApp extends LitElement {

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <persona-header></persona-header>
            <div class='row'>
                <persona-sidebar class="col-2" @new-person="${this.newPerson}"></persona-sidebar>
                <persona-main></persona-main>
            </div>
            <persona-footer></persona-footer>
        `;
    }
    newPerson(e) {
        console.log("newPerson en PersonaApp");	
        this.shadowRoot.querySelector("persona-main").showPersonForm = true;
    }
}

customElements.define('persona-app', PersonaApp)
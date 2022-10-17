import { LitElement, html } from 'lit-element';

class PersonaFooter extends LitElement {

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <h5>@Persona App 2020</h5>
        `;
    }
}

customElements.define('persona-footer', PersonaFooter)
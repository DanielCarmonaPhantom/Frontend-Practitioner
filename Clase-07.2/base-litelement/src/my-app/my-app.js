import {LitElement, html} from 'lit-element';

import './header-app.js';
import './main2-app.js';
import './footer-app';

class MyApp extends LitElement {
    constructor(){
        super ();

        // this.addEventListener('count-tarea', this.actualizeCount);
    }
    actualizeCount(e){
        // this.shadowRoot.querySelector('header-app').setTotal(e.detail.count);
    }

    render (){
        return html`
            <header-app></header-app>
            <main2-app></main2-app>    
            <footer-app></footer-app>
        `;
    }    
}
customElements.define('my-app', MyApp );

import {LitElement, html, css} from 'lit-element'

class FooterApp extends LitElement {

static get properties(){
 return {
 };    
}
static get styles()
{
  return css 
            `div 
            {
                position:fixed;
                bottom:0px;
                background:#888;
                color:#ccc;
                width:100%;
                padding:20px,10px;
                text-align:right;
                overflow: hidden;
            }
        `;
}
    constructor (){
        super();
    }
    render (){
        return html `<div>
        <p>Hola esto es footer</p>
        </div>`;
    }
}
        customElements.define ('footer-app', FooterApp)
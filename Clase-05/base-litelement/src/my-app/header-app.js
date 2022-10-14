import {LitElement, html, css} from 'lit-element'

class HeaderApp extends LitElement {

static get properties(){
 return {
 };    
}
static get styles()
{
  return css 
            `div 
            {
                position:relative;
                bottom:0px;
                background:#788;
                color:#0000ff;
                width:100%;
                padding:20px,10px;
                text-align:center;
                overflow: hidden;
            }
        `;
}
    constructor (){
        super();
    }
    render (){
        return html `<div>
        <h1>Hola soy encabezado</h1>
        </div>`;
    }
}
        customElements.define ('header-app', HeaderApp)
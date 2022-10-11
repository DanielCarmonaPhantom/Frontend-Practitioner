import {LitElement, html, css} from 'lit-element'

class MainApp extends LitElement {

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
                background-color: #ABBAEA;
                color:#FF5733;
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
        <h1>Hola soy Main</h1>
        <img class="pe" width="20%" heigth="20%" src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000">
        </div>`;
    }
}
        customElements.define ('main-app', MainApp)